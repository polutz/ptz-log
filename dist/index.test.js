'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('log', function () {
    it('import default', function () {
        (0, _index2.default)('abc');
        (0, _index2.default)('abc', 'def');
    });
    it('import destructure', function () {
        (0, _index.log)('abc_Destructure');
        (0, _index.log)('abc_Destructure', 'def_Destructure');
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
describe('logColor', function () {
    it('import logColor ', function () {
        (0, _index.logColor)('default expression');
        (0, _index.logColor)('default expression', 'another default expression');
        (0, _index.logColor)({ color: 'cyan' }, 'cyan expression', { color: 'yellow' }, 'yellow expression');
        (0, _index.logColor)('default expression');
        (0, _index.logColor)({ color: 'green' }, 'green expression', { color: 'red' }, 'red expression');
        (0, _index.logColor)({ color: 'green' }, 'green expression', { color: 'reset' }, 'default expression');
    });
});
//# sourceMappingURL=index.test.js.map