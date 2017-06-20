'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_BT = 'bt-flat';
var CL_BT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      caption = _ref.caption,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: CL_BT,
      style: rootStyle,
      type: 'button',
      tabIndex: 0,
      title: title,
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      { className: clDiv },
      _react2.default.createElement(
        'span',
        { className: CL_BT_SPAN },
        caption
      ),
      children
    )
  );
};

exports.default = FlatButton;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\FlatButton.js.map