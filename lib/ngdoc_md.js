/**
 * Generate angular modules.
 * @function docAngularModules
 * @param {string[]} src - Source file name patterns.
 * @param {string} dest - Destination directories.
 * @param {options} [options] - Optional settings.
 * @param {string} [options.basedir=process.cwd()] - Base directory path.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    arrayreduce = require('arrayreduce'),
    nmdDegeni = require('./nmd_dgeni'),
    nmdLogger = require('./nmd_logger');


/** @lends doAngularModules */
function doAngularModules(src, dest, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
    dest = args.pop('string');
    var arrayConcat = arrayreduce.arrayConcat();
    src = args.remain()
        .reduce(arrayConcat, [])
        .map(function (src) {
            return src.split(',');
        })
        .reduce(arrayConcat, []);

    if (!dest) {
        callback(new Error('dest is required.'));
        return;
    }
    var cwd = process.cwd();
    var basedir = options.basedir || cwd;

    nmdLogger.logStarted({
        basedir: basedir,
        src: src.map(function (src) {
            return path.relative(cwd, src);
        }),
        dest: path.relative(cwd, dest),
        options: options
    });


    var dgeni = nmdDegeni(src, dest, {
        basedir: basedir
    });
    dgeni.generate().then(function (docs) {
        var generated = docs.map(function (doc) {
            return doc.outputPath;
        });
        nmdLogger.logDone(dest, generated);
        callback(null, docs);
    });

}

module.exports = doAngularModules;