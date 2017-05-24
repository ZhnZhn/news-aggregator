'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContainerStyle = require('../styles/ContainerStyle');

var _ContainerStyle2 = _interopRequireDefault(_ContainerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SHOW = 'show-popup';
var S = {
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _styleOpen = isShow ? S.BLOCK : S.NONE,
      _classOpen = isShow ? CL_SHOW : null;
  return _react2.default.createElement(
    'div',
    {
      className: _classOpen,
      style: (0, _extends3.default)({}, _ContainerStyle2.default.browserRootDiv, style, _styleOpen)
    },
    children
  );
};

Browser.propTypes = process.env.NODE_ENV !== "production" ? {
  isShow: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : {};

exports.default = Browser;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\Browser.js.map