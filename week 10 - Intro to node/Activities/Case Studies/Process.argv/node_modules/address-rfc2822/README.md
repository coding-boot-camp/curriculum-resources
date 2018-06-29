[![Build Status][ci-img]][ci-url]
[![Win Build status][ci-win-img]][ci-win-url]
[![Code Climate][clim-img]][clim-url]
[![Coverage Status][cov-img]][cov-url]
[![Dependencies][dep-img]][dep-url]
[![Greenkeeper badge][gk-img]][gk-url]


address-rfc2822
==================

Parser for RFC2822 (Header) format email addresses.

This module parses RFC2822 headers containing addresses such as From, To, CC, and Bcc headers.

It is almost a direct port of the perl module Mail::Address and I'm grateful to the original authors of that module for the clean code and the tests.

Installation
------------

    npm install address-rfc2822

Usage
-----

    var addrparser = require('address-rfc2822');

    var addresses = addrparser.parse("Matt Sergeant <helpme+npm@gmail.com>");
    var address = addresses[0];

    console.log("Email address: " + address.address);
    console.log("Email name: " + address.name());
    console.log("Reformatted: " + address.format());
    console.log("User part: " + address.user());
    console.log("Host part: " + address.host());


License
-------

This module is MIT licensed.



[ci-img]: https://travis-ci.org/haraka/node-address-rfc2822.svg?branch=master
[ci-url]: https://travis-ci.org/haraka/node-address-rfc2822
[ci-win-img]: https://ci.appveyor.com/api/projects/status/hj1ggvutj3m6a2yk?svg=true
[ci-win-url]: https://ci.appveyor.com/project/msimerson/node-address-rfc2822-n5mwj
[dep-img]: https://david-dm.org/haraka/node-address-rfc2822.svg
[dep-url]: https://david-dm.org/haraka/node-address-rfc2822
[cov-img]: https://codecov.io/github/haraka/node-address-rfc2822/coverage.svg
[cov-url]: https://codecov.io/github/haraka/node-address-rfc2822?branch=master
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-template/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-template
[gk-img]: https://badges.greenkeeper.io/haraka/node-address-rfc2822.svg
[gk-url]: https://greenkeeper.io/
