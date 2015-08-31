/**
 * Test case for ngdocMd.
 * Runs with nodeunit.
 */

var ngdocMdBin = require.resolve('../bin/ngdoc-md'),
    execli = require('execcli');

var path = require('path');

var basedir = path.resolve(__dirname, '..'),
    tmpDir = path.resolve(basedir, 'tmp');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Ngdoc md'] = function (test) {
    execli(
        ngdocMdBin,
        [
            path.resolve(basedir, 'docs/mockups/angular-module-mockup/*.js'),
            path.resolve(tmpDir, 'by-bin/testing-angular-module-mockup-doc'),
            {}
        ], {}, function (err) {
            test.ifError(err);
            test.done();
        });
};

