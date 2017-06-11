'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    marginTop: '16px',
    marginLeft: '8px'
  },
  SPAN: {
    color: 'black'
  }
};

var PoweredBy = function PoweredBy(_ref) {
  var rootStyle = _ref.rootStyle,
      spanStyle = _ref.spanStyle,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, S.ROOT, rootStyle) },
    _react2.default.createElement(
      'span',
      { style: (0, _extends3.default)({}, S.SPAN, spanStyle) },
      'Powered by\xA0\xA0'
    ),
    children
  );
};

exports.default = PoweredBy;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\links\PoweredBy.js.map