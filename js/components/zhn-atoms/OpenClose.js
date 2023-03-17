"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_CAPTION = 'open-close select-none',
  CL_SHOW_POPUP = 'show-popup',
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
  },
  S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
var FILL_OPEN = '#9e9e9e',
  FILL_CLOSE = 'transparent',
  PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
  PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";
var OpenClose = function OpenClose(_ref) {
  var refBt = _ref.refBt,
    _ref$isClose = _ref.isClose,
    isClose = _ref$isClose === void 0 ? true : _ref$isClose,
    style = _ref.style,
    itemStyle = _ref.itemStyle,
    captionStyle = _ref.captionStyle,
    caption = _ref.caption,
    _ref$fillOpen = _ref.fillOpen,
    fillOpen = _ref$fillOpen === void 0 ? FILL_OPEN : _ref$fillOpen,
    _ref$fillClose = _ref.fillClose,
    fillClose = _ref$fillClose === void 0 ? FILL_CLOSE : _ref$fillClose,
    children = _ref.children;
  var _useToggle = (0, _useToggle2["default"])(!isClose),
    isOpen = _useToggle[0],
    toggleIsOpen = _useToggle[1],
    _hKeyDown = (0, _useKeyEnter["default"])(toggleIsOpen),
    _ref2 = isOpen ? [PATH_OPEN, fillOpen, S_BLOCK, CL_SHOW_POPUP] : [PATH_CLOSE, fillClose, S_NONE, null, itemStyle],
    _pathV = _ref2[0],
    _fillV = _ref2[1],
    _styleCollapse = _ref2[2],
    _classShow = _ref2[3],
    _itemStyle = _ref2[4];
  return (0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [(0, _jsxRuntime.jsxs)("div", {
      ref: refBt,
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: (0, _extends2["default"])({}, S_ROOT_CAPTION, _itemStyle),
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
        style: (0, _extends2["default"])({}, S_CAPTION, captionStyle),
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
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map