import * as assert from 'ptz-assert';
import log from './index';
import { logInOut } from './index';
describe('Log', () => {
    it('default log', () => {
        log('default expression');
        log('default expression', 'another default expression');
    });
    it('use previous ptzColorLog if invalid ptzColorLog', () => {
        log({ ptzColorLog: 'green' }, { ptzColorLog: 'invalid' }, 'invalid ptzColorLog chosen, using previous');
    });
    it('colored log ', () => {
        log({ ptzColorLog: 'green' }, 'green expression', { ptzColorLog: 'yellow' }, 'yellow expression', { ptzColorLog: 'red' }, 'red expression');
    });
    it('should print null and undefined ', () => {
        log({ ptzColorLog: 'magenta' }, 'magenta undefinded', undefined);
        log({ ptzColorLog: 'yellow' }, 'yellow null', null);
    });
    it('should print objects ', () => {
        log({ ptzColorLog: 'green' }, 'green object', { teste: 'teste' });
    });
    it('should print arrays ', () => {
        log({ ptzColorLog: 'yellow' }, 'yellow array', ['wor1', 'word2']);
    });
    it('should print functions ', () => {
        log({ ptzColorLog: 'blue' }, 'blue function', () => ['word1', 'word2']);
    });
    it('should print NaN ', () => {
        log({ ptzColorLog: 'red' }, 'red NaN', NaN);
    });
    it('should print number ', () => {
        log({ ptzColorLog: 'cyan' }, 'cyan number', 666);
    });
    describe('Loging Objects', () => {
        it('should print promise ', async () => {
            const promise = testPromise(true);
            log({ ptzColorLog: 'yellow' }, 'promise pending', promise);
            const rejectPromise = async (fail) => {
                try {
                    return await testPromise(false);
                }
                catch (error) {
                    return error;
                }
            };
            const promiseResolved = await testPromise(true);
            log({ ptzColorLog: 'green' }, 'promise resolved', promiseResolved);
            const promiseRejected = await rejectPromise(false);
            log({ ptzColorLog: 'red' }, 'promise rejected', promiseRejected);
            log({ ptzColorLog: 'red' }, 'welcome', { ptzColorLog: 'yellow' }, 'to', { ptzColorLog: 'green' }, 'polutz!');
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