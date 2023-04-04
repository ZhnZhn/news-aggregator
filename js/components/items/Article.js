"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useRefSet2 = _interopRequireDefault(require("../hooks/useRefSet"));
var _dt = require("../../utils/dt");
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _toLink = _interopRequireDefault(require("../zhn-utils/toLink"));
var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));
var _useItemType2 = _interopRequireDefault(require("./useItemType1"));
var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));
var _ItemType = _interopRequireDefault(require("./ItemType1"));
var _ArticleDescr = _interopRequireDefault(require("./ArticleDescr"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
var FN_NOOP = function FN_NOOP() {};
var Article = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
    onCloseItem = _ref.onCloseItem,
    _ref$onRemoveUnder = _ref.onRemoveUnder,
    onRemoveUnder = _ref$onRemoveUnder === void 0 ? FN_NOOP : _ref$onRemoveUnder,
    _ref$onRemoveItem = _ref.onRemoveItem,
    onRemoveItem = _ref$onRemoveItem === void 0 ? FN_NOOP : _ref$onRemoveItem;
  var _refArticle = (0, _uiApi.useRef)(null),
    _useRefSet = (0, _useRefSet2["default"])(null),
    refTimeStamp = _useRefSet[0],
    setTimeStamp = _useRefSet[1],
    _useState = (0, _uiApi.useState)(false),
    isClosed = _useState[0],
    setIsClosed = _useState[1],
    _hClose = (0, _uiApi.useMemo)(function () {
      return function () {
        (0, _uiApi.focusRefNextSiblingFirstChildElement)(_refArticle);
        onCloseItem(item);
        setIsClosed(true);
      };
    }, []),
    _onGestureSwipeX = (0, _useItemGestureSwipeX["default"])(item, onRemoveUnder, _hClose),
    _useItemType = (0, _useItemType2["default"])(ref),
    isShowDescr = _useItemType[0],
    hToggle = _useItemType[1],
    hHide = _useItemType[2],
    _hToggle = (0, _uiApi.useMemo)(function () {
      return function (evt) {
        var _ref2 = evt || {},
          timeStamp = _ref2.timeStamp,
          _timeStamp = (0, _uiApi.getRefValue)(refTimeStamp);
        if (timeStamp && _timeStamp && timeStamp - _timeStamp < 200) {
          return;
        }
        setTimeStamp(timeStamp);
        hToggle();
      };
    }, []),
    _hItemKeyDown = (0, _uiApi.useMemo)(function () {
      return function (evt) {
        var keyCode = evt.keyCode;
        if (keyCode === 27) {
          hHide();
        } else if (keyCode === 46) {
          _hClose();
        }
      };
    }, []);

  // hHide, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */

  var title = item.title,
    author = item.author,
    timeAgo = item.timeAgo,
    publishedDate = item.publishedDate,
    publishedAt = item.publishedAt,
    url = item.url,
    related = item.related,
    description = item.description || 'More...',
    _style = (0, _crStyle["default"])([isClosed, _Item.S_NONE]),
    _publishedAt = publishedDate || (0, _dt.toTimeDate)(publishedAt),
    _href = (0, _toLink["default"])(url);
  return url && !_href ? null : (0, _jsxRuntime.jsx)(_GestureSwipeX["default"], {
    ref: _refArticle,
    style: (0, _extends2["default"])({}, _Item.S_ITEM, _style),
    setTimeStamp: setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: (0, _jsxRuntime.jsx)(_ItemType["default"], {
      ref: ref,
      isShowDescr: isShowDescr,
      title: title,
      onKeyDown: _hItemKeyDown,
      onClick: _hToggle,
      onToggle: hToggle,
      onClose: _hClose,
      children: (0, _jsxRuntime.jsx)(_ArticleDescr["default"], {
        href: _href,
        description: description,
        related: related,
        publishedAt: _publishedAt,
        author: author,
        timeAgo: timeAgo,
        onKeyDown: _hItemKeyDown,
        onClose: _hClose
      })
    })
  });
});
var _default = Article;
exports["default"] = _default;
//# sourceMappingURL=Article.js.map