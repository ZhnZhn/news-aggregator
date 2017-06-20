'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpanKey = function SpanKey(_ref) {
  var style = _ref.style;
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'span',
      null,
      '\xA0('
    ),
    _react2.default.createElement(
      'span',
      { style: style },
      'Key'
    ),
    _react2.default.createElement(
      'span',
      null,
      '),\xA0'
    )
  );
};

exports.default = SpanKey;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\about\SpanKey.js.map