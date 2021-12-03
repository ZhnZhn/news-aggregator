"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SHOW_POPUP = 'show-popup',
    S_SHOW = {
  display: 'block'
},
    S_HIDE = {
  display: 'none'
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      isScrollable = _ref.isScrollable,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children;
  var _attr = {
    className: (0, _crCn["default"])(className, [isShow, CL_SHOW_POPUP]),
    style: (0, _crStyle["default"])(style, isShow ? S_SHOW : S_HIDE),
    'data-scrollable': isScrollable ? true : void 0
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({}, _attr, {
    children: children
  }));
};
/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType[
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]
}
*/


var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map