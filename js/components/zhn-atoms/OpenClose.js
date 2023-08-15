"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_CAPTION = 'open-close select-none',
  S_ROOT = {
    backgroundColor: '#4d4d4d',
    lineHeight: 2.5
  },
  S_ROOT_CAPTION = {
    paddingLeft: 12
  },
  S_CAPTION = {
    color: '#9e9e9e',
    paddingLeft: 4,
    verticalAlign: 'top',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer'
  };
const FILL_OPEN = '#9e9e9e',
  FILL_CLOSE = 'transparent',
  PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
  PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";
const OpenClose = _ref => {
  let {
    refBt,
    isClose = true,
    style,
    itemStyle,
    captionStyle,
    caption,
    fillOpen = FILL_OPEN,
    fillClose = FILL_CLOSE,
    children
  } = _ref;
  const [isOpen, toggleIsOpen] = (0, _useToggle.default)(!isClose),
    _hKeyDown = (0, _useKeyEnter.default)(toggleIsOpen),
    [_pathV, _fillV, _styleCollapse, _classShow, _itemStyle] = isOpen ? [PATH_OPEN, fillOpen, _crStyle.S_BLOCK, _crStyle.CL_SHOW_POPUP] : [PATH_CLOSE, fillClose, _crStyle.S_NONE, null, itemStyle];
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT,
      ...style
    },
    children: [(0, _jsxRuntime.jsxs)("div", {
      ref: refBt,
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: {
        ...S_ROOT_CAPTION,
        ..._itemStyle
      },
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)("svg", {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        preserveAspectRatio: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, _jsxRuntime.jsx)("path", {
          d: _pathV,
          fill: _fillV,
          strokeWidth: "1",
          stroke: fillOpen
        })
      }), (0, _jsxRuntime.jsx)("span", {
        style: {
          ...S_CAPTION,
          ...captionStyle
        },
        children: caption
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: _styleCollapse,
      children: children
    })]
  });
};
var _default = OpenClose;
exports.default = _default;
//# sourceMappingURL=OpenClose.js.map