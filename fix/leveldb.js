'use strict';

var path       =  require('path')
  , dblocation =  process.env.VALUEPACK_FIX_DB || path.join(__dirname, '..', 'store/valuepack-fix.db')
  , leveldb = require('../leveldb');

module.exports = leveldb(dblocation);
