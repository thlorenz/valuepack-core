'use strict';

var level      =  require('levelup')
  , sublevel   =  require('level-sublevel');

module.exports = function (dblocation) {
  var leveldb = {};

  leveldb.location = dblocation;
  leveldb.destroy =  level.destroy.bind(level, dblocation);

  leveldb.open    =  function (cb) {
    level(dblocation, { valueEncoding: 'json' }, function (err, db) {
      if (err) return cb(err);
      cb(null, sublevel(db));
    });
  }

  leveldb.close = function done(err, db, cb) {
    if (err) { 
      console.error(err.stack);
      console.error(err);
    }
    console.error('closing db');
    db && db.close(cb);
  };

  return leveldb;
};
