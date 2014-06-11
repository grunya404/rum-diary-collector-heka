# rum-diary-collector-heka



[rum-diary-endpoint](https://github.com/shane-tomlinson/rum-diary-endpoint/) collector to send [rum-diary-js-client](https://github.com/shane-tomlinson/rum-diary-js-client) statistics to a Heka node.


## Installation

1. Install via npm: `npm install rum-diary-collector-heka`
2. Install via github: `git clone https://github.com/shane-tomlinson/rum-diary-collector-heka.git`

## Use as a collector with rum-diary-endpoint

1. Include `rum-diary-collector-heka`.
2. Create a rum-diary-endpoint middleware, configuring it with the endpoint path and the heka collector.
4. Register the middleware with the application.

```js
const rumDiaryEndpoint = require('rum-diary-endpoint');

const HekaCollector = require('rum-diary-collector-heka');
const hekaCollector = new HekaCollector({
  message: 'the-message'
});

const middleware = rumDiaryEndpoint.setup({
  endpoint: '/metrics',
  collectors: [ hekaCollector ]
});

app.use(middleware);
```


## Prerequisites:

* [nodejs](http://nodejs.org/) &gt;= 0.10.0

## Get Involved:

## Author:
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson

## License:
This software is available under version 2.0 of the MPL:

  https://www.mozilla.org/MPL/

