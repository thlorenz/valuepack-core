'use strict';

var path       =  require('path')
  , dblocation =  process.env.VALUEPACK_MINE_DB || path.join(__dirname, '..', 'store/valuepack-mine.db')
  , leveldb = require('../leveldb');

var go = module.exports = leveldb(dblocation);

// Test
if (!module.parent) {
  go.open(function (err, db) {
      if (err) return console.error(err);
      console.log(db);  
    });
}
