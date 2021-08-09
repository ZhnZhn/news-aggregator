"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Article = _interopRequireDefault(require("./Article.Style"));

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));

var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));

var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));

var _ArticleDescr = _interopRequireDefault(require("./ArticleDescr"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ITEM_HEADER = "article-header";
var S = {
  ROOT: {
    position: 'relative',
    marginBottom: 5,
    lineHeight: 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
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

var _fnNoop = function _fnNoop() {};

var Article = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var item = _ref3.item,
      onCloseItem = _ref3.onCloseItem,
      _ref3$onRemoveUnder = _ref3.onRemoveUnder,
      onRemoveUnder = _ref3$onRemoveUnder === void 0 ? _fnNoop : _ref3$onRemoveUnder,
      _ref3$onRemoveItem = _ref3.onRemoveItem,
      onRemoveItem = _ref3$onRemoveItem === void 0 ? _fnNoop : _ref3$onRemoveItem;

  var _refArticle = (0, _react.useRef)(null),
      _refTimeStamp = (0, _react.useRef)(null),
      _useState = (0, _react.useState)(false),
      isClosed = _useState[0],
      setIsClosed = _useState[1],
      _useState2 = (0, _react.useState)(false),
      isShow = _useState2[0],
      setIsShow = _useState2[1],
      _hToggle = (0, _react.useCallback)(function (evt) {
    var _ref4 = evt || {},
        timeStamp = _ref4.timeStamp,
        _timeStamp = _refTimeStamp.current;

    if (timeStamp && _timeStamp && timeStamp - _timeStamp < 200) {
      return;
    }

    _refTimeStamp.current = timeStamp;
    setIsShow(function (is) {
      return !is;
    });
  }, []),
      _hClose = (0, _react.useCallback)(function () {
    _focusNextArticle(_refArticle.current);

    onCloseItem(item);
    setIsClosed(true);
  }, []),
      _hHide = (0, _react.useCallback)(function () {
    var _node = (ref || {}).current;

    if (_node) {
      _node.focus();
    }

    setIsShow(false);
  }, []),
      _setTimeStamp = (0, _react.useCallback)(function (timeStamp) {
    _refTimeStamp.current = timeStamp;
  }, []),
      _onGestureSwipeX = (0, _useItemGestureSwipeX["default"])(item, onRemoveUnder, _hClose),
      TS = (0, _useTheme["default"])(_Article["default"]);

  var title = item.title,
      author = item.author,
      publishedDate = item.publishedDate,
      publishedAt = item.publishedAt,
      url = item.url,
      related = item.related,
      description = item.description || 'More...',
      _style = (0, _crStyle["default"])([isClosed, S.NONE]),
      _captionStyle = (0, _crStyle["default"])(S.CAPTION, [isShow, S.CAPTION_OPEN]),
      _publishedAt = publishedDate || _dt["default"].toTimeDate(publishedAt);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_GestureSwipeX["default"], {
    ref: _refArticle,
    style: (0, _extends2["default"])({}, S.ROOT, _style),
    setTimeStamp: _setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
      ref: ref,
      className: CL_ITEM_HEADER,
      style: (0, _extends2["default"])({}, S.HEADER, TS.HEADER),
      captionStyle: _captionStyle,
      btCloseStyle: S.SVG_CLOSE,
      title: title,
      url: url,
      isShow: isShow,
      onClick: _hToggle,
      onClose: _hClose,
      onHide: _hHide
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArticleDescr["default"], {
      style: TS.DESCR,
      isShow: isShow,
      url: url,
      description: description,
      related: related,
      publishedAt: _publishedAt,
      author: author,
      onHide: _hHide
    })]
  });
});
var _default = Article;
exports["default"] = _default;
//# sourceMappingURL=Article.js.map