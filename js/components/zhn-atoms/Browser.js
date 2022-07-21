"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("preact/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SHOW = 'show-popup',
    S_BROWSER = {
  flexShrink: 0,
  zIndex: 20,
  backgroundColor: '#4d4d4d',
  position: 'relative',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  minWidth: 270,
  maxWidth: 400,
  marginLeft: 10,
  padding: '0px 3px 35px 0px',
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: '4px'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _ref2 = isShow ? [CL_SHOW, S_BLOCK] : [void 0, S_NONE],
      _cn = _ref2[0],
      _style = _ref2[1];

  return (0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: (0, _extends2["default"])({}, S_BROWSER, style, _style),
    children: children
  });
};
/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object
}
*/


var _default = Browser;
exports["default"] = _default;
//# sourceMappingURL=Browser.js.map