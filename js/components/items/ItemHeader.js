"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _SvgX = _interopRequireDefault(require("../zhn/SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
const FN_NOOP = () => {};
const ItemHeader = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    className,
    style,
    captionStyle,
    btCloseStyle,
    title,
    onKeyDown = FN_NOOP,
    onClick,
    onToggle,
    onClose
  } = _ref;
  /*eslint-disable react-hooks/exhaustive-deps */
  const [_hKeyDown, _hClose] = (0, _uiApi.useMemo)(() => [evt => {
    if (evt.keyCode === 13) {
      onToggle();
    } else {
      onKeyDown(evt);
    }
  }, evt => {
    evt.stopPropagation();
    onClose();
  }], []);
  //onToggle, onKeyDown
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("div", {
    role: "button",
    ref: ref,
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("span", {
      className: _crStyle.CL_SELECT_NONE,
      style: captionStyle,
      children: title
    }), (0, _jsxRuntime.jsx)(_SvgX.default, {
      style: btCloseStyle,
      onClick: _hClose
    })]
  });
});
var _default = exports.default = ItemHeader;
//# sourceMappingURL=ItemHeader.js.map