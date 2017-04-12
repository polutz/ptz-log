import log from './index';

describe('log', () => {
    it('exists', () => {
        log('abc');
        log('abc', 'def');
    });
});
