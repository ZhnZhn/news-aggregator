"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _Svg = _interopRequireDefault(require("./svg/Svg"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_OPEN_CLOSE = 'open-close select-none',
  S_ROOT = {
    lineHeight: 2.5
  },
  S_ROOT_CAPTION = {
    paddingLeft: 10
  },
  S_CAPTION = {
    paddingLeft: 4,
    verticalAlign: 'top',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer'
  };
const FILL_OPEN = "currentColor",
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
    children,
    onToggle
  } = _ref;
  const _childrenWrapperId = (0, _uiApi.useId)(),
    [isOpen, toggleIsOpen] = (0, _useToggle.default)(!isClose),
    _onToggle = (0, _uiApi.isFn)(onToggle) ? () => {
      onToggle(!isOpen, caption, toggleIsOpen);
      toggleIsOpen();
    } : toggleIsOpen,
    _hKeyDown = (0, _useKeyEnter.default)(_onToggle, [_onToggle]),
    [_pathV, _fillV, _styleCollapse, _classShow] = isOpen ? [PATH_OPEN, fillOpen, _crStyle.S_BLOCK, _crStyle.CL_SHOW_POPUP] : [PATH_CLOSE, fillClose, _crStyle.S_NONE, null];
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT,
      ...style
    },
    children: [(0, _jsxRuntime.jsxs)("div", {
      ref: refBt,
      role: "button",
      className: CL_OPEN_CLOSE,
      "aria-expanded": isOpen,
      "aria-controls": _childrenWrapperId,
      tabIndex: "0",
      style: S_ROOT_CAPTION,
      onClick: _onToggle,
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)(_Svg.default, {
        w: "16",
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
      id: _childrenWrapperId,
      className: _classShow,
      style: _styleCollapse,
      children: children
    })]
  });
};
var _default = exports.default = OpenClose;
//# sourceMappingURL=OpenClose.js.map