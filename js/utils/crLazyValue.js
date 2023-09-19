"use strict";

exports.__esModule = true;
exports.crLazyValue = void 0;
const crLazyValue = crValue => {
  let _value;
  return () => _value === void 0 ? _value = crValue() : _value;
};
exports.crLazyValue = crLazyValue;
//# sourceMappingURL=crLazyValue.js.map