const kebabcase = require("lodash.kebabcase");

module.exports = function transpile(token) {
  return Object.fromEntries(
    Object.keys(token).map((name) => [
      kebabcase(name),
      !token[name].value
        ? transpile(token[name])
        : token[name].value.toLowerCase(),
    ])
  );
};
