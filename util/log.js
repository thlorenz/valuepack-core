'use strict';

var npmlog = require('npmlog');

if (process.env.VALUEPACK_DEBUG) npmlog.level = 'silly';

module.exports = npmlog; 
