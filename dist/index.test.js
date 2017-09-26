'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Log', function () {
    it('default log', function () {
        (0, _index2.default)('default expression');
        (0, _index2.default)('default expression', 'another default expression');
    });
    it('use previous ptzColorLog if invalid ptzColorLog', function () {
        (0, _index2.default)({ ptzColorLog: 'green' }, { ptzColorLog: 'invalid' }, 'invalid ptzColorLog chosen, using previous');
    });
    it('colored log ', function () {
        (0, _index2.default)({ ptzColorLog: 'green' }, 'green expression', { ptzColorLog: 'yellow' }, 'yellow expression', { ptzColorLog: 'red' }, 'red expression');
    });
    it('should print null and undefined ', function () {
        (0, _index2.default)({ ptzColorLog: 'magenta' }, 'magenta undefinded', undefined);
        (0, _index2.default)({ ptzColorLog: 'yellow' }, 'yellow null', null);
    });
    it('should print objects ', function () {
        (0, _index2.default)({ ptzColorLog: 'green' }, 'green object', { teste: 'teste' });
    });
    it('should print arrays ', function () {
        (0, _index2.default)({ ptzColorLog: 'yellow' }, 'yellow array', ['wor1', 'word2']);
    });
    it('should print functions ', function () {
        (0, _index2.default)({ ptzColorLog: 'blue' }, 'blue function', function () {
            return ['word1', 'word2'];
        });
    });
    it('should print NaN ', function () {
        (0, _index2.default)({ ptzColorLog: 'red' }, 'red NaN', NaN);
    });
    it('should print number ', function () {
        (0, _index2.default)({ ptzColorLog: 'cyan' }, 'cyan number', 666);
    });
    describe('Loging Objects', function () {
        it('should print promise ', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var promise, rejectPromise, promiseResolved, promiseRejected;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            promise = testPromise(true);

                            (0, _index2.default)({ ptzColorLog: 'yellow' }, 'promise pending', promise);

                            rejectPromise = function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fail) {
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    _context.prev = 0;
                                                    _context.next = 3;
                                                    return testPromise(false);

                                                case 3:
                                                    return _context.abrupt('return', _context.sent);

                                                case 6:
                                                    _context.prev = 6;
                                                    _context.t0 = _context['catch'](0);
                                                    return _context.abrupt('return', _context.t0);

                                                case 9:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, undefined, [[0, 6]]);
                                }));

                                return function rejectPromise(_x) {
                                    return _ref2.apply(this, arguments);
                                };
                            }();

                            _context2.next = 5;
                            return testPromise(true);

                        case 5:
                            promiseResolved = _context2.sent;

                            (0, _index2.default)({ ptzColorLog: 'green' }, 'promise resolved', promiseResolved);
                            _context2.next = 9;
                            return rejectPromise(false);

                        case 9:
                            promiseRejected = _context2.sent;

                            (0, _index2.default)({ ptzColorLog: 'red' }, 'promise rejected', promiseRejected);
                            (0, _index2.default)({ ptzColorLog: 'red' }, 'welcome', { ptzColorLog: 'yellow' }, 'to', { ptzColorLog: 'green' }, 'polutz!');

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        })));
    });
});
describe('logInOut', function () {
    it('logs', function (done) {
        var add = function add(a, b) {
            return a + b;
        };
        var logTest = function logTest(label, x) {
            switch (label) {
                case 'in: \n':
                    assert.deepEqual(x, [1, 2]);
                    break;
                case 'out: \n':
                    assert.equal(x, 3);
                    done();
                    break;
                default:
                    throw Error('different labels');
            }
        };
        (0, _index.logInOut)(logTest, add, 1, 2);
    });
});
var testPromise = function testPromise(fail) {
    return new Promise(function (resolve, reject) {
        return setTimeout(function () {
            return !fail ? reject('REJECT PROMISE!') : resolve('END PROMISE');
        }, 10);
    });
};
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map