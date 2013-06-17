'use strict';

var npmusers      =  'npm-users'
  , npmpackages   =  'npm-packages'
  , githubusers   =  'github-users'
  , githubrepos   =  'github-repos'
  , githubstarred =  'github-starred'


exports.npm = {

    users     :  npmusers
  , byGithub  :  'index-'    + npmusers    + '-byGithub'

  , packages  :  npmpackages
  , byOwner   :  'index-'    + npmpackages + '-byOwner'
  , byKeyword :  'index-'    + npmpackages + '-byKeyword'
};

exports.github = {

    users     :  githubusers
  , starred   :  githubstarred

  , repos     :  githubrepos
  , byOwner   :  'index-'    + githubrepos + '-byOwner'

  , usersMeta :  'meta-' + githubusers
};
