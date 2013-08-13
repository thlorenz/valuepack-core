'use strict';

var npmusers      =  'npm-users'
  , npmpackages   =  'npm-packages'
  , githubusers   =  'github-users'
  , githubrepos   =  'github-repos'
  , githubstarred =  'github-starred'
  , maprepos      =  'map-repos'
  ;


/**
 * sublevels that store npm user and package information
 * 
 */
exports.npm = {

    users     :  npmusers
  , byGithub  :  'index-'    + npmusers    + '-byGithub'

  , packages  :  npmpackages
  , byOwner   :  'index-'    + npmpackages + '-byOwner'
  , byKeyword :  'index-'    + npmpackages + '-byKeyword'
};


/**
 * sublevels that store github user information and information about github repositories
 * 
 */
exports.github = {

    users     :  githubusers
  , starred   :  githubstarred

  , repos     :  githubrepos
  , byOwner   :  'index-'    + githubrepos + '-byOwner'

  , usersMeta :  'meta-' + githubusers
};

/**
 * sublevels that help to map npm users to github users and find github repos for npm packages
 * it stores matches that were made in the past in order to minimize expensive requests 
 * mad to find these matches
 * 
 * Some of this data will be duplicated, i.e. npm.byGithub will mirror mapusers information, but
 * this is desired in order to allow totally refreshing npm packages data without loosing the
 * match information
 *
 */
exports.map = {
  repos : maprepos
};
