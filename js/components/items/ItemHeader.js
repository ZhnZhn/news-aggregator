"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _BtSvgX = _interopRequireDefault(require("../zhn/BtSvgX"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const ItemHeader = _ref => {
  let {
    refEl,
    className,
    style,
    btCloseStyle,
    title,
    onKeyDown,
    onClick,
    onToggle,
    onClose
  } = _ref;
  /*eslint-disable react-hooks/exhaustive-deps */
  const [_hKeyDown, _hClose] = (0, _uiApi.useMemo)(() => [evt => {
    if (evt.keyCode === 13) {
      onToggle();
    } else {
      if ((0, _uiApi.isFn)(onKeyDown)) {
        onKeyDown(evt);
      }
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
    ref: refEl,
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("span", {
      className: _Item.CL_ITEM_CAPTION,
      children: title
    }), (0, _jsxRuntime.jsx)(_BtSvgX.default, {
      style: btCloseStyle,
      onClick: _hClose
    })]
  });
};
var _default = exports.default = ItemHeader;
//# sourceMappingURL=ItemHeader.js.map