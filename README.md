# ptz-log

[![Build Status](https://travis-ci.org/polutz/ptz-log.svg)](https://travis-ci.org/polutz/ptz-log)
[![NPM](https://img.shields.io/npm/v/ptz-log.svg)](https://www.npmjs.com/package/ptz-log)
[![codecov.io](http://codecov.io/github/polutz/ptz-log/coverage.svg)](http://codecov.io/github/polutz/ptz-log)
[![Dependency Status](https://gemnasium.com/polutz/ptz-log.svg)](https://gemnasium.com/polutz/ptz-log)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-log)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Awesome log and types for javascript and typescript!

## Translations
[pt-br](https://github.com/polutz/ptz-log/blob/master/README.pt-br.md)
[en-us](https://github.com/polutz/ptz-log/blob/master/README.md)

## Use

### Install
```
    npm install --save ptz-log
```

### How to use
```javasript
    import log from 'ptz-log';

    log('hi');
    // Colors are optional
    log({ ptzColorLog: 'red' }, 'welcome',
        { ptzColorLog: 'yellow' }, 'to',
        { ptzColorLog: 'green' }, 'polutz!');
```

How to use Ilog type as dependency injection, and provide your custom logs
```javasript
    import { Ilog, log } from 'ptz-log';

    const myLog: Ilog = function (...args) {
        console.log('From my custom logging:', ...args);
    }

    class Test {
        log: Ilog;

        constructor({ log: Ilog }) {
            this.log = log;
        }

        testing() {
            log('returning true!');
            return true;
        }
    }

    const test = new Test({ log: myLog });
    test.testing();
```



## Contribute

### NPM Global packages
```
    npm install -g ts-node babel-cli
```

### Setup
```
    npm install   
```

### Test
```
    npm test
```
