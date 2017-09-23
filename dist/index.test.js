'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Log', function () {
    it('import default', function () {
        (0, _index2.default)('abc');
        (0, _index2.default)('abc', 'def');
    });
    it('import destructure', function () {
        (0, _index.log)('abc_Destructure');
        (0, _index.log)('abc_Destructure', 'def_Destructure');
    });
    it('default log', function () {
        (0, _index2.default)('default expression');
        (0, _index2.default)('default expression', 'another default expression');
    });
    it('colored log ', function () {
        (0, _index2.default)({ color: 'cyan' }, 'cyan expression', { color: 'yellow' }, 'yellow expression');
        (0, _index2.default)('default expression');
        (0, _index2.default)({ color: 'green' }, 'green expression', { color: 'red' }, 'red expression');
        (0, _index2.default)({ color: 'green' }, 'green expression', { color: 'reset' }, 'default expression');
    });
    it('should print null and undefined ', function () {
        (0, _index2.default)({ color: 'green' }, undefined, { color: 'red' }, 'red expression');
        (0, _index2.default)({ color: 'green' }, null, { color: 'reset' }, 'default expression');
    });
    it.only('should print objects ', function () {
        var obj = { teste: 'teste' };
        (0, _index2.default)({ color: 'green' }, obj, { color: 'red' }, 'red expression');
    });
});
describe('logInOut', function () {
    it('logs', function (done) {
        var add = function add(a, b) {
            return a + b;
        };
        function logTest(label, x) {
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
        }
        (0, _index.logInOut)(logTest, add, 1, 2);
    });
});
//# sourceMappingURL=index.test.js.map