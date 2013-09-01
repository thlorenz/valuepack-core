'use strict';

var nib = require('../').nib;
var log = require('../util/log');
var mapStream = require('map-stream');
var tap = require('tap-stream');

/**
 * Maps the npm username to a stream of package infos for packages the user owns.
 *
 * @name npmUserToPackageInfoStream
 * @function
 * @param npmPackages {Sublevel} npm.packages
 * @param byOwner {Sublevel} npm.byOwner
 * @param username {String} npm username
 * @return {Stream} packageInfos from npmPackages sublevel, each info has the following properties:
 *  - user: npm user name
 *  - pack: npm package info
 */
exports.npmUserToPackageInfoStream = function (npmPackages, byOwner, username) {

  function packInfo (name, cb) {
    npmPackages.get(name, function (err, pack) {
      if (err) log.warn('github-logins', 'name', name, err);
      if (!err && pack) cb(null, { user: name, pack: pack }); 
      else cb();
    });
  }

  return byOwner
    .createReadStream({ start: username, end: username + nib, keys: false, values: true })
    .pipe(mapStream(packInfo))
}

// Test
if (!module.parent) {
  var sublevels  =  require('./sublevels');
  var leveldb    =  require('./leveldb');
  var nestStream =  require('nest-stream');
  var from       =  require('from');

  leveldb.open(function (err, db) {
    if (err) return console.error(err);
    var subnpm = sublevels(db).npm;
    subnpm.users.get('thlorenz', function (err, res) {
      if (err) return console.error(err);
      console.log(res);  
    });

    from([ 'raynos', 'thlorenz' ])
      .pipe(nestStream(exports.npmUserToPackageInfoStream.bind(null, subnpm.packages, subnpm.byOwner), ''))
      .pipe(tap());
  });
}
