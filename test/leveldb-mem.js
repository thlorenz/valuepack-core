'use strict';

var test = require('tap').test
  , leveldb = require('../mine/leveldb-mem')  

test('\nput and get object from/to in memory test db', function (t) {
  t.plan(5)

  leveldb.open(function (err, db) {
    t.notOk(err, 'opens without error')
    t.equal(db.location, 'in/memory', 'valid in memory db with location set')

    db.put('music', { jazz : 'guitar', player: 'wes montgomery' }, function (err) {
      t.notOk(err, 'put returns no error')  

      db.get('music', function (err, res) {
        t.notOk(err, 'get returns no error')  
        t.deepEqual(res, { jazz : 'guitar', player: 'wes montgomery' }, 'returns put object')
      })
    })
  })
})
