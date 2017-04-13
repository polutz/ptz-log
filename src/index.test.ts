import log from './index';
import { Ilog, log as logDestructure } from './index';

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
