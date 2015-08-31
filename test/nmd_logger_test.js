/**
 * Test case for nmdLogger.
 * Runs with nodeunit.
 */

var nmdLogger = require('../lib/nmd_logger.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Nmd logger'] = function (test) {
    nmdLogger.logStarted({
        foo: 'bar'
    });
    nmdLogger.logDone('foo', ['bar', 'baz']);
    test.done();
};

