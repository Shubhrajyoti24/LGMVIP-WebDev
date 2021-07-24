var IS_PURE = require('../internals/is-pure');
var getIterator = require('../internals/get-iterator');

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line es/no-set -- safe
  return Set.prototype.values.call(it);
};
