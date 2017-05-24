'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButton = function ActionButton(props) {
  var type = props.type,
      className = props.className,
      style = props.style,
      title = props.title,
      caption = props.caption,
      children = props.children,
      onClick = props.onClick;

  var _className = void 0;
  switch (type) {
    case 'TypeA':
      _className = 'button-type-a';break;
    case 'TypeC':
      _className = 'button-type-c';break;
    default:
      _className = 'button-type-b';
  }
  _className = className ? className + ' ' + _className : _className;
  return _react2.default.createElement(
    'button',
    {
      className: _className,
      style: style,
      title: title,
      onClick: onClick
    },
    caption,
    children
  );
};

exports.default = ActionButton;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\ActionButton.js.map