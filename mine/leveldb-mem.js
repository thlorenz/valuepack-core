'use strict';

var Memdown    =  require('memdown') 
  , level      =  require('levelup')
  , dblocation =  'in/memory'
  , factory    =  function (l) { return new Memdown(l); };

exports.location = dblocation;
exports.destroy = function () { console.error('destroying db'); };
exports.open  = function (cb) {
  return level(dblocation, { db: factory, valueEncoding: 'json' }, cb);
};

exports.close = function done(err, db, cb) {
  if (err) { 
    console.trace();
    console.error(err);
  }
  console.error('closing db');
  db && db.close(cb);
};
