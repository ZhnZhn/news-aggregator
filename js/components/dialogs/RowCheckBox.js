"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _useCheckBox2 = _interopRequireDefault(require("../hooks/useCheckBox"));
var _SvgCheckBox = _interopRequireDefault(require("../zhn-atoms/svg/SvgCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
var S_ROW_CHECKBOX = {
    margin: '24px 0 0 16px'
  },
  S_CHECKBOX_CAPTION = {
    fontWeight: 'bold',
    marginLeft: 8,
    userSelect: 'none'
  };
var RowCheckBox = function RowCheckBox(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? S_ROW_CHECKBOX : _ref$style,
    initialValue = _ref.initialValue,
    stroke = _ref.stroke,
    caption = _ref.caption,
    onCheck = _ref.onCheck,
    onUnCheck = _ref.onUnCheck,
    onToggle = _ref.onToggle;
  var _useCheckBox = (0, _useCheckBox2["default"])(initialValue, onCheck || onToggle, onUnCheck || onToggle),
    isChecked = _useCheckBox[0],
    hClick = _useCheckBox[1],
    hKeyDown = _useCheckBox[2];
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_SvgCheckBox["default"], {
      isChecked: isChecked,
      stroke: stroke,
      onClick: hClick,
      onKeyDown: hKeyDown
    }), (0, _jsxRuntime.jsx)("button", {
      tabIndex: "-1",
      style: S_CHECKBOX_CAPTION,
      onClick: hClick,
      children: caption
    })]
  });
};
var _default = RowCheckBox;
exports["default"] = _default;
//# sourceMappingURL=RowCheckBox.js.map