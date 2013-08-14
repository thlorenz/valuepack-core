'use strict';

/**
 * Deletes all entries in the given leveldb or sublevel
 * 
 * @name exports
 * @function
 * @param sub {Leveldb} most likely a sub level unless you want to delete the entire database
 * @param cb {Function} called back when all entries were deleted 
 */
var go = module.exports = function (sub, cb) {
  sub
    .createReadStream()
    .on('end', cb)
    .pipe(sub.createWriteStream({ type: 'del' }));
};
