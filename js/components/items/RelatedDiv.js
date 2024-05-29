"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _ArticleDescr = require("./ArticleDescr.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const RelatedDiv = _ref => {
  let {
    related,
    commentsUrl,
    commentsTitle
  } = _ref;
  return (commentsUrl || commentsTitle) && (0, _jsxRuntime.jsxs)("div", {
    className: _ArticleDescr.CL_SELECT_NONE,
    style: _ArticleDescr.S_RELATED_DIV,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: _ArticleDescr.S_RELATED,
      children: commentsUrl ? related : related + " " + commentsTitle
    }), (0, _jsxRuntime.jsx)(_SafeLink.default, {
      className: _ArticleDescr.CL_LINK_WRAPPER,
      style: _ArticleDescr.S_COMMENTS_LINK,
      href: commentsUrl,
      children: commentsTitle
    })]
  });
};
var _default = exports.default = RelatedDiv;
//# sourceMappingURL=RelatedDiv.js.map