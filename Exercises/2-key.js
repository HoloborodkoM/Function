'use strict';

const str = '1234567890';

const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    const symb = possible[Math.floor(Math.random() * possible.length)];
    if (symb !== undefined) str += symb;
  }
  return str;
};

const res = generateKey(5, str);
console.log(res);

module.exports = { generateKey };
