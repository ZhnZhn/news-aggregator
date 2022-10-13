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

var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _NewsPane = _interopRequireDefault(require("./NewsPane.Style"));

var _has = _interopRequireDefault(require("../has"));

var _DP = require("../DP");

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("preact/jsx-runtime");

var WIDTH_STYLE = _has["default"].initWidthStyle(),
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 395,
    RESIZE_MAX_WIDTH = 1200,
    RESIZE_DELTA = 10,
    CL_NEWS_PANE = "news-pane",
    CL_SHOW_POPUP = "show-popup",
    CL_MENU_MORE = "popup-menu items__menu-more",
    S_BROWSER_CAPTION = {
  paddingTop: 2
},
    S_BT_REMOVE = {
  position: 'relative',
  top: -2,
  margin: '0 6px 0 12px'
},
    S_SVG_RESIZE = {
  position: 'relative',
  top: 3
},
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
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
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
        w = _getWidth(style) + RESIZE_DELTA;

    if (w < RESIZE_MAX_WIDTH) {
      style.width = _toStyleWidth(w);
    }
  },
      _minusToWidth = function _minusToWidth() {
    var style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) - RESIZE_DELTA;

    if (w > RESIZE_MIN_WIDTH) {
      style.width = _toStyleWidth(w);
    }
  };

  return {
    onMinWidth: _resizeTo.bind(null, RESIZE_MIN_WIDTH),
    onInitWidth: _resizeTo.bind(null, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};

var NewsPane = function NewsPane(_ref2) {
  var store = _ref2.store,
      addAction = _ref2.addAction,
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
      _MODEL_MORE = (0, _uiApi.useMemo)(function () {
    return (0, _crModelMore["default"])(_crModelMoreHandlers(_refRootDiv, onRemoveItems));
  }, []),
      _useToggle = (0, _useToggle2["default"])(true),
      isShow = _useToggle[0],
      toggleIsShow = _useToggle[1],
      _useBool = (0, _useBool2["default"])(false),
      isMore = _useBool[0],
      _showMore = _useBool[1],
      _hideMore = _useBool[2],
      _useState = (0, _uiApi.useState)({
    articles: [],
    sortBy: ''
  }),
      state = _useState[0],
      setState = _useState[1],
      articles = state.articles,
      sortBy = state.sortBy,
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
            sortBy: option.sortBy
          };
        });

        _focusFirstItem(_refFirstItem);
      } else if (actionType === showAction) {
        toggleIsShow(true);
      } else if (actionType === toggleAction) {
        toggleIsShow();
      }
    }
  });

  var _paneCaption = _crPaneCaption(paneCaption, sortBy),
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
    }), (0, _jsxRuntime.jsxs)(_Comp["default"].BrowserCaption, {
      style: (0, _extends2["default"])({}, TS.PANE_CAPTION, S_BROWSER_CAPTION),
      caption: _paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        ariaLabel: "Remove All Items",
        dataPos: _DP.DP_MIDDLE_RIGHT,
        caption: "R",
        style: S_BT_REMOVE,
        onClick: onRemoveItems
      }), (0, _jsxRuntime.jsx)(_SvgHrzResize["default"], {
        elementRef: _refRootDiv,
        style: S_SVG_RESIZE,
        initWidth: RESIZE_INIT_WIDTH,
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH
      })]
    }), (0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      style: S_SCROLL_DIV,
      children: (0, _jsxRuntime.jsx)(_Comp["default"].ItemStack, {
        items: articles,
        crItem: _crArticleItem,
        Item: Item,
        refFirstItem: _refFirstItem,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder
      })
    })]
  });
};

var _default = NewsPane;
exports["default"] = _default;
//# sourceMappingURL=NewsPane.js.map