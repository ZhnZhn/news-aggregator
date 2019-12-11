"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

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
    stroke: 'inherit' //fill: 'silver',
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
  return _react["default"].createElement("div", {
    className: CL_GAP,
    style: (0, _extends2["default"])({}, S.ROOT, {}, rootStyle)
  }, _isFn(onMore) && _react["default"].createElement(_SvgMore["default"], {
    style: S.BT_MORE,
    svgStyle: S.SVG_MORE,
    onClick: onMore
  }), _react["default"].createElement("span", {
    className: "not-selected",
    style: S.CAPTION
  }, caption), children, _react["default"].createElement(_SvgClose["default"], {
    style: S.SVG_CLOSE,
    onClose: onClose
  }));
};

var _default = BrowserCaption;
exports["default"] = _default;
//# sourceMappingURL=BrowserCaption.js.map