"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _dt = require("../../utils/dt");
var _useRefSet = _interopRequireDefault(require("../hooks/useRefSet"));
var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));
var _useItemType = _interopRequireDefault(require("./useItemType1"));
var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));
var _ItemType = _interopRequireDefault(require("./ItemType1"));
var _ArticleDescr = _interopRequireDefault(require("./ArticleDescr"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const FN_NOOP = () => {};
const Article = _ref => {
  let {
    refEl,
    item,
    onCloseItem,
    onRemoveUnder = FN_NOOP,
    onRemoveItem = FN_NOOP
  } = _ref;
  const _refArticle = (0, _uiApi.useRef)(null),
    [refTimeStamp, setTimeStamp] = (0, _useRefSet.default)(null),
    [isClosed, setIsClosed] = (0, _uiApi.useState)(false)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClose = (0, _uiApi.useMemo)(() => () => {
      (0, _uiApi.focusRefNextSiblingFirstChildElement)(_refArticle);
      onCloseItem(item);
      setIsClosed(true);
    }, [])
    //item, onCloseItem
    /*eslint-enable react-hooks/exhaustive-deps */,
    _onGestureSwipeX = (0, _useItemGestureSwipeX.default)(item, onRemoveUnder, _hClose),
    [isShowDescr, hToggle, hHide] = (0, _useItemType.default)(refEl)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hToggle = (0, _uiApi.useMemo)(() => evt => {
      const {
          timeStamp
        } = evt || {},
        _timeStamp = (0, _uiApi.getRefValue)(refTimeStamp);
      if (timeStamp && _timeStamp && timeStamp - _timeStamp < 200) {
        return;
      }
      setTimeStamp(timeStamp);
      hToggle();
    }, [])
    // refTimeStamp, setTimeStamp, hToggle
    ,
    _hItemKeyDown = (0, _uiApi.useMemo)(() => evt => {
      const {
        keyCode
      } = evt;
      if (keyCode === 27) {
        hHide();
      } else if (keyCode === 46) {
        _hClose();
      }
    }, []);
  // hHide, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
      title,
      author,
      timeAgo,
      publishedDate,
      publishedAt,
      url,
      related
      //, urlToImage
    } = item,
    description = item.description || 'More...',
    _style = isClosed ? _Item.S_NONE : void 0,
    _publishedAt = publishedDate || (0, _dt.toTimeDate)(publishedAt),
    _href = (0, _uiApi.toLink)(url);
  return url && !_href ? null : (0, _jsxRuntime.jsx)(_GestureSwipeX.default, {
    refEl: _refArticle,
    style: {
      ..._Item.S_ITEM,
      ..._style
    },
    setTimeStamp: setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: (0, _jsxRuntime.jsx)(_ItemType.default, {
      refEl: refEl,
      isShowDescr: isShowDescr,
      title: title,
      onKeyDown: _hItemKeyDown,
      onClick: _hToggle,
      onToggle: hToggle,
      onClose: _hClose,
      children: (0, _jsxRuntime.jsx)(_ArticleDescr.default, {
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
};
var _default = exports.default = Article;
//# sourceMappingURL=Article.js.map