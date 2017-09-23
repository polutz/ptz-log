import * as assert from 'ptz-assert';
import log, { logInOut } from './index';
import { log as logDestructure } from './index';
describe('Log', () => {
    it('import default', () => {
        log('abc');
        log('abc', 'def');
    });
    it('import destructure', () => {
        logDestructure('abc_Destructure');
        logDestructure('abc_Destructure', 'def_Destructure');
    });
    it('default log', () => {
        log('default expression');
        log('default expression', 'another default expression');
    });
    it('colored log ', () => {
        log({ color: 'cyan' }, 'cyan expression', { color: 'yellow' }, 'yellow expression');
        log('default expression');
        log({ color: 'green' }, 'green expression', { color: 'red' }, 'red expression');
        log({ color: 'green' }, 'green expression', { color: 'reset' }, 'default expression');
    });
    it('should print null and undefined ', () => {
        log({ color: 'green' }, undefined, { color: 'red' }, 'red expression');
        log({ color: 'green' }, null, { color: 'reset' }, 'default expression');
    });
    it.only('should print objects ', () => {
        const obj = { teste: 'teste' };
        log({ color: 'green' }, obj, { color: 'red' }, 'red expression');
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
//# sourceMappingURL=index.test.js.map