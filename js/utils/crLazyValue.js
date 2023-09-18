"use strict";

exports.__esModule = true;
exports.crLazyValue = void 0;
const crLazyValue = crValue => ({
  get value() {
    const _value = crValue();
    Object.defineProperty(this, "value", {
      value: _value,
      readable: true,
      writable: false,
      enumerable: false
    });
    return _value;
  }
});
exports.crLazyValue = crLazyValue;
//# sourceMappingURL=crLazyValue.js.map