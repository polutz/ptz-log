import * as assert from 'ptz-assert';
import log from './index';
import { logInOut } from './index';
describe('Log', () => {
    describe('default', () => {
        it('should break line after every arg', () => {
            log('line 1');
            log('line 1', 'line 2');
        });
    });
    describe('colored', () => {
        it('should not break line after color config ', () => {
            log({ ptzLogColor: 'green' }, 'green line 1', { ptzLogColor: 'yellow' }, 'yellow line 1', { ptzLogColor: 'red' }, 'red line 1');
        });
        it('should break line after color config if break line equals true ', () => {
            log({ ptzLogColor: 'green' }, 'green line 1', { ptzLogColor: 'yellow', breakLine: true }, 'yellow line 2', { ptzLogColor: 'red' }, 'red line 2');
        });
        it('should not break line after color config if break line equals false ', () => {
            log({ ptzLogColor: 'green' }, 'green expression', { ptzLogColor: 'yellow', breakLine: false }, 'yellow expression', { ptzLogColor: 'red' }, 'red expression');
        });
        it('use previous ptzLogColor if invalid ptzLogColor', () => {
            log({ ptzLogColor: 'green' }, { ptzLogColor: 'invalid' }, 'invalid ptzLogColor chosen, using previous');
        });
        it('should print null and undefined ', () => {
            log({ ptzLogColor: 'magenta' }, 'magenta undefinded', undefined);
            log({ ptzLogColor: 'yellow' }, 'yellow null', null);
        });
        it('should print objects ', () => {
            log({ ptzLogColor: 'green' }, 'green object', { teste: 'teste' });
        });
        it('should print arrays ', () => {
            log({ ptzLogColor: 'yellow' }, 'yellow array', ['wor1', 'word2']);
        });
        it('should print functions ', () => {
            log({ ptzLogColor: 'blue' }, 'blue function', () => ['word1', 'word2']);
        });
        it('should print NaN ', () => {
            log({ ptzLogColor: 'red' }, 'red NaN', NaN);
        });
        it('should print number ', () => {
            log({ ptzLogColor: 'cyan' }, 'cyan number', 666);
        });
        describe('Loging Objects', () => {
            it('should print promise ', async () => {
                const promise = testPromise(true);
                log({ ptzLogColor: 'yellow' }, 'promise pending', promise);
                const rejectPromise = async (fail) => {
                    try {
                        return await testPromise(false);
                    }
                    catch (error) {
                        return error;
                    }
                };
                const promiseResolved = await testPromise(true);
                log({ ptzLogColor: 'green' }, 'promise resolved', promiseResolved);
                const promiseRejected = await rejectPromise(false);
                log({ ptzLogColor: 'red' }, 'promise rejected', promiseRejected);
            });
        });
        describe('break line', () => {
            it('should not break line if breakLine equals false', () => {
                log('line 1', { breakLine: false }, 'still line 1');
            });
            it('should break line if breakLine equals true', () => {
                log('line 1', { breakLine: true }, { ptzLogColor: 'red' }, 'line 2');
            });
        });
    });
});
describe('logInOut', () => {
    it('logs', (done) => {
        const add = (a, b) => a + b;
        const logTest = (label, x) => {
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
        };
        logInOut(logTest, add, 1, 2);
    });
});
const testPromise = (fail) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        return !fail ?
            reject('REJECT PROMISE!') :
            resolve('END PROMISE');
    }, 10));
};
//# sourceMappingURL=index.test.js.map