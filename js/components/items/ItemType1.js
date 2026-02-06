"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const ItemType1 = props => (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
  children: [(0, _jsxRuntime.jsx)(_ItemHeader.default, {
    refEl: props.refEl,
    className: _Item.CL_ITEM_HEADER,
    captionStyle: _Item.S_CAPTION,
    btCloseStyle: _Item.S_SVG_CLOSE,
    title: props.title,
    onKeyDown: props.onKeyDown,
    onClick: props.onClick,
    onToggle: props.onToggle,
    onClose: props.onClose
  }), (0, _jsxRuntime.jsx)(_ShowHide.default, {
    isShow: props.isShowDescr,
    withoutAnimation: true,
    className: _Item.CL_ITEM_DESCR,
    children: props.children
  })]
});
var _default = exports.default = ItemType1;
//# sourceMappingURL=ItemType1.js.map