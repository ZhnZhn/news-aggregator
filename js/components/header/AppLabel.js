'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLabel = function AppLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      caption = _ref.caption,
      title = _ref.title,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'span',
    {
      className: className,
      style: style,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = AppLabel;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\AppLabel.js.map