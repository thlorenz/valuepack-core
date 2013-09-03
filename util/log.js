'use strict';

var npmlog = require('npmlog')
  , path = require('path')
  , fs = require('fs')
  ;

var stderr_write = process.stderr.write;

if (process.env.VALUEPACK_DEBUG) npmlog.level = 'silly';

function formatDate (d) {
  return d.toDateString() +  ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
}

function enhance (level) {
  var origFn = npmlog[level];

  npmlog[level] = function () {
    var args = Array.prototype.slice.call(arguments);

    // '/lib/get-github-repos.js' becomes 'get-github-repos'
    args[0] = path.basename(args[0], '.js');
    return origFn.apply(this, args);
  };
}

[ 'error', 'warn', 'info', 'verbose', 'silly' ]
  .forEach(enhance);

module.exports = exports = npmlog;

function getFilestream (filename, count) {
  var ext = path.extname(filename);
  var numberedFilename = filename.slice(0, -ext.length) + '.' + count + ext;

    stderr_write('logfile: [' + numberedFilename + ']\n');
  return fs.createWriteStream(numberedFilename, { encoding: 'utf-8', flags: 'a' });
}

exports.writeTo = function (filename, writesToRollover) {
  writesToRollover = writesToRollover || 2000;
  var count = -1;
  var outlog, writes;

  var buf = '';

  function rollover () {
    writes = 0;
    count++;
    outlog = getFilestream(filename, count);
  }

  rollover();

  process.stderr.write = function (data) {

    buf += data;
    var parts = buf.split('\n');

    if (parts.length > 1) {
      var date = '\u001b[90m' + formatDate(new Date()) + ' \u001b[39m';
      outlog.write(date + parts[0] + '\n');
      buf = parts[1];
      writes++;
    }

    // logging to a huge file slows things down so we regularly roll over to the next one
    if (writes > writesToRollover) rollover();
  };
};

// Test
if (!module.parent) {
  var log = exports;
  var msgs = 0;
  log.writeTo(path.join(__dirname, '../logs', 'test.log'));

  log.info(__filename, 'message %d', msgs++);
}
