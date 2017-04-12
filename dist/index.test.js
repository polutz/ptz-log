'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('log', function () {
    it('exists', function () {
        (0, _index2.default)('abc');
        (0, _index2.default)('abc', 'def');
    });
});
//# sourceMappingURL=index.test.js.map