"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _jsxRuntime = require("preact/jsx-runtime");
var S_KEY = {
  textDecoration: 'underline'
};
var _crCaptionToken = function _crCaptionToken(caption, keyIndex) {
  return [caption.substring(0, keyIndex), caption.substring(keyIndex, keyIndex + 1), caption.substring(keyIndex + 1)];
};
var CaptionToken = function CaptionToken(_ref) {
  var caption = _ref.caption,
    keyIndex = _ref.keyIndex;
  var _crCaptionToken2 = _crCaptionToken(caption, keyIndex),
    _before = _crCaptionToken2[0],
    _key = _crCaptionToken2[1],
    _after = _crCaptionToken2[2];
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: _before
    }), (0, _jsxRuntime.jsx)("span", {
      style: S_KEY,
      children: _key
    }), (0, _jsxRuntime.jsx)("span", {
      children: _after
    })]
  });
};
var _findKeyIndex = function _findKeyIndex(caption, accessKey) {
  return accessKey && caption ? caption.toUpperCase().indexOf(accessKey) : -1;
};
var BtCaption = function BtCaption(_ref2) {
  var className = _ref2.className,
    style = _ref2.style,
    caption = _ref2.caption,
    hotKey = _ref2.hotKey,
    children = _ref2.children;
  var _keyIndex = _findKeyIndex(caption, hotKey),
    _caption = _has.HAS_TOUCH_EVENTS || _keyIndex === -1 ? caption || '' : (0, _jsxRuntime.jsx)(CaptionToken, {
      caption: caption,
      keyIndex: _keyIndex
    });
  return (0, _jsxRuntime.jsxs)("span", {
    className: className,
    style: style,
    children: [_caption, children]
  });
};
var _default = BtCaption;
exports["default"] = _default;
//# sourceMappingURL=BtCaption.js.map