import {
    getDateDay,
    getDateHour,
    getDateMinute,
    getDateMonth,
    getDateSecond,
    getDateYear,
} from './single.js';

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.ymdSeparator]
 */
export const getDateYMD = ({init, ymdSeparator = '.'} = {}) => [
    getDateYear({init}),
    getDateMonth({init}),
    getDateDay({init}),
].join(ymdSeparator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.dmySeparator]
 */
export const getDateDMY = ({init, dmySeparator = '.'} = {}) => [
    getDateDay({init}),
    getDateMonth({init}),
    getDateYear({init}),
].join(dmySeparator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.hmsSeparator]
 */
export const getDateHMS = ({init, hmsSeparator = ':'} = {}) => [
    getDateHour({init}),
    getDateMinute({init}),
    getDateSecond({init}),
].join(hmsSeparator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.ymdSeparator]
 * @param {string} [opts.hmsSeparator]
 * @param {string} [opts.ymdhmsSeparator]
 */
export const getDateYMDHMS = ({init, ymdSeparator = '.', hmsSeparator = ':', ymdhmsSeparator = ' '} = {}) => {
    const ymd = getDateYMD({init, ymdSeparator});
    const hms = getDateHMS({init, hmsSeparator});

    return ymd + ymdhmsSeparator + hms;
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.dmySeparator]
 * @param {string} [opts.hmsSeparator]
 * @param {string} [opts.hmsdmySeparator]
 */
export const getDateHMSDMY = ({init, dmySeparator = '.', hmsSeparator = ':', hmsdmySeparator = ' '} = {}) => {
    const hms = getDateHMS({init, hmsSeparator});
    const dmy = getDateDMY({init, dmySeparator});

    return hms + hmsdmySeparator + dmy;
};
