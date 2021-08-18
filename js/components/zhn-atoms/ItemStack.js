"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = require("react");

var _excluded = ["items", "crItem"];
var _isArr = Array.isArray;
var ItemStack = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var items = _ref.items,
      crItem = _ref.crItem,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  if (!_isArr(items)) return null;
  return items.map(function (item, index) {
    return crItem(item, index, restProps);
  });
});
var _default = ItemStack;
exports["default"] = _default;
//# sourceMappingURL=ItemStack.js.map