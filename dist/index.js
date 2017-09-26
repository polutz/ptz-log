'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logInOut = exports.log = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var BreakLine = function BreakLine(i, lastArg, arg) {
    var bl = notBreakFirstLine(i);
    bl = arg && arg.hasOwnProperty('breakLine') ? arg.breakLine : notBreakAfterConfig(lastArg, arg);
    return bl;
};
var notBreakFirstLine = function notBreakFirstLine(n) {
    return n === 0;
};
var notBreakAfterConfig = function notBreakAfterConfig(lastArg, arg) {
    return !(lastArg && lastArg.hasOwnProperty('ptzLogColor') || arg && arg.hasOwnProperty('ptzLogColor') || lastArg && lastArg.hasOwnProperty('breakLine'));
};
var log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log((0, _moment2.default)().format('H:mm:ss MMMM Do YYYY'));
    var ptzLogColor = '';
    var lastArg = {};
    var txt = '';
    args.map(function (arg, i) {
        if (i) lastArg = args[i - 1];
        var breakLine = BreakLine(i, lastArg, arg);
        txt += '' + (breakLine === true ? '\n' : '') + ptzLogColor;
        if (arg === null || arg === undefined) return txt += '' + ptzLogColor + arg + ' ';
        if (arg.ptzLogColor || arg.hasOwnProperty('breakLine')) return ptzLogColor = logColors[arg.ptzLogColor] || ptzLogColor || '';
        if (arg !== '') return txt += ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' ? JSON.stringify(arg, null, '\t') : arg) + ' ';
    });
    console.log(txt + logColors.reset + '\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n');
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