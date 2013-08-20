'use strict';

var npm = require('./namespaces').npm;

var go = module.exports = function (db) {
  
  var sublevels = {};

  sublevels.npm = {
      users     :  db.sublevel(npm.users, { valueEncoding     :  'json' })
    , packages  :  db.sublevel(npm.packages, { valueEncoding  :  'json' })
    , byGithub  :  db.sublevel(npm.byGithub, { valueEncoding  :  'utf8' })
    , byOwner   :  db.sublevel(npm.byOwner, { valueEncoding   :  'utf8' })
    , byKeyword :  db.sublevel(npm.byKeyword, { valueEncoding :  'utf8' })
  };

  return sublevels;
};
