'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Log', function () {
    it('import destructure', function () {
        (0, _index.log)('abc_Destructure');
        (0, _index.log)('abc_Destructure', 'def_Destructure');
    });
    it('default log', function () {
        (0, _index2.default)('default expression');
        (0, _index2.default)('default expression another default expression');
    });
    it('use previous color if invalid color', function () {
        (0, _index2.default)({ color: 'green' }, { color: 'invalid' }, 'invalid color chosen, using previous');
    });
    it('colored log ', function () {
        (0, _index2.default)({ color: 'green' }, 'green expression', { color: 'yellow' }, 'yellow expression', { color: 'red' }, 'red expression');
    });
    it('should print null and undefined ', function () {
        (0, _index2.default)({ color: 'magenta' }, 'magenta undefinded', undefined);
        (0, _index2.default)({ color: 'yellow' }, 'yellow null', null);
    });
    it('should print objects ', function () {
        (0, _index2.default)({ color: 'green' }, 'green object', { teste: 'teste' });
    });
    it('should print arrays ', function () {
        (0, _index2.default)({ color: 'yellow' }, 'yellow array', ['wor1', 'word2']);
    });
    it('should print functions ', function () {
        (0, _index2.default)({ color: 'blue' }, 'blue function', function () {
            return ['word1', 'word2'];
        });
    });
    it('should print NaN ', function () {
        (0, _index2.default)({ color: 'red' }, 'red NaN', NaN);
    });
    it('should print number ', function () {
        (0, _index2.default)({ color: 'cyan' }, 'cyan number', 666);
    });
    it('should print promise ', async function () {
        var promise = testPromise(true);
        (0, _index2.default)({ color: 'yellow' }, 'promise pending', promise);
        var rejectPromise = async function rejectPromise(fail) {
            try {
                return await testPromise(false);
            } catch (error) {
                return error;
            }
        };
        var promiseResolved = await testPromise(true);
        (0, _index2.default)({ color: 'green' }, 'promise resolved', promiseResolved);
        var promiseRejected = await rejectPromise(false);
        (0, _index2.default)({ color: 'red' }, 'promise rejected', promiseRejected);
        (0, _index2.default)('returning', { color: 'green' }, 'true!', 'false');
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