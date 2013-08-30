'use strict';

var npm = require('./namespaces').npm;
var github = require('./namespaces').github;

var go = module.exports = function (db) {
  
  var sublevels = {};

  sublevels.npm = {
      users     :  db.sublevel(npm.users,     { valueEncoding :  'json' })
    , byGithub  :  db.sublevel(npm.byGithub,  { valueEncoding :  'utf8' })

    , packages  :  db.sublevel(npm.packages,  { valueEncoding :  'json' })
    , byOwner   :  db.sublevel(npm.byOwner,   { valueEncoding :  'utf8' })
    , byKeyword :  db.sublevel(npm.byKeyword, { valueEncoding :  'utf8' })
  };

  sublevels.github = {
      users     :  db.sublevel(github.users,     { valueEncoding :  'json' })
    , starred   :  db.sublevel(github.starred,   { valueEncoding :  'json' })

    , repos     :  db.sublevel(github.repos,     { valueEncoding :  'json' })
    , byOwner   :  db.sublevel(github.byOwner,   { valueEncoding :  'utf8' })

    , usersMeta :  db.sublevel(github.usersMeta, { valueEncoding :  'json' })
  }

  return sublevels;
};

// Test
if (!module.parent) {
  var leveldb = require('./leveldb');
  var dump = require('level-dump');
  leveldb.open(function (err, db) {
    if (err) return console.error(err);
    var sublevels = go(db);
    var npm = sublevels.npm;

    dump(npm.byGithub);

  });
}
