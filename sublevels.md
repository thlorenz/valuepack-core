**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [valuepack core sublevels](#valuepack-core-sublevels)
	- [mining](#mining)
		- [npm `users`](#npm-users)
			- [Encoding](#encoding)
			- [Sample](#sample)
			- [npm users indexed `byGithub`](#npm-users-indexed-bygithub)
				- [Encoding](#encoding-1)
				- [Sample](#sample-1)
		- [npm `packages`](#npm-packages)
			- [Encoding](#encoding-2)
			- [Sample](#sample-2)
			- [npm packages indexed `byOwner`](#npm-packages-indexed-byowner)
				- [Encoding](#encoding-3)
				- [Sample](#sample-3)
			- [npm packages indexed `byKeyword`](#npm-packages-indexed-bykeyword)
				- [Encoding](#encoding-4)
				- [Sample](#sample-4)
		- [github `users`](#github-users)
			- [Encoding](#encoding-5)
			- [Sample](#sample-5)
			- [github users `starred`](#github-users-starred)
				- [Encoding](#encoding-6)
				- [Sample](#sample-6)
			- [github users `meta`](#github-users-meta)
				- [Encoding](#encoding-7)
				- [Sample](#sample-7)
		- [github repos](#github-repos)
			- [Encoding](#encoding-8)
			- [Sample](#sample-8)
			- [github repos indexed `byOwner`](#github-repos-indexed-byowner)
				- [Encoding](#encoding-9)
				- [Sample](#sample-9)

# valuepack core sublevels

This section describes each sublevel used in the leveldb store along with some example data.

## mining

### npm `users`

Stores metadata of all npm users (name, email, full name, gihub login and twitter login).

#### Encoding

`utf8:json`

#### Sample

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

#### npm users indexed `byGithub`

Indexes all npm user names by their github login(s).

##### Encoding

`utf8:utf8`

##### Sample

```js
{ key: 'rexdf', value: '"rexdf"' }
{ key: 'rexmorgan', value: '"rexm"' }
{ key: 'reybango', value: '"reybango"' }
```

### npm `packages`

Stores metadata of all npm packages.

#### Encoding

`utf8:json`

#### Sample

```js
{ key: 'deftypes',
  value:
   { name: 'deftypes',
     owner: 'mizchi',
     email: 'miz404@gmail.com',
     repoUrl: null,
     versions: { '0.0.4': 'latest' },
     keywords: [],
     description: 'type annotation DSL' } }
{ key: 'defunc',
  value:
   { name: 'defunc',
     owner: 'imbcmdth',
     email: 'jon.carlos.rivera@gmail.com',
     repoUrl: 'git://github.com/imbcmdth/deFunc.git',
     versions: { '0.0.5': 'latest' },
     keywords: [ 'function', 'bind', 'parameter', 'arguments', 'defaults' ],
     description: 'Default function arguments helper' } }
```


#### npm packages indexed `byOwner`

Indexes all npm packages by the npm users that authored (owns) them.

##### Encoding

`utf8:utf8`

##### Sample

```js
{ key: 'cmenscherÿnode-netatmo', value: 'node-netatmo' }
{ key: 'cmfatihÿamazon-costs', value: 'amazon-costs' }
```

#### npm packages indexed `byKeyword`

Indexes all npm packages by the keywords that were included in their metadata.

##### Encoding

`utf8:utf8`

##### Sample

```js
{ key: 'authenticationÿbasicauth', value: '"basicauth"' }
{ key: 'authenticationÿbcrypt', value: '"bcrypt"' }
```


### github `users`

Stores metadata of all github users (name, followers, followersCount, id).

#### Encoding

`utf8:json`

#### Sample

```js
{ key: 'domenic',
  value:
   { name: 'domenic',
     followers: [ 
      'lpcnn23',
      'indexzero',
      'goatslacker',
        ...
     ],
     followersCount: 322,
     id: 617481 } }
```

#### github users `starred`

Stores the repos and count that a particular github user starred.

##### Encoding

`utf8:json`

##### Sample

```js
{ key: 'domenic',
  value: { 
    repos: [
      'mojombo/semver',
      'google/traceur-compiler',
      'montagejs/collections',
      'othiym23/uncurled',
        ...
    ],
    count: 205 } }
```

#### github users `meta`

Stores information about when each section of a github user's data was last updated/modified.

##### Encoding

`utf8:json`

##### Sample

```js
{ key: 'chrisdickinson',
  value:
   { name: 'chrisdickinson',
     detailsLastModified: 'Fri, 09 Aug 2013 20:14:38 GMT',
     reposLastModified: 'Thu, 18 Jul 2013 20:14:33 GMT',
     starredLastModified: 'Wed, 07 Oct 2009 08:37:21 GMT' } }
```

### github repos

Stores metadata about all github repos that were resolved via the given or deduced repoUrl from the metadata of npm packages.

#### Encoding

`utf8:json`

#### Sample

```js
{ key: 'visionmedia/node-fresh',
  value:
   { name: 'node-fresh',
     fullname: 'visionmedia/node-fresh',
     forks: 5,
     stars: 8,
     issues: 2,
     hasIssues: true,
     language: 'JavaScript',
     created: '2012-06-10T19:09:09Z',
     updated: '2013-07-25T08:43:38Z',
     owner: 'visionmedia' } }
{ key: 'visionmedia/node-github-url-from-git',
  value:
   { name: 'node-github-url-from-git',
     fullname: 'visionmedia/node-github-url-from-git',
     forks: 3,
     stars: 14,
     issues: 2,
     hasIssues: true,
     language: 'JavaScript',
     created: '2013-04-19T23:29:01Z',
     updated: '2013-08-01T05:17:22Z',
     owner: 'visionmedia' } }
```

#### github repos indexed `byOwner`

Indexes all github repos by the github login of their owner.

##### Encoding

`utf8:utf8`

##### Sample

```js
{ key: 'chrisdickinsonÿbeefy', value: '"chrisdickinson/beefy"' }
{ key: 'chrisdickinsonÿbfy-worker', value: '"chrisdickinson/bfy-worker"' }
```
