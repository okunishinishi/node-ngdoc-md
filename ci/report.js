#!/usr/bin/env node

/**
 * Run report
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

apeTasking.runTasks([
    function (callback) {
        apeReporting.sendToCodeclimate('coverage/lcov.info', callback);
    }
], true);
