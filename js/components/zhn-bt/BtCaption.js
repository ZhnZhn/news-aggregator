"use strict";

exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _jsxRuntime = require("preact/jsx-runtime");
const S_KEY = {
  textDecoration: 'underline'
};
const _crCaptionToken = (caption, keyIndex) => [caption.substring(0, keyIndex), caption.substring(keyIndex, keyIndex + 1), caption.substring(keyIndex + 1)];
const CaptionToken = props => {
  const [_before, _key, _after] = _crCaptionToken(props.caption, props.keyIndex);
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
const _findKeyIndex = (caption, accessKey) => accessKey && caption ? caption.toUpperCase().indexOf(accessKey) : -1;
const BtCaption = props => {
  const _keyIndex = _findKeyIndex(props.caption, props.hotKey),
    _caption = _has.HAS_TOUCH_EVENTS || _keyIndex === -1 ? props.caption || '' : (0, _jsxRuntime.jsx)(CaptionToken, {
      caption: props.caption,
      keyIndex: _keyIndex
    });
  return (0, _jsxRuntime.jsxs)("span", {
    className: props.className,
    style: props.style,
    children: [_caption, props.children]
  });
};
var _default = exports.default = BtCaption;
//# sourceMappingURL=BtCaption.js.map