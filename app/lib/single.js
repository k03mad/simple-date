/**
 * @param {string|number} datePart
 */
const prefixZero = datePart => String(datePart).length === 1
    ? `0${datePart}`
    : datePart;

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateYear = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return date.getFullYear();
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateMonth = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return prefixZero(date.getMonth() + 1);
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateDay = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return prefixZero(date.getDate());
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateHour = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return prefixZero(date.getHours());
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateMinute = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return prefixZero(date.getMinutes());
};

/**
 * @param {object} [opts]
 * @param {string|number|Date} [opts.init]
 */
export const getDateSecond = ({init} = {}) => {
    const date = init ? new Date(init) : new Date();
    return prefixZero(date.getSeconds());
};
