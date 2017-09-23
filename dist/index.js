'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logInOut = exports.log = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logColors = {
    reset: '\x1B[0m', bright: '\x1B[1m',
    dim: '\x1B[2m', underscore: '\x1B[4m',
    blink: '\x1B[5m', reverse: '\x1B[7m',
    hidden: '\x1B[8m',
    black: '\x1B[30m',
    red: '\x1B[31m', green: '\x1B[32m',
    yellow: '\x1B[33m', blue: '\x1B[34m',
    magenta: '\x1B[35m', cyan: '\x1B[36m',
    white: '\x1B[37m'
};
var log = function log() {
    console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log((0, _moment2.default)().format('H:mm:ss MMMM Do YYYY'));
    var color = '';

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args.map(function (arg, i) {
        if (arg === null || arg === undefined) return console.log(color + ' ' + arg);
        if (arg.color) return color = logColors[arg.color] || color || '';
        if (arg !== '') return console.log(color + ' ' + arg);
    });
    console.log(logColors.reset + '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n');
};
function logInOut(flog, fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    flog('in: \n', args);
    var out = fn.apply(undefined, args);
    flog('out: \n', out);
    return out;
}
exports.default = log;
exports.log = log;
exports.logInOut = logInOut;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map