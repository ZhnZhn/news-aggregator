'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionInput = require('./CaptionInput');

var _CaptionInput2 = _interopRequireDefault(_CaptionInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_BT = 'bt-flat';
var CL_BT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: CL_BT + ' ' + className,
      style: rootStyle,
      type: 'button',
      tabIndex: 0,
      title: title,
      accessKey: accessKey,
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      { className: clDiv },
      _react2.default.createElement(_CaptionInput2.default, {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey
      }),
      children
    )
  );
};

exports.default = FlatButton;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\FlatButton.js.map