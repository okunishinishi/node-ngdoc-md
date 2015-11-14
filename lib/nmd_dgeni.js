/**
 * Create dgeni instance for markdown.
 * @memberof module:ngdoc-md/lib
 * @function nmdDgni
 * @param {string} src - Source filename pattern.
 * @param {string} dest - Destination directory path.
 * @param {object} options - Optional settings.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    Dgeni = require('dgeni'),
    dgeniMarkdown = require('dgeni-markdown'),
    dgeniNgdocPackage = require('dgeni-packages/ngdoc');


/** @lends nmdDgni */
function nmdDgni(src, dest, options) {
    var args = argx(arguments);
    src = args.shift('string|array');
    dest = args.shift('string');
    options = args.pop('object') || {};

    var basedir = options.basedir || process.cwd();

    var Package = Dgeni.Package;

    var ngdocMdPackage = new Package('ngdoc-md', [
        dgeniMarkdown,
        dgeniNgdocPackage
    ])

        .config(function (readFilesProcessor) {
            readFilesProcessor.basePath = basedir;
            readFilesProcessor.sourceFiles = src.map(function (src) {
                return {
                    include: src,
                    basePath: basedir
                }
            });
        })
        .config(function (writeFilesProcessor) {
            writeFilesProcessor.outputFolder = path.resolve(basedir, dest);
        });
    return new Dgeni([
        ngdocMdPackage
    ]);
}

module.exports = nmdDgni;
