"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Article = _interopRequireDefault(require("./Article.Style"));

var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));

var _ArticleDescr = _interopRequireDefault(require("./ArticleDescr"));

var _withDnD = _interopRequireDefault(require("./decorators/withDnD"));

var _class, _class2, _temp;

var CL_ITEM_HEADER = "article-header";
var S = {
  ROOT: {
    position: 'relative',
    marginBottom: 5,
    lineHeight: 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    width: '100%',
    backgroundColor: '#404040',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    lineHeight: 1.5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    paddingRight: 32,
    color: 'black',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b'
  },
  SVG_CLOSE: {
    "float": 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  NONE: {
    display: 'none'
  }
};

var _focusNextArticle = function _focusNextArticle(nodeArticle) {
  var _ref = nodeArticle || {},
      nextElementSibling = _ref.nextElementSibling,
      _ref2 = nextElementSibling || {},
      firstElementChild = _ref2.firstElementChild;

  if (firstElementChild) {
    firstElementChild.focus();
  }
};

var Article = (0, _withDnD["default"])(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Article, _Component);

  function Article(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          item = _this$props.item;

      _focusNextArticle(_this._articleNode);

      onCloseItem(item);

      _this.setState({
        isClosed: true
      });
    };

    _this._handleHide = function () {
      _this.headerComp.focus();

      _this.setState({
        isShow: false
      });
    };

    _this._refItem = function (node) {
      return _this._articleNode = node;
    };

    _this._refItemHeader = function (comp) {
      return _this.headerComp = comp;
    };

    _this.focus = function () {
      if (_this.headerComp) {
        _this.headerComp.focus();
      }
    };

    _this._itemHandlers = _this._crDnDHandlers();
    _this.state = {
      isClosed: false,
      isShow: false
    };
    return _this;
  }

  var _proto = Article.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        item = _this$props2.item,
        theme = _this$props2.theme,
        TS = theme.createStyle(_Article["default"]),
        title = item.title,
        author = item.author,
        publishedDate = item.publishedDate,
        publishedAt = item.publishedAt,
        url = item.url,
        related = item.related,
        description = item.description || 'More...',
        _this$state = this.state,
        isClosed = _this$state.isClosed,
        isShow = _this$state.isShow,
        _headerStyle = isShow ? (0, _extends2["default"])({}, S.HEADER, S.HEADER_OPEN) : S.HEADER,
        _captionStyle = isShow ? (0, _extends2["default"])({}, S.CAPTION, S.CAPTION_OPEN) : S.CAPTION,
        _publishedAt = publishedDate || _dt["default"].toTimeDate(publishedAt),
        _rootStyle = isClosed ? S.NONE : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
      ref: this._refItem,
      style: (0, _extends2["default"])({}, S.ROOT, _rootStyle)
    }, this._itemHandlers, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
        ref: this._refItemHeader,
        className: CL_ITEM_HEADER,
        style: (0, _extends2["default"])({}, _headerStyle, TS.HEADER),
        captionStyle: _captionStyle,
        btCloseStyle: S.SVG_CLOSE,
        title: title,
        url: url,
        isShow: isShow,
        onClick: this._handleToggle,
        onClose: this._handleClose,
        onHide: this._handleHide
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArticleDescr["default"], {
        style: TS.DESCR,
        isShow: isShow,
        url: url,
        description: description,
        related: related,
        publishedAt: _publishedAt,
        author: author,
        onHide: this._handleHide
      })]
    }));
  };

  return Article;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp)) || _class;

var _default = (0, _withTheme["default"])(Article);

exports["default"] = _default;
//# sourceMappingURL=Article.js.map