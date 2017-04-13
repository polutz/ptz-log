'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=index.test.js.map