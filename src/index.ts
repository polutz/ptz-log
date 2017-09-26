import moment from 'moment';

/**
 * Log function type
 *
 */
type ILog = (...args: any[]) => void;

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

export interface IPtzLogConfig {
    ptzLogColor: string;
    breakLine: boolean;
}
const BreakLine = (i, lastArg, arg) => {
    let bl = notBreakFirstLine(i);
    bl = arg && arg!.hasOwnProperty('breakLine') ? arg.breakLine : notBreakAfterConfig(lastArg, arg);
    return bl;
};

const notBreakFirstLine = (n: number): boolean => n === 0;

const notBreakAfterConfig = (lastArg, arg): boolean =>
    !(lastArg && lastArg.hasOwnProperty('ptzLogColor')
        || arg && arg.hasOwnProperty('ptzLogColor')
        || lastArg && lastArg.hasOwnProperty('breakLine')
    );

/**
 * Colored log function
 *
 * @param {IPtzLogConfig} ptzLogConfig
 */
const log = (...args): void => {
    console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    let ptzLogColor = ``;
    let lastArg: any = {};
    let txt = '';
    args.map((arg, i) => {
        // Store last arg
        if (i) lastArg = args[i - 1];

        const breakLine = BreakLine(i, lastArg, arg);

        txt += `${breakLine === true
            ? '\n'
            : ''}${
            ptzLogColor}`;

        if (arg === null || arg === undefined)
            return txt += `${ptzLogColor}${arg} `;

        if (arg.ptzLogColor || arg!.hasOwnProperty('breakLine'))
            return ptzLogColor = logColors[arg.ptzLogColor] || ptzLogColor || ``;

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
