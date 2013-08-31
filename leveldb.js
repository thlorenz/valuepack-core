'use strict';

var level    =  require('levelup')
  , sublevel =  require('level-sublevel')
  , log      =  require('./util/log')
  ;

/**
 * Returns an API for a database at the given location.
 * 
 * @name exports
 * @function
 * @param dblocation {String} path to db
 */
module.exports = function (dblocation) {
  var leveldb = {};

  // path to given location
  leveldb.location = dblocation;

  // destroys the database at the given location by removing the database directory
  leveldb.destroy =  level.destroy.bind(level, dblocation);

  /**
   * Opens a database at the dblocation
   * 
   * @name open
   * @function
   * @param cb {Function} calls back with and error or the database with level-sublevel mixed in
   */
  leveldb.open    =  function (cb) {
    level(dblocation, { valueEncoding: 'json' }, function (err, db) {
      if (err) return cb(err);
      cb(null, sublevel(db));
    });
  }

  /**
   * Closes the given database.
   * 
   * @name close
   * @function
   * @param err {Error} If not null it is logged to the console.
   * @param db {LevelDB} database to close
   * @param cb {Function}
   */
  leveldb.close = function done(err, db, cb) {
    if (err) { 
      log.error('core-leveldb', err.stack);
      log.error('core-leveldb', err);
    }
    log.info('core-leveldb', 'closing db');
    db && db.close(cb);
  };

  return leveldb;
};
