'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_BT = 'bt-raised';
var CL_BT_SPAN = 'bt-raised__span';

var S = {
  PRIMARY_SPAN: {
    color: 'greenyellow'
  }
};

var RaisedButton = function RaisedButton(_ref) {
  var rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      caption = _ref.caption,
      isPrimary = _ref.isPrimary,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: CL_BT,
      style: rootStyle,
      type: 'button',
      tabIndex: 0,
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      { className: clDiv },
      _react2.default.createElement(
        'span',
        {
          className: CL_BT_SPAN,
          style: isPrimary && S.PRIMARY_SPAN
        },
        caption
      )
    )
  );
};

exports.default = RaisedButton;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\RaisedButton.js.map