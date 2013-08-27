'use strict';

var nib = require('../').nib;
var log = require('../util/log');
var mapStream = require('map-stream');

/**
 * Maps the username to a stream of package infos for packages the user owns.
 *
 * @name npmUserToPackageInfoStream
 * @function
 * @param npmPackages {Sublevel}
 * @param byOwner {Sublevel}
 * @param username {String} npm username
 * @return {Stream} packageInfos from npmPackages sublevel
 */
exports.npmUserToPackageInfoStream = function (npmPackages, byOwner, username) {

  function packInfo (name, cb) {
    npmPackages.get(name, function (err, pack) {
      if (err) log.warn('github-logins', 'name', name, err);
      if (!err && pack) cb(null, { user: username, pack: pack }); 
      else cb();
    });
  }

  return byOwner
    .createReadStream({ start: username, end: username + nib, keys: false, values: true })
    .pipe(mapStream(packInfo))
}

