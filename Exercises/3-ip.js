'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const sum = ip.split('.').reduce((acc, item) => (acc << 8) + parseInt(item));
  return sum;
};

module.exports = { ipToInt };
