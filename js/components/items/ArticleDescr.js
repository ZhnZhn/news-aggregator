"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DP = require("../DP");
var _crStyle = require("../crStyle");
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _TextToken = require("../zhn/TextToken");
var _SvgX = _interopRequireDefault(require("../zhn/SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = "link-wrapper",
  S_FONT = {
    color: '#121212',
    fontSize: '1rem',
    fontWeight: 'bold',
    wordBreak: 'break-word'
  },
  S_DESCR = {
    ...S_FONT,
    display: 'block',
    lineHeight: 1.4,
    padding: '8px 16px 4px 12px',
    whiteSpace: "pre-line"
  },
  S_RELATED = {
    ...S_FONT,
    lineHeight: 1.6,
    padding: '0 16px 0 12px'
  },
  S_FLEX_SPACE_BETWEEN = {
    display: 'flex',
    justifyContent: 'space-between'
  },
  S_AUTHOR_ROW = {
    ...S_FLEX_SPACE_BETWEEN,
    padding: '8px 12px 0 12px'
  },
  S_BOTTOM_ROW = {
    ...S_FLEX_SPACE_BETWEEN,
    padding: '0 12px 6px 12px'
  },
  S_DATE = {
    color: 'gray',
    fontWeight: 'bold'
  },
  S_AUTHOR = {
    ...S_DATE,
    paddingRight: 16
  },
  S_PT_8 = {
    paddingTop: 8
  };
const ArticleDescr = _ref => {
  let {
    href,
    description,
    related,
    publishedAt,
    timeAgo,
    author,
    onKeyDown,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)("div", {
      style: S_AUTHOR_ROW,
      children: [(0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
        style: S_AUTHOR,
        text: author
      }), (0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
        style: S_DATE,
        text: timeAgo
      })]
    }), href ? (0, _jsxRuntime.jsx)(_SafeLink.default, {
      className: CL_DIV,
      style: S_DESCR,
      href: href,
      onKeyDown: onKeyDown,
      children: description
    }) : (0, _jsxRuntime.jsx)("div", {
      style: S_DESCR,
      children: description
    }), (0, _jsxRuntime.jsxs)("div", {
      style: S_PT_8,
      children: [(0, _jsxRuntime.jsx)(_TextToken.TextDiv, {
        className: _crStyle.CL_SELECT_NONE,
        style: S_RELATED,
        text: related
      }), (0, _jsxRuntime.jsxs)("div", {
        style: S_BOTTOM_ROW,
        children: [(0, _jsxRuntime.jsx)(_SvgX.default, {
          dataPos: _DP.DP_CLOSE_RIGHT,
          onClick: onClose
        }), (0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
          className: _crStyle.CL_SELECT_NONE,
          style: S_DATE,
          text: publishedAt
        })]
      })]
    })]
  });
};
var _default = exports.default = ArticleDescr;
//# sourceMappingURL=ArticleDescr.js.map