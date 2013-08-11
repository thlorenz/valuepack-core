'use strict';

var path       =  require('path')
  , dblocation =  process.env.VALUEPACK_MINE_DB || path.join(__dirname, '..', 'store/valuepack-mine.db')
  , leveldb = require('../leveldb');

module.exports = leveldb(dblocation);
