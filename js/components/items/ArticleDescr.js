"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

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

var ArticleDescr = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ArticleDescr, _Component);

  function ArticleDescr() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        window.open(_this.props.url, '_blank');
      } else if (keyCode === 27) {
        _this.props.onHide();
      }
    };

    return _this;
  }

  var _proto = ArticleDescr.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        isShow = _this$props.isShow,
        url = _this$props.url,
        description = _this$props.description,
        related = _this$props.related,
        publishedAt = _this$props.publishedAt,
        author = _this$props.author;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide["default"], {
      style: style,
      isShow: isShow,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        role: "link",
        tabIndex: "0",
        className: CL_DIV,
        onKeyDown: this._hKeyDown,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: url,
          tabIndex: "-1",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.DESCR,
            children: description
          })
        })
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

  return ArticleDescr;
}(_react.Component);

var _default = ArticleDescr;
exports["default"] = _default;
//# sourceMappingURL=ArticleDescr.js.map