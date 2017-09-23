import * as assert from 'ptz-assert';
import log, { logInOut } from './index';
import { log as logDestructure, logColor } from './index';
describe('log', () => {
    it('import default', () => {
        log('abc');
        log('abc', 'def');
    });
    it('import destructure', () => {
        logDestructure('abc_Destructure');
        logDestructure('abc_Destructure', 'def_Destructure');
    });
});
describe('logInOut', () => {
    it('logs', (done) => {
        const add = (a, b) => a + b;
        function logTest(label, x) {
            switch (label) {
                case 'in: \n':
                    assert.deepEqual(x, [1, 2]);
                    break;
                case 'out: \n':
                    assert.equal(x, 3);
                    done();
                    break;
                default: throw Error('different labels');
            }
        }
        logInOut(logTest, add, 1, 2);
    });
});
describe('logColor', () => {
    it('import logColor ', () => {
        logColor('default expression');
        logColor('default expression', 'another default expression');
        logColor({ color: 'cyan' }, 'cyan expression', { color: 'yellow' }, 'yellow expression');
        logColor('default expression');
        logColor({ color: 'green' }, 'green expression', { color: 'red' }, 'red expression');
        logColor({ color: 'green' }, 'green expression', { color: 'reset' }, 'default expression');
    });
});
//# sourceMappingURL=index.test.js.map