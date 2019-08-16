'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgMore = require('./SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_GAP = "gap-right";

var S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    paddingRight: '42px',
    marginBottom: '10px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
  CAPTION: {
    //color: '#9e9e9e',
    //color: '#8a8a8a',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  BT_MORE: {
    marginRight: '6px'
  },
  SVG_MORE: {
    fill: 'inherit',
    stroke: 'inherit'
    //fill: 'silver',
    //stroke: 'silver'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: '6px',
    right: 0,
    width: '24px',
    height: '24px'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === "function";
};

var BrowserCaption = function BrowserCaption(_ref) {
  var rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      children = _ref.children,
      onMore = _ref.onMore,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: CL_GAP, style: (0, _extends3.default)({}, S.ROOT, rootStyle) },
    _isFn(onMore) && _react2.default.createElement(_SvgMore2.default, {
      style: S.BT_MORE,
      svgStyle: S.SVG_MORE,
      onClick: onMore
    }),
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
//# sourceMappingURL=BrowserCaption.js.map