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
const BreakLine = (i, lastArg, arg) => {
    let bl = notBreakFirstLine(i);
    bl = arg && arg.hasOwnProperty('breakLine') ? arg.breakLine : notBreakAfterConfig(lastArg, arg);
    return bl;
};
const notBreakFirstLine = (n) => n === 0;
const notBreakAfterConfig = (lastArg, arg) => !(lastArg && lastArg.hasOwnProperty('ptzLogColor')
    || arg && arg.hasOwnProperty('ptzLogColor')
    || lastArg && lastArg.hasOwnProperty('breakLine'));
const log = (...args) => {
    console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    let ptzLogColor = ``;
    let lastArg = {};
    let txt = '';
    args.map((arg, i) => {
        if (i)
            lastArg = args[i - 1];
        const breakLine = BreakLine(i, lastArg, arg);
        txt += `${breakLine === true
            ? '\n'
            : ''}${ptzLogColor}`;
        if (arg === null || arg === undefined)
            return txt += `${ptzLogColor}${arg} `;
        if (arg.ptzLogColor || arg.hasOwnProperty('breakLine'))
            return ptzLogColor = logColors[arg.ptzLogColor] || ptzLogColor || ``;
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