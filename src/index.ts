import moment from 'moment';

/**
 * Log function type
 */
type ILog = (...args: any[]) => void;

/**
 * Log function
 */
const log: ILog = function log(...args: any[]): void {
    console.log('\n', '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    console.log('', ...args);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', '\n');
};

/**
 * Logs any function args and return outputs.
 * @param log log function like ptz-log or console.log.
 * @param fn function to be logged.
 * @param args params to pass to fn.
 */
function logInOut(flog, fn, ...args): any {
    flog('in: \n', args);
    const out = fn(...args);
    flog('out: \n', out);
    return out;
}

export default log;

export {
    log,
    logInOut,
    ILog
};
