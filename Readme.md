[![Rubnet Logo](https://rubnet.fr/assets/img/now-logo.png)](http://rubnet.fr/)


  [![NPM Version][npm-image]][npm-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
import { CompanyRouter} from "./routes/company.route";
import express from 'express';
const app = express();

app.use('/compagny',new CompanyRouter().router)

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'localHost';

app.listen(PORT, () => {
    if (process.env.PORT)
      console.log(`Server is running in http://${URL}:${PORT} from env`)
    else
      console.log(`Server is running in http://${URL}:${PORT}`)
  })
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install 
```



## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * Content negotiation
  * Executable for generating applications quickly




## Quick Start

  

  Install dependencies:

```bash
$ npm install -g nodemon
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:PORT


## Examples

  To view the examples, clone the Express repo and install the dependencies:

```bash
$ git clone 
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/content-negotiation
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```



## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master