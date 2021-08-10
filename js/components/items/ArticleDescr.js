"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DIV = "link-wrapper";
var S = {
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 4,
    color: '#121212',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '1rem',
    fontWeight: 'bold' //fontFamily: '"Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif'

  },
  AUTHOR_ROOT: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 8px 6px 16px'
  },
  AUTHOR: {
    color: 'gray',
    paddingRight: 16,
    fontWeight: 'bold'
  },
  DATE: {
    color: 'gray',
    //flexShrink: 0,
    paddingRight: 32,
    fontWeight: 'bold'
  }
};

var ArticleDescr = function ArticleDescr(_ref) {
  var style = _ref.style,
      isShow = _ref.isShow,
      url = _ref.url,
      description = _ref.description,
      related = _ref.related,
      publishedAt = _ref.publishedAt,
      author = _ref.author,
      onHide = _ref.onHide,
      onClose = _ref.onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hKeyDown = (0, _react.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 13) {
      window.open(url, '_blank');
    } else if (keyCode === 27) {
      onHide();
    } else if (keyCode === 46) {
      onClose();
    }
  }, []); //url, onHide, onClose

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide["default"], {
    style: style,
    isShow: isShow,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: CL_DIV,
      style: S.DESCR,
      href: url,
      onKeyDown: _hKeyDown,
      children: description
    }), related && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.DESCR,
      children: related
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.AUTHOR_ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S.DATE,
        children: publishedAt
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S.AUTHOR,
        children: author
      })]
    })]
  });
};
/*
<div
  role="link"
  tabIndex="0"
  className={CL_DIV}
  onKeyDown={_hKeyDown}
>
  <a style={S.DESCR} href={url} tabIndex="-1">
    {description}
  </a>
</div>
*/


var _default = ArticleDescr;
exports["default"] = _default;
//# sourceMappingURL=ArticleDescr.js.map