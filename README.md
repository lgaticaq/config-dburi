# config-dburi

[![npm version](https://img.shields.io/npm/v/config-dburi.svg?style=flat-square)](https://www.npmjs.com/package/config-dburi)
[![npm downloads](https://img.shields.io/npm/dm/config-dburi.svg?style=flat-square)](https://www.npmjs.com/package/config-dburi)
[![Build Status](https://img.shields.io/travis/lgaticaq/config-dburi.svg?style=flat-square)](https://travis-ci.org/lgaticaq/config-dburi)
[![Coverage Status](https://img.shields.io/coveralls/lgaticaq/config-dburi/master.svg?style=flat-square)](https://coveralls.io/github/lgaticaq/config-dburi?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/lgaticaq/config-dburi.svg?style=flat-square)](https://codeclimate.com/github/lgaticaq/config-dburi)
[![dependency Status](https://img.shields.io/david/lgaticaq/config-dburi.svg?style=flat-square)](https://david-dm.org/lgaticaq/config-dburi#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/config-dburi.svg?style=flat-square)](https://david-dm.org/lgaticaq/config-dburi#info=devDependencies)

> Get database uris for your config settings

## Installation
```bash
npm i -S config-dburi
```

## Use

[Try on Tonic](https://tonicdev.com/npm/config-dburi)
```js
const dburi = require('config-dburi');

console.log(dburi.mongo()); // mongodb://localhost/test
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
