'use strict';

var users =  'users'
  , repos =  'repos';


// The fix database will contain data used to fix mined data before it is analyzed
// it will NEVER be deleted to avoid costly repeats of data fetches for fixes (which will remain the same)
// therefore the data cannot be part of either the mined or analyzed database as
// those get refreshed with every update


// match npm repos and users to matching github repos
exports.npmatchub= {
    users :  users
  , repos :  repos
};
