'use strict';
module.exports = function (obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
};
