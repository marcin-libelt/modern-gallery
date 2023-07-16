const items = [...Array(12)];
const columns = 2;

const reducer = (accu, current, index) => {
  const i = Math.floor(index / columns);
  if (accu[i] === undefined) {
    accu.push([]);
  }
  accu[i].push(current);
  return accu;
};

const result = items.reduce(reducer, []);
console.log(result);
