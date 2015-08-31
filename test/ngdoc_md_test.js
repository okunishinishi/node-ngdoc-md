/**
 * Test case for ngdocMd.
 * Runs with nodeunit.
 */

var ngdocMd = require('../lib/ngdoc_md.js');

var path = require('path');

var basedir = path.resolve(__dirname, '..'),
    tmpDir = path.resolve(basedir, 'tmp');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Ngdoc md'] = function(test){

    ngdocMd(
        path.resolve(basedir, 'docs/mockups/angular-module-mockup/*.js'),
        path.resolve(tmpDir, 'foo/bar/testing-angular-module-mockup-doc'),
        {

        },
        function(err){
            test.ifError(err);
            test.done();
        }
    );
};

