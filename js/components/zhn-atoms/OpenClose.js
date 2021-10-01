"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_CAPTION = 'open-close not-selected';
var CL_SHOW_POPUP = 'show-popup';
var S_ROOT = {
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
  var _ref$isClose = _ref.isClose,
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
      _hKeyDown = (0, _react.useCallback)(function (evt) {
    if (event.keyCode === 13 || event.keyCode === 27) {
      toggleIsOpen();
    }
  }, []); //toggleIsOpen

  /*esline-enable react-hooks/exhaustive-deps */


  var _pathV, _fillV, _styleCollapse, _classShow, _itemStyle;

  if (isOpen) {
    _pathV = PATH_OPEN;
    _fillV = fillOpen;
    _styleCollapse = S_BLOCK;
    _classShow = CL_SHOW_POPUP;
    _itemStyle = null;
  } else {
    _pathV = PATH_CLOSE;
    _fillV = fillClose;
    _styleCollapse = S_NONE;
    _classShow = null;
    _itemStyle = itemStyle;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: (0, _extends2["default"])({}, S_ROOT_CAPTION, _itemStyle),
      onClick: toggleIsOpen,
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        preserveAspectRatio: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: _pathV,
          fill: _fillV,
          strokeWidth: "1",
          stroke: fillOpen
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: (0, _extends2["default"])({}, S_CAPTION, captionStyle),
        children: caption
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: _styleCollapse,
      children: children
    })]
  });
};
/*
 OpenClose.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  captionStyle: PropTypes.object,
  itemStyle: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/


var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map