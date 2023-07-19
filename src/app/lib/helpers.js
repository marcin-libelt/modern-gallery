/**
 * Takes a collection and divide it for smallest chunks returning the array of chunks
 * @param {array} collection
 * @param {number} chunkSize
 * @returns {array}
 */
export const divideArray = (collection, chunkSize) => {
  if (!collection.length) {
    return [];
  }

  return collection.reduce((accu, current, index) => {
    const i = Math.floor(index / chunkSize);
    if (accu[i] === undefined) {
      accu.push([]);
    }
    accu[i].push(current);
    return accu;
  }, []);
};

/**
 * Calculate columns count for given screen size
 * @param {number} screen - screen width
 * @param {array} breakpointCols - array of objects {screen: x, cols: y}
 * @returns {{screen: number, cols: number}} columns number
 */
export const getColumnCountByScreenWidth = (screen, breakpointCols) => {
  const keys = breakpointCols
    .sort((a, b) => a.screen > b.screen)
    .filter((breakpoint) => screen < breakpoint.screen);
  return keys[keys.length - 1];
};
