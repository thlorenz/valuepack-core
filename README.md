# valuepack-core [![build status](https://secure.travis-ci.org/thlorenz/valuepack-core.png)](http://travis-ci.org/thlorenz/valuepack-core)

Core utils and configurations for [valuepack](https://github.com/thlorenz/valuepack), the community driven rating system for nodejs modules on
npm in order to help in selecting the right one.

Read more [about its goals](https://github.com/thlorenz/valuepack/blob/master/goals.md).

## Disclaimer

This module is not at all useful by itself. I only put it on npm to get proper versioning and all the other npm goodness
when managing valuepack dependencies.

## Data organization

Two data stores, one for mining and one for analysis in order to allow updating, re-creating, etc. each separately.

Each data store is divided into sublevels which are [documented
here](https://github.com/thlorenz/valuepack-core/blob/master/sublevels.md).

mine sublevels should be accessed from the common
[mine/sublevels.js](https://github.com/thlorenz/valuepack-core/blob/master/mine/sublevels.js) module.

## Data mapping and querying

Several helpers to facilitate querying and/or mapping mine data across numerous sublevels exist in
[mine/map.js](https://github.com/thlorenz/valuepack-core/blob/master/mine/map.js)

### Mapping API

####*npmUserToPackageInfoStream(npmPackages, byOwner, username)*
```
/**
 * Maps the npm username to a stream of package infos for packages the user owns.
 *
 * @name npmUserToPackageInfoStream
 * @function
 * @param npmPackages {Sublevel} npm.packages
 * @param byOwner {Sublevel} npm.byOwner
 * @param username {String} npm username
 * @return {Stream} packageInfos from npmPackages sublevel, each info has the following properties:
 *  - user: npm user name
 *  - pack: npm package info
 */
```
