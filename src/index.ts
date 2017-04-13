import moment from 'moment';

type Ilog = (...args: any[]) => void;

const log: Ilog = function log(...args: any[]): void {
    console.log('\n', '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(moment().format('H:mm:ss MMMM Do YYYY'));
    console.log('', ...args);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', '\n');
};

export default log;

export {
    log,
    Ilog
};
