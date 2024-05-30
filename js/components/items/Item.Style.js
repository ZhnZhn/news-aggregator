"use strict";

exports.__esModule = true;
exports.S_SVG_CLOSE = exports.S_NONE = exports.S_ITEM = exports.S_CAPTION = exports.CL_LINK_WRAPPER = exports.CL_ITEM_HEADER = exports.CL_ITEM_DESCR = void 0;
var _crStyle = require("../crStyle");
exports.S_NONE = _crStyle.S_NONE;
const CL_ITEM_HEADER = exports.CL_ITEM_HEADER = "article-header";
const CL_ITEM_DESCR = exports.CL_ITEM_DESCR = "article-descr";
const CL_LINK_WRAPPER = exports.CL_LINK_WRAPPER = "link-wrapper";
const S_ITEM = exports.S_ITEM = {
  position: 'relative',
  marginBottom: 5,
  lineHeight: 1.5,
  borderBottomRightRadius: 2,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
};
const S_CAPTION = exports.S_CAPTION = {
  ..._crStyle.S_COLOR_BLACK,
  display: 'inline-block',
  paddingRight: 32,
  fontSize: '1.125rem',
  fontWeight: 'bold',
  wordBreak: 'break-word'
};
const S_SVG_CLOSE = exports.S_SVG_CLOSE = {
  position: 'absolute',
  right: -4
};
//# sourceMappingURL=Item.Style.js.map