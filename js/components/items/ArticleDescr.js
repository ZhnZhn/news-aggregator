"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DP = require("../DP");
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _TextToken = require("../zhn/TextToken");
var _SvgX = _interopRequireDefault(require("../zhn/SvgX"));
var _RelatedDiv = _interopRequireDefault(require("./RelatedDiv"));
var _ArticleDescr = require("./ArticleDescr.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const ArticleDescr = _ref => {
  let {
    href,
    description,
    related,
    commentsUrl,
    commentsTitle,
    publishedAt,
    timeAgo,
    author,
    onKeyDown,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)("div", {
      style: _ArticleDescr.S_AUTHOR_ROW,
      children: [(0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
        style: _ArticleDescr.S_AUTHOR,
        text: author
      }), (0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
        style: _ArticleDescr.S_DATE,
        text: timeAgo
      })]
    }), href ? (0, _jsxRuntime.jsx)(_SafeLink.default, {
      className: _ArticleDescr.CL_LINK_WRAPPER,
      style: _ArticleDescr.S_DESCR,
      href: href,
      onKeyDown: onKeyDown,
      children: description
    }) : (0, _jsxRuntime.jsx)("div", {
      style: _ArticleDescr.S_DESCR,
      children: description
    }), (0, _jsxRuntime.jsxs)("div", {
      style: _ArticleDescr.S_PT_8,
      children: [(0, _jsxRuntime.jsx)(_RelatedDiv.default, {
        related: related,
        commentsUrl: commentsUrl,
        commentsTitle: commentsTitle
      }), (0, _jsxRuntime.jsxs)("div", {
        style: _ArticleDescr.S_BOTTOM_ROW,
        children: [(0, _jsxRuntime.jsx)(_SvgX.default, {
          dataPos: _DP.DP_CLOSE_RIGHT,
          onClick: onClose
        }), (0, _jsxRuntime.jsx)(_TextToken.TextSpan, {
          className: _ArticleDescr.CL_SELECT_NONE,
          style: _ArticleDescr.S_DATE,
          text: publishedAt
        })]
      })]
    })]
  });
};
var _default = exports.default = ArticleDescr;
//# sourceMappingURL=ArticleDescr.js.map