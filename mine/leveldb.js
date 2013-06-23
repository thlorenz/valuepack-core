'use strict';

var level      =  require('levelup')
  , sublevel   =  require('level-sublevel')
  , path       =  require('path')
  , dblocation =  process.env.VALUEPACK_MINE_DB || path.join(__dirname, '..', 'store/valuepack-mine.db');

exports.location = dblocation;
exports.destroy =  level.destroy.bind(level, dblocation);
exports.open    =  function (cb) {
  level(dblocation, { valueEncoding: 'json' }, function (err, db) {
    if (err) return cb(err);
    cb(null, sublevel(db));
  });
}

exports.close = function done(err, db, cb) {
  if (err) { 
    console.error(err.stack);
    console.error(err);
  }
  console.error('closing db');
  db && db.close(cb);
};
