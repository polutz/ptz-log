'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logColor = exports.logInOut = exports.log = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logColors = {
    reset: '\x1b[0m', bright: '\x1b[1m',
    dim: '\x1b[2m', underscore: '\x1b[4m',
    blink: '\x1b[5m', reverse: '\x1b[7m',
    hidden: '\x1b[8m', black: '\x1b[30m',
    red: '\x1b[31m', green: '\x1b[32m',
    yellow: '\x1b[33m', blue: '\x1b[34m',
    magenta: '\x1b[35m', cyan: '\x1b[36m',
    white: '\x1b[37m'
};
var logColor = function log() {
    console.log('\n', '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log((0, _moment2.default)().format('H:mm:ss MMMM Do YYYY'));
    var color = '';

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args.map(function (arg, i) {
        if (arg.color) return color = logColors[arg.color];
        if (typeof arg === 'string' && arg !== '') return console.log(color, '', arg);
    });
    console.log(logColors.reset, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', '\n');
};
var log = function log() {
    var _console;

    console.log('\n', '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log((0, _moment2.default)().format('H:mm:ss MMMM Do YYYY'));

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    (_console = console).log.apply(_console, [''].concat(args));
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', '\n');
};
function logInOut(flog, fn) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
    }

    flog('in: \n', args);
    var out = fn.apply(undefined, args);
    flog('out: \n', out);
    return out;
}
exports.default = log;
exports.log = log;
exports.logInOut = logInOut;
exports.logColor = logColor;
//# sourceMappingURL=index.js.map