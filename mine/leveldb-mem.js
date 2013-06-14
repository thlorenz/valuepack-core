'use strict';

var Memdown    =  require('memdown') 
  , level      =  require('levelup')
  , dblocation =  'not/used'
  , factory    =  function (l) { return new Memdown(l); };

module.exports = function () {
  return level(dblocation, { db: factory });
};
