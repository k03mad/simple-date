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
 * @param {string} [opts.separator]
 */
export const getDateYMD = ({init, separator = '.'} = {}) => [
    getDateYear({init}),
    getDateMonth({init}),
    getDateDay({init}),
].join(separator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.separator]
 */
export const getDateDMY = ({init, separator = '.'} = {}) => [
    getDateDay({init}),
    getDateMonth({init}),
    getDateYear({init}),
].join(separator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string} [opts.separator]
 */
export const getDateHMS = ({init, separator = ':'} = {}) => [
    getDateHour({init}),
    getDateMinute({init}),
    getDateSecond({init}),
].join(separator);

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string[]} opts.separators
 */
export const getDateYMDHMS = ({init, separators = ['.', ':', ' ']} = {}) => {
    const ymd = getDateYMD({init, separator: separators[0]});
    const hms = getDateHMS({init, separator: separators[1]});

    return ymd + separators[2] + hms;
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 * @param {string[]} opts.separators
 */
export const getDateHMSDMY = ({init, separators = [':', '.', ' ']} = {}) => {
    const hms = getDateHMS({init, separator: separators[0]});
    const dmy = getDateDMY({init, separator: separators[1]});

    return hms + separators[2] + dmy;
};
