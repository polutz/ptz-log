import * as assert from 'ptz-assert';
import log, { logInOut } from './index';
import { log as logDestructure } from './index';

describe('Log', () => {
    it('import destructure', () => {
        logDestructure('abc_Destructure');
        logDestructure('abc_Destructure', 'def_Destructure');
    });

    it('default log', () => {
        log('default expression');
        log(`default expression another default expression`);
    });

    it('use previous color if invalid color', () => {
        log({ color: 'green' }, { color: 'invalid' }, 'invalid color chosen, using previous');
    });

    it('colored log ', () => {
        log({ color: 'cyan' }, 'cyan expression', { color: 'yellow' }, 'yellow expression');
        log({ color: 'green' }, 'green expression', { color: 'red' }, 'red expression');

    });

    it('should print null and undefined ', () => {
        log({ color: 'magenta' }, 'magenta undefinded', undefined);
        log({ color: 'yellow' }, 'yellow null', null);
    });

    it('should print objects ', () => {
        log({ color: 'green' }, 'green object', { teste: 'teste' });
    });

    it('should print arrays ', () => {
        log({ color: 'yellow' }, 'yellow array', ['wor1', 'word2']);
    });

    it('should print funcions ', () => {
        log({ color: 'blue' }, 'blue function', () => ['wor1', 'word2']);
    });

    it('should print NaN ', () => {
        log({ color: 'red' }, 'red NaN', NaN);
    });

    it('should print number ', () => {
        log({ color: 'cyan' }, 'cyan number', 666);
    });

    it('should print promise ', async () => {
        const promise = testPromise(true);
        log({ color: 'yellow' }, 'promise pending', promise);

        const rejectPromise = async (fail: boolean) => {
            try {
                return await testPromise(false);
            } catch (error) {
                return error;
            }
        };

        const promiseResolved = await testPromise(true);
        log({ color: 'green' }, 'promise resolved', promiseResolved);

        const promiseRejected = await rejectPromise(false);
        log({ color: 'red' }, 'promise rejected', promiseRejected);

    });
});

describe('logInOut', () => {
    it('logs', (done) => {
        const add = (a, b) => a + b;

        const logTest = (label, x) => {
            switch (label) {
                case 'in: \n': assert.deepEqual(x, [1, 2]); break;
                case 'out: \n': assert.equal(x, 3); done(); break;
                default: throw Error('different labels');
            }
        };

        logInOut(logTest, add, 1, 2);
    });
});

const testPromise = (fail: boolean) => {
    return new Promise((resolve, reject) =>
        setTimeout(
            () => {
                return !fail ?
                    reject('REJECT PROMISE!') :
                    resolve('END PROMISE');
            }, 10));
};
