'use strict';

var heapdump = require('heapdump')

var go = module.exports = function (checkInterval) {
  checkInterval = checkInterval || 15 * 60000 // every 15 minutes

  function check () {
    console.error('dumping heap');
    heapdump.writeSnapshot();
  }

  setInterval(check, checkInterval);
};
