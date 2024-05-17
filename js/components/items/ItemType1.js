"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const ItemType1 = _ref => {
  let {
    refEl,
    isShowDescr,
    title,
    children,
    onKeyDown,
    onClick,
    onToggle,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_ItemHeader.default, {
      refEl: refEl,
      className: _Item.CL_ITEM_HEADER,
      captionStyle: _Item.S_CAPTION,
      btCloseStyle: _Item.S_SVG_CLOSE,
      title: title,
      onKeyDown: onKeyDown,
      onClick: onClick,
      onToggle: onToggle,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShowDescr,
      withoutAnimation: true,
      className: _Item.CL_ITEM_DESCR,
      children: children
    })]
  });
};
var _default = exports.default = ItemType1;
//# sourceMappingURL=ItemType1.js.map