"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _useRefHotKey = _interopRequireDefault(require("../hotkeys/useRefHotKey"));
var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _NewsPane = _interopRequireDefault(require("./NewsPane.Style"));
var _has = require("../has");
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _CaptionButtons = _interopRequireDefault(require("./CaptionButtons"));
var _LoadNextPage = _interopRequireDefault(require("./LoadNextPage"));
var _ResizeWidth = require("./ResizeWidth");
var _hotKeys = require("./hotKeys");
var _jsxRuntime = require("preact/jsx-runtime");
var WIDTH_STYLE = (0, _has.initWidthStyle)(),
  CL_NEWS_PANE = "news-pane",
  CL_SHOW_POPUP = "show-popup",
  CL_MENU_MORE = "popup-menu items__menu-more",
  S_SCROLL_DIV = {
    overflow: 'hidden auto',
    height: '92%',
    paddingRight: 10
  },
  S_INLINE_BLOCK = {
    display: 'inline-block'
  },
  S_NONE = {
    display: 'none'
  };
var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || _ResizeWidth.RESIZE_INIT_WIDTH;
};
var _toStyleWidth = function _toStyleWidth(width) {
  return width + 'px';
};
var _focusFirstItem = function _focusFirstItem(ref) {
  setTimeout(function () {
    (0, _uiApi.focusRefElement)(ref);
  }, 1000);
};
var _crPaneCaption = function _crPaneCaption(caption, sortBy) {
  return [caption, sortBy].filter(Boolean).map(_toFirstUpperCase["default"]).join(': ');
};
var _crArticleItem = function _crArticleItem(article, index, _ref) {
  var Item = _ref.Item,
    refFirstItem = _ref.refFirstItem,
    onCloseItem = _ref.onCloseItem,
    onRemoveUnder = _ref.onRemoveUnder;
  return (0, _jsxRuntime.jsx)(Item, {
    ref: index === 0 ? refFirstItem : void 0,
    item: article,
    onCloseItem: onCloseItem,
    onRemoveUnder: onRemoveUnder
  }, article.articleId);
};
var _crModelMoreHandlers = function _crModelMoreHandlers(ref, onRemoveItems) {
  var _resizeTo = function _resizeTo(width) {
      ((0, _uiApi.getRefElementStyle)(ref) || {}).width = _toStyleWidth(width);
    },
    _plusToWidth = function _plusToWidth() {
      var style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) + _ResizeWidth.RESIZE_DELTA;
      if (w < _ResizeWidth.RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    },
    _minusToWidth = function _minusToWidth() {
      var style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) - _ResizeWidth.RESIZE_DELTA;
      if (w > _ResizeWidth.RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };
  return {
    onMinWidth: _resizeTo.bind(null, _ResizeWidth.RESIZE_MIN_WIDTH),
    onInitWidth: _resizeTo.bind(null, _ResizeWidth.RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};
var NewsPane = function NewsPane(_ref2) {
  var store = _ref2.store,
    addAction = _ref2.addAction,
    updateAction = _ref2.updateAction,
    showAction = _ref2.showAction,
    toggleAction = _ref2.toggleAction,
    id = _ref2.id,
    paneCaption = _ref2.paneCaption,
    Item = _ref2.Item,
    onRemoveItems = _ref2.onRemoveItems,
    onRemoveUnder = _ref2.onRemoveUnder,
    onCloseItem = _ref2.onCloseItem,
    onClose = _ref2.onClose;
  var _refRootDiv = (0, _uiApi.useRef)(),
    _refFirstItem = (0, _uiApi.useRef)(),
    _MORE_HANDLERS = (0, _uiApi.useMemo)(function () {
      return _crModelMoreHandlers(_refRootDiv, onRemoveItems);
    }, []),
    _MODEL_MORE = (0, _uiApi.useMemo)(function () {
      return (0, _crModelMore["default"])(_MORE_HANDLERS);
    }, []),
    onPlusWidth = _MORE_HANDLERS.onPlusWidth,
    onMinusWidth = _MORE_HANDLERS.onMinusWidth,
    _useToggle = (0, _useToggle2["default"])(true),
    isShow = _useToggle[0],
    toggleIsShow = _useToggle[1],
    _useBool = (0, _useBool2["default"])(false),
    isMore = _useBool[0],
    _showMore = _useBool[1],
    _hideMore = _useBool[2],
    _useState = (0, _uiApi.useState)({
      articles: [],
      sortBy: '',
      caption: ''
    }),
    state = _useState[0],
    setState = _useState[1],
    articles = state.articles,
    sortBy = state.sortBy,
    caption = state.caption,
    page = state.page,
    _hHide = (0, _uiApi.useCallback)(function () {
      onClose();
      toggleIsShow(false);
    }, []),
    TS = (0, _useTheme["default"])(_NewsPane["default"]);
  (0, _useListen["default"])(store, function (actionType, option) {
    if (option === void 0) {
      option = {};
    }
    if (option.id === id) {
      if (actionType === addAction) {
        toggleIsShow(true);
        setState(function (prevState) {
          return {
            articles: option.data,
            sortBy: option.sortBy,
            caption: option.caption,
            page: option.page
          };
        });
        _focusFirstItem(_refFirstItem);
      } else if (actionType === updateAction) {
        setState(function (prevState) {
          return (0, _extends2["default"])({}, prevState, {
            articles: option.data
          });
        });
      } else if (actionType === showAction) {
        toggleIsShow(true);
      } else if (actionType === toggleAction) {
        toggleIsShow();
      }
    }
  });
  (0, _useRefHotKey["default"])(_refRootDiv, _hotKeys.HK_REMOVE_ITEMS, onRemoveItems);
  (0, _useRefHotKey["default"])(_refRootDiv, _hotKeys.HK_PLUS_WIDTH, onPlusWidth);
  (0, _useRefHotKey["default"])(_refRootDiv, _hotKeys.HK_MINUS_WIDTH, onMinusWidth);
  var _paneCaption = caption || _crPaneCaption(paneCaption, sortBy),
    _className = (0, _crCn["default"])(CL_NEWS_PANE, [isShow, CL_SHOW_POPUP]),
    _styleIsShow = isShow ? S_INLINE_BLOCK : S_NONE;
  return (0, _jsxRuntime.jsxs)("div", {
    ref: _refRootDiv,
    className: _className,
    style: (0, _extends2["default"])({}, WIDTH_STYLE, TS.PANE_ROOT, _styleIsShow),
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.EL_BORDER,
      model: _MODEL_MORE,
      onClose: _hideMore
    }), (0, _jsxRuntime.jsx)(_Comp["default"].BrowserCaption, {
      style: TS.PANE_CAPTION,
      caption: _paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: (0, _jsxRuntime.jsx)(_CaptionButtons["default"], {
        refRootDiv: _refRootDiv,
        onRemoveItems: onRemoveItems,
        onPlusWidth: onPlusWidth,
        onMinusWidth: onMinusWidth
      })
    }), (0, _jsxRuntime.jsxs)(_Comp["default"].ScrollPane, {
      style: S_SCROLL_DIV,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].ItemStack, {
        items: articles,
        crItem: _crArticleItem,
        Item: Item,
        refFirstItem: _refFirstItem,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder
      }), (0, _jsxRuntime.jsx)(_LoadNextPage["default"], {
        page: page
      })]
    })]
  });
};
var _default = NewsPane;
exports["default"] = _default;
//# sourceMappingURL=NewsPane.js.map