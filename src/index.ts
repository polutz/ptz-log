import moment from 'moment';

/**
 * Log function type
 */
type ILog = (colors, ...args: any[]) => void;

const logColors = {
    // Options
    reset: `\x1b[0m`, bright: `\x1b[1m`,
    dim: `\x1b[2m`, underscore: `\x1b[4m`,
    blink: `\x1b[5m`, reverse: `\x1b[7m`,
    hidden: `\x1b[8m`,
    // Collors
    black: `\x1b[30m`,
    red: `\x1b[31m`, green: `\x1b[32m`,
    yellow: `\x1b[33m`, blue: `\x1b[34m`,
    magenta: `\x1b[35m`, cyan: `\x1b[36m`,
    white: `\x1b[37m`
};

/**
 * Colored log function
 *
 * Available options: reset, bright, dim, underscore, blink, reverse, hidden
 * Available colors: black, red, green, yellow, blue, magenta, cyan, white
 */
const log: ILog = (...args: any[]): void => {
    console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    let ptzColorLog = ``;
    let lastArg: any = {};
    let txt = '';
    args.map((arg, i) => {
        if (i) {
            lastArg = args[i - 1];

        }
        txt += `${lastArg.hasOwnProperty('ptzColorLog') || !i || arg && arg.hasOwnProperty('ptzColorLog')
            ? ''
            : '\n'}${
            ptzColorLog}`;

        if (arg === null || arg === undefined)
            return txt += `${ptzColorLog}${arg} `;

        if (arg.ptzColorLog) return ptzColorLog = logColors[arg.ptzColorLog] || ptzColorLog || ``;

        if (arg !== '')
            return txt += `${
                typeof arg === 'object'
                    ? JSON.stringify(arg, null, '\t')
                    : arg
                } `;
    });
    console.log(`${txt + logColors.reset}
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n`);
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
    ILog,
};
