"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Article = _interopRequireDefault(require("./Article.Style"));
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
var ItemType1 = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var isShowDescr = _ref.isShowDescr,
    title = _ref.title,
    children = _ref.children,
    onKeyDown = _ref.onKeyDown,
    onClick = _ref.onClick,
    onToggle = _ref.onToggle,
    onClose = _ref.onClose;
  var TS = (0, _useTheme["default"])(_Article["default"]),
    _captionStyle = (0, _crStyle["default"])(_Item.S_CAPTION, [isShowDescr, _Item.S_CAPTION_OPEN]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
      ref: ref,
      className: _Item.CL_ITEM_HEADER,
      style: TS.HEADER,
      captionStyle: _captionStyle,
      btCloseStyle: _Item.S_SVG_CLOSE,
      title: title,
      onKeyDown: onKeyDown,
      onClick: onClick,
      onToggle: onToggle,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShowDescr,
      style: TS.DESCR,
      children: children
    })]
  });
});
var _default = ItemType1;
exports["default"] = _default;
//# sourceMappingURL=ItemType1.js.map