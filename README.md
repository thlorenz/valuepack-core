# valuepack-core [![build status](https://secure.travis-ci.org/thlorenz/valuepack-core.png)](http://travis-ci.org/thlorenz/valuepack-core)

Core utils and configurations for [valuepack](https://github.com/thlorenz/valuepack), the community driven rating system for nodejs modules on
npm in order to help in selecting the right one.

Read more [about its goals](https://github.com/thlorenz/valuepack/blob/master/goals.md).

## Disclaimer

This module is not at all useful by itself. I only put it on npm to get proper versioning and all the other npm goodness
when managing valuepack dependencies.

## Leveldb Sublevels

This section describes each sublevel used in the leveldb store along with some example data.

### mining

#### npm

##### users

Stores metadata of all npm users (name, email, full name, gihub login and twitter login).

###### Encoding

`utf8:json`

###### Sample

```js
{ key: 'miranurul_huda',
  value:
   { name: 'miranurul_huda',
     email: 'miranurul_huda96@yahoo.co.id',
     github: null,
     twitter: '@miranurul_huda',
     fullname: 'miranurul_huda' } }
{ key: 'mirceam94',
  value:
   { name: 'mirceam94',
     email: 'mircea.mihalache94@gmail.com',
     github: 'Mirceam94',
     twitter: 'https://twitter.com/Mirceam94',
     fullname: 'Cris Mihalache' } }
{ key: 'mirceanis',
  value:
   { name: 'mirceanis',
     email: 'mirceanis@gmail.com',
     github: null,
     twitter: null,
     fullname: null } }
```

##### byGithub

Indexes all npm user names by their github login(s).

###### Encoding

`utf8:utf8`

###### Sample

```js
{ key: 'rexdf', value: '"rexdf"' }
{ key: 'rexmorgan', value: '"rexm"' }
{ key: 'reybango', value: '"reybango"' }
{ key: 'reynish', value: '"reynish"' }
{ key: 'rezoner', value: '"rezoner"' }
{ key: 'rfate', value: '"moatles"' }
```

