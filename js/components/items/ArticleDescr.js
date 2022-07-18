"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _SafeLink = _interopRequireDefault(require("../zhn-atoms/SafeLink"));

var _TextDiv = _interopRequireDefault(require("../zhn-atoms/TextDiv"));

var _TextSpan = _interopRequireDefault(require("../zhn-atoms/TextSpan"));

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DIV = "link-wrapper",
    CL_SELECT_NONE = "select-none",
    S_DESCR = {
  display: 'block',
  lineHeight: 1.4,
  padding: '8px 16px 4px 16px',
  color: '#121212',
  fontSize: '1rem',
  fontWeight: 'bold',
  //whiteSpace: "pre-wrap",
  whiteSpace: "pre-line",
  wordBreak: 'break-word'
},
    S_RELATED = {
  lineHeight: 1.8,
  padding: '0 16px 0 16px',
  color: '#121212',
  fontSize: '1rem',
  fontWeight: 'bold',
  wordBreak: 'break-word'
},
    S_AUTHOR_ROW = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px 0 16px'
},
    S_BOTTOM_ROW = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 12px 6px 16px'
},
    S_AUTHOR = {
  color: 'gray',
  paddingRight: 16,
  fontWeight: 'bold'
},
    S_DATE = {
  color: 'gray',
  fontWeight: 'bold'
},
    S_PT_8 = {
  paddingTop: 8
};

var ArticleDescr = function ArticleDescr(_ref) {
  var style = _ref.style,
      isShow = _ref.isShow,
      href = _ref.href,
      description = _ref.description,
      related = _ref.related,
      publishedAt = _ref.publishedAt,
      timeAgo = _ref.timeAgo,
      author = _ref.author,
      onHide = _ref.onHide,
      onClose = _ref.onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hKeyDown = (0, _react.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 27) {
      onHide();
    } else if (keyCode === 46) {
      onClose();
    }
  }, []); //url, onHide, onClose

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide["default"], {
    style: style,
    isShow: isShow,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_AUTHOR_ROW,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextSpan["default"], {
        style: S_AUTHOR,
        text: author
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextSpan["default"], {
        style: S_DATE,
        text: timeAgo
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SafeLink["default"], {
      className: CL_DIV,
      style: S_DESCR,
      href: href,
      onKeyDown: _hKeyDown,
      children: description
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_PT_8,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextDiv["default"], {
        className: CL_SELECT_NONE,
        style: S_RELATED,
        text: related
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_BOTTOM_ROW,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
          onClick: onClose
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextSpan["default"], {
          className: CL_SELECT_NONE,
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