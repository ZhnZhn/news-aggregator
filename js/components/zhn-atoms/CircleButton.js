'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_NOT_SELECTED = 'not-selected';
var S = {
  ROOT: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    lineHeight: '24px',
    width: 26,
    height: 26,
    textAlign: 'center',
    cursor: 'pointer'
  }
};

var CircleButton = function CircleButton(props) {
  var _props$caption = props.caption,
      caption = _props$caption === undefined ? '' : _props$caption,
      className = props.className,
      style = props.style,
      title = props.title,
      isWithoutDefault = props.isWithoutDefault,
      onClick = props.onClick,
      _className = className ? className + ' ' + CL_NOT_SELECTED : CL_NOT_SELECTED,
      _style = isWithoutDefault ? style : (0, _extends3.default)({}, S.ROOT, style);

  return _react2.default.createElement(
    'button',
    {
      className: _className,
      style: _style,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = CircleButton;
//# sourceMappingURL=CircleButton.js.map