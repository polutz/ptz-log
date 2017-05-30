'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logInOut = exports.log = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = function log() {
    var _console;

    console.log('\n', '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log((0, _moment2.default)().format('H:mm:ss MMMM Do YYYY'));

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, [''].concat(args));
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', '\n');
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