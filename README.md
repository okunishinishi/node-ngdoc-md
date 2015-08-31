ngdoc-md
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-ngdoc-md
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-ngdoc-md
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-ngdoc-md.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-ngdoc-md/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-ngdoc-md
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-ngdoc-md.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-ngdoc-md.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-ngdoc-md
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-ngdoc-md.svg
[bd_npm_url]: http://www.npmjs.org/package/ngdoc-md
[bd_npm_shield_url]: http://img.shields.io/npm/v/ngdoc-md.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Generate ngdoc with markdown format. 

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install ngdoc-md --g
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
-----

Generate ngdoc documents from js source files.

```bash
$ ngdoc-md "src/javascripts/**/*.js" "docs/apiguide"
```


#### Options

```bash
$ ngdoc-md -h

  Usage: ngdoc-md [options] <src> <dest>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -v, --verbose  Show verbose log.
    -b, --basedir  Working directory path.


```


<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.Programmatic.md.hbs" Start -->

<a name="section-docs-readme-03-programmatic-md"></a>
Programmatic API
-----

`ngdoc-md` also provides programmatic API.

Install as a local module,

```bash
$ npm installinstall ngdoc-md --save-dev
```

then,

```javascript
#!/usr/bin/env node

var ngdocMd = require('ngdoc-md');

ngdocMd('src/javascripts/*.js', 'docs/apiguide', {

}, function(err){
    /*...*/
});
```

<!-- Section from "docs/readme/03.Programmatic.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-ngdoc-md/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [dgeni](https://github.com/angular/dgeni)
+ [dgeni-markdown](https://github.com/k-kinzal/dgeni-markdown)

<!-- Links End -->
