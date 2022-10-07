"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var setDfItemTo = function setDfItemTo(options, value, dfIndex) {
  options.DF = options.find(function (item) {
    return item.value === value;
  }) || options[dfIndex];
};

var _default = setDfItemTo;
exports["default"] = _default;
//# sourceMappingURL=setDfItemTo.js.map