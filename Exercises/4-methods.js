'use strict';

const obj = {
  m1: (x) => [x],
  m2: (x, y) => [x, y],
  m3(x, y, z) {
    return [x, y, z];
  }
};

const methods = (iface) => {
  const masArg = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      masArg.push([key, iface[key].length]);
    }
  }
  return masArg;
};

methods(obj);

module.exports = { methods };
