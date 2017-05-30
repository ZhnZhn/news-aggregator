'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    //backgroundColor: '#232F3B',
    //backgroundColor: '#3f51b5',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    marginBottom: '10px',
    marginRight: '-2px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
  CAPTION: {
    //color: '#9e9e9e',
    color: '#8a8a8a',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  SVG_CLOSE: {
    width: '24px',
    height: '24px',
    position: 'relative',
    top: '3px'
  }
};

var BrowserCaption = function BrowserCaption(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(
      'span',
      {
        className: 'not-selected',
        style: S.CAPTION
      },
      caption
    ),
    children,
    _react2.default.createElement(_SvgClose2.default, {
      style: S.SVG_CLOSE,
      onClose: onClose
    })
  );
};

exports.default = BrowserCaption;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\BrowserCaption.js.map