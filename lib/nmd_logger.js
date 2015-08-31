/**
 * Logger for this ngdoc-md
 * @module module:ngdoc-md/lib/nmd_logger
 *
 */


"use strict";

var colorprint = require('colorprint'),
    path = require('path');

function NmdLogger() {
}

NmdLogger.prototype = {
    logStarted: function (config) {
        colorprint.notice("Documenting started...");
        colorprint.trace(config);
    },
    logDone: function (dirname, filenames) {
        colorprint.debug('Document generated: %s', path.relative(process.cwd(), dirname));
        colorprint.trace(filenames);
        colorprint.notice("...documenting done!");
    }
};

module.exports = new NmdLogger({});