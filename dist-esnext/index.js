import moment from 'moment';
const logColors = {
    reset: `\x1b[0m`, bright: `\x1b[1m`,
    dim: `\x1b[2m`, underscore: `\x1b[4m`,
    blink: `\x1b[5m`, reverse: `\x1b[7m`,
    hidden: `\x1b[8m`,
    black: `\x1b[30m`,
    red: `\x1b[31m`, green: `\x1b[32m`,
    yellow: `\x1b[33m`, blue: `\x1b[34m`,
    magenta: `\x1b[35m`, cyan: `\x1b[36m`,
    white: `\x1b[37m`
};
const log = (...args) => {
    console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    let ptzColorLog = ``;
    let lastArg = {};
    let txt = '';
    args.map((arg, i) => {
        if (i) {
            lastArg = args[i - 1];
        }
        txt += `${lastArg.hasOwnProperty('ptzColorLog')
            || !i
            || arg && arg.hasOwnProperty('ptzColorLog')
                && arg.breakLine !== true
            ? ''
            : '\n'}${ptzColorLog}`;
        if (arg === null || arg === undefined)
            return txt += `${ptzColorLog}${arg} `;
        if (arg.ptzColorLog || arg.hasOwnProperty('breakLine'))
            return ptzColorLog = logColors[arg.ptzColorLog] || ptzColorLog || ``;
        if (arg !== '')
            return txt += `${typeof arg === 'object'
                ? JSON.stringify(arg, null, '\t')
                : arg} `;
    });
    console.log(`${txt + logColors.reset}
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n`);
};
function logInOut(flog, fn, ...args) {
    flog('in: \n', args);
    const out = fn(...args);
    flog('out: \n', out);
    return out;
}
export default log;
export { log, logInOut, };
//# sourceMappingURL=index.js.map