/**
 * Test case for nmdDgeni.
 * Runs with nodeunit.
 */

var nmdDgeni = require('../lib/nmd_dgeni.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Nmd dgeni'] = function (test) {
    test.ok(nmdDgeni('foo', 'bar', {
        basedir: process.cwd()
    }));
    test.done();
};

