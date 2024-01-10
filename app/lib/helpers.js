/**
 * @param {string|number} datePart
 */
export const prefixZero = datePart => String(datePart).length === 1
    ? `0${datePart}`
    : datePart;
