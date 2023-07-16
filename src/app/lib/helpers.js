export const divideArray = (items, number) => {
  if (!items.length) {
    return [];
  }

  return items.reduce((accu, current, index) => {
    const i = Math.floor(index / number);
    if (accu[i] === undefined) {
      accu.push([]);
    }
    accu[i].push(current);
    return accu;
  }, []);
};
