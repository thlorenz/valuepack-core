'use strict';

var level      =  require('levelup')
  , path       =  require('path')
  , dblocation =  process.env.VALUEPACK_MINE_DB || path.join(__dirname, '..', 'store/valuepack-mine.db');

exports.location = dblocation;
exports.destroy =  level.destroy.bind(level, dblocation);
exports.open    =  level.bind(level, dblocation, { valueEncoding: 'json' });

exports.close = function done(err, db, cb) {
  if (err) { 
    console.error(err.stack);
    console.error(err);
  }
  console.error('closing db');
  db && db.close(cb);
};
