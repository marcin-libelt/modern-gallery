/**
 * Takes a collection and divide it for smallest chunks returning the array of chunks
 * @param {array} collection
 * @param {number} chunkSize
 * @returns {array}
 */
export const divideArray = (
  collection: Array<object | any>,
  chunkSize: number
) => {
  if (!collection.length) {
    return [];
  }

  return collection.reduce((accu: Array<object[]>, current, index) => {
    const i = Math.floor(index / chunkSize);
    if (accu[i] === undefined) {
      accu.push([]);
    }
    accu[i].push(current);
    return accu;
  }, []);
};
