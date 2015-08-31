#!/usr/bin/env node

var ngdocMd = require('ngdoc-md');

ngdocMd('src/javascripts/*.js', 'docs/apiguide', {

}, function(err){
    /*...*/
});