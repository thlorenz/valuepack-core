'use strict';

var level      =  require('level')
  , path       =  require('path')
  , dblocation =  process.env.VALUEPACK_MINE_DB || path.join(__dirname, '..', 'store/valuepack-mine.db');

exports.location = dblocation;
exports.destroy =  level.destroy.bind(level, dblocation);
exports.open    =  level.bind(level, dblocation, { valueEncoding: 'json' });

exports.close = function done(err, db) {
  if (err) { 
    console.trace();
    console.error(err);
  }
  console.log('closing db');
  db && db.close();
};