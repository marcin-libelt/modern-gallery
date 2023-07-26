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
