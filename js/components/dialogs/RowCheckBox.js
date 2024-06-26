"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useCheckBox = _interopRequireDefault(require("../hooks/useCheckBox"));
var _SvgCheckBox = _interopRequireDefault(require("../zhn/svg/SvgCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROW_CHECKBOX = {
    margin: '24px 0 0 16px'
  },
  S_CHECKBOX_CAPTION = {
    fontWeight: 'bold',
    marginLeft: 8,
    userSelect: 'none'
  };
const RowCheckBox = _ref => {
  let {
    refChb,
    style = S_ROW_CHECKBOX,
    initialValue,
    caption,
    onCheck,
    onUnCheck,
    onToggle
  } = _ref;
  const [isChecked, hClick, hKeyDown] = (0, _useCheckBox.default)(initialValue, onCheck || onToggle, onUnCheck || onToggle);
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_SvgCheckBox.default, {
      refChb: refChb,
      isChecked: isChecked,
      onClick: hClick,
      onKeyDown: hKeyDown
    }), (0, _jsxRuntime.jsx)("button", {
      type: "button",
      tabIndex: "-1",
      style: S_CHECKBOX_CAPTION,
      onClick: hClick,
      children: caption
    })]
  });
};
var _default = exports.default = RowCheckBox;
//# sourceMappingURL=RowCheckBox.js.map