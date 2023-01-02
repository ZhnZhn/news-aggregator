"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useRefSet2 = _interopRequireDefault(require("../hooks/useRefSet"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Article = _interopRequireDefault(require("./Article.Style"));
var _dt = require("../../utils/dt");
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _toLink = _interopRequireDefault(require("../zhn-utils/toLink"));
var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));
var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));
var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));
var _ArticleDescr = _interopRequireDefault(require("./ArticleDescr"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_ITEM_HEADER = "article-header";
var S_ROOT = {
    position: 'relative',
    marginBottom: 5,
    lineHeight: 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
  },
  S_CAPTION = {
    display: 'inline-block',
    paddingRight: 32,
    color: 'black',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    wordBreak: 'break-word'
  },
  S_CAPTION_OPEN = {
    color: '#607d8b'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    right: -4
  },
  S_NONE = {
    display: 'none'
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
var FN_NOOP = function FN_NOOP() {};
var Article = (0, _uiApi.forwardRef)(function (_ref3, ref) {
  var item = _ref3.item,
    onCloseItem = _ref3.onCloseItem,
    _ref3$onRemoveUnder = _ref3.onRemoveUnder,
    onRemoveUnder = _ref3$onRemoveUnder === void 0 ? FN_NOOP : _ref3$onRemoveUnder,
    _ref3$onRemoveItem = _ref3.onRemoveItem,
    onRemoveItem = _ref3$onRemoveItem === void 0 ? FN_NOOP : _ref3$onRemoveItem;
  var _refArticle = (0, _uiApi.useRef)(null),
    _useRefSet = (0, _useRefSet2["default"])(null),
    refTimeStamp = _useRefSet[0],
    setTimeStamp = _useRefSet[1],
    _useState = (0, _uiApi.useState)(false),
    isClosed = _useState[0],
    setIsClosed = _useState[1],
    _useState2 = (0, _uiApi.useState)(false),
    isShow = _useState2[0],
    setIsShow = _useState2[1],
    _hToggle = (0, _uiApi.useCallback)(function (evt) {
      var _ref4 = evt || {},
        timeStamp = _ref4.timeStamp,
        _timeStamp = (0, _uiApi.getRefValue)(refTimeStamp);
      if (timeStamp && _timeStamp && timeStamp - _timeStamp < 200) {
        return;
      }
      setTimeStamp(timeStamp);
      setIsShow(function (is) {
        return !is;
      });
    }, []),
    _hClose = (0, _uiApi.useCallback)(function () {
      _focusNextArticle((0, _uiApi.getRefValue)(_refArticle));
      onCloseItem(item);
      setIsClosed(true);
    }, []),
    _hHide = (0, _uiApi.useCallback)(function () {
      var _node = (0, _uiApi.getRefValue)(ref);
      if (_node) {
        _node.focus();
      }
      setIsShow(false);
    }, []),
    _onGestureSwipeX = (0, _useItemGestureSwipeX["default"])(item, onRemoveUnder, _hClose),
    TS = (0, _useTheme["default"])(_Article["default"]);
  var title = item.title,
    author = item.author,
    timeAgo = item.timeAgo,
    publishedDate = item.publishedDate,
    publishedAt = item.publishedAt,
    url = item.url,
    related = item.related,
    description = item.description || 'More...',
    _style = (0, _crStyle["default"])([isClosed, S_NONE]),
    _captionStyle = (0, _crStyle["default"])(S_CAPTION, [isShow, S_CAPTION_OPEN]),
    _publishedAt = publishedDate || (0, _dt.toTimeDate)(publishedAt),
    _href = (0, _toLink["default"])(url);
  if (url && !_href) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_GestureSwipeX["default"], {
    ref: _refArticle,
    style: (0, _extends2["default"])({}, S_ROOT, _style),
    setTimeStamp: setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: [(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
      ref: ref,
      className: CL_ITEM_HEADER,
      style: TS.HEADER,
      captionStyle: _captionStyle,
      btCloseStyle: S_SVG_CLOSE,
      title: title,
      url: url,
      isShow: isShow,
      onClick: _hToggle,
      onClose: _hClose,
      onHide: _hHide
    }), (0, _jsxRuntime.jsx)(_ArticleDescr["default"], {
      style: TS.DESCR,
      isShow: isShow,
      href: _href,
      description: description,
      related: related,
      publishedAt: _publishedAt,
      author: author,
      timeAgo: timeAgo,
      onClose: _hClose,
      onHide: _hHide
    })]
  });
});
var _default = Article;
exports["default"] = _default;
//# sourceMappingURL=Article.js.map