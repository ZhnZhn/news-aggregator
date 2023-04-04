"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DP = require("../DP");
var _CL = require("../styles/CL");
var _SafeLink = _interopRequireDefault(require("../zhn-atoms/SafeLink"));
var _TextDiv = _interopRequireDefault(require("../zhn-atoms/TextDiv"));
var _TextSpan = _interopRequireDefault(require("../zhn-atoms/TextSpan"));
var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_DIV = "link-wrapper",
  S_FONT = {
    color: '#121212',
    fontSize: '1rem',
    fontWeight: 'bold',
    wordBreak: 'break-word'
  },
  S_DESCR = (0, _extends2["default"])({}, S_FONT, {
    display: 'block',
    lineHeight: 1.4,
    padding: '8px 16px 4px 16px',
    whiteSpace: "pre-line"
  }),
  S_RELATED = (0, _extends2["default"])({}, S_FONT, {
    lineHeight: 1.6,
    padding: '0 16px 0 16px'
  }),
  S_FLEX_SPACE_BETWEEN = {
    display: 'flex',
    justifyContent: 'space-between'
  },
  S_AUTHOR_ROW = (0, _extends2["default"])({}, S_FLEX_SPACE_BETWEEN, {
    padding: '8px 12px 0 16px'
  }),
  S_BOTTOM_ROW = (0, _extends2["default"])({}, S_FLEX_SPACE_BETWEEN, {
    padding: '0 12px 6px 16px'
  }),
  S_DATE = {
    color: 'gray',
    fontWeight: 'bold'
  },
  S_AUTHOR = (0, _extends2["default"])({}, S_DATE, {
    paddingRight: 16
  }),
  S_PT_8 = {
    paddingTop: 8
  };
var ArticleDescr = function ArticleDescr(_ref) {
  var href = _ref.href,
    description = _ref.description,
    related = _ref.related,
    publishedAt = _ref.publishedAt,
    timeAgo = _ref.timeAgo,
    author = _ref.author,
    onKeyDown = _ref.onKeyDown,
    onClose = _ref.onClose;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)("div", {
      style: S_AUTHOR_ROW,
      children: [(0, _jsxRuntime.jsx)(_TextSpan["default"], {
        style: S_AUTHOR,
        text: author
      }), (0, _jsxRuntime.jsx)(_TextSpan["default"], {
        style: S_DATE,
        text: timeAgo
      })]
    }), href ? (0, _jsxRuntime.jsx)(_SafeLink["default"], {
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
      children: [(0, _jsxRuntime.jsx)(_TextDiv["default"], {
        className: _CL.CL_SELECT_NONE,
        style: S_RELATED,
        text: related
      }), (0, _jsxRuntime.jsxs)("div", {
        style: S_BOTTOM_ROW,
        children: [(0, _jsxRuntime.jsx)(_SvgX["default"], {
          dataPos: _DP.DP_CLOSE_RIGHT,
          onClick: onClose
        }), (0, _jsxRuntime.jsx)(_TextSpan["default"], {
          className: _CL.CL_SELECT_NONE,
          style: S_DATE,
          text: publishedAt
        })]
      })]
    })]
  });
};
var _default = ArticleDescr;
exports["default"] = _default;
//# sourceMappingURL=ArticleDescr.js.map