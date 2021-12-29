"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _NewsPane = _interopRequireDefault(require("./NewsPane.Style"));

var _has = _interopRequireDefault(require("../has"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var WIDTH_STYLE = _has["default"].initWidthStyle(),
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 395,
    RESIZE_MAX_WIDTH = 1200,
    RESIZE_DELTA = 10,
    CL_NEWS_PANE = "news-pane",
    CL_SHOW_POPUP = "show-popup",
    CL_MENU_MORE = "popup-menu items__menu-more",
    S_BT_REMOVE = {
  position: 'relative',
  top: -3,
  margin: '0 6px 0 16px'
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
    if (ref && ref.current && ref.current.focus) {
      ref.current.focus();
    }
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
    ref: index === 0 ? refFirstItem : void 0,
    item: article,
    onCloseItem: onCloseItem,
    onRemoveUnder: onRemoveUnder
  }, article.articleId);
};

var _crModelMoreHandlers = function _crModelMoreHandlers(ref, onRemoveItems) {
  var _getRootNodeStyle = function _getRootNodeStyle() {
    var current = ref.current,
        _ref2 = current || {},
        style = _ref2.style;

    return style || {};
  },
      _resizeTo = function _resizeTo(width) {
    _getRootNodeStyle().width = _toStyleWidth(width);
  },
      _plusToWidth = function _plusToWidth() {
    var style = _getRootNodeStyle(),
        w = _getWidth(style) + RESIZE_DELTA;

    if (w < RESIZE_MAX_WIDTH) {
      style.width = _toStyleWidth(w);
    }
  },
      _minusToWidth = function _minusToWidth() {
    var style = _getRootNodeStyle(),
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

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var NewsPane = function NewsPane(_ref3) {
  var store = _ref3.store,
      addAction = _ref3.addAction,
      showAction = _ref3.showAction,
      toggleAction = _ref3.toggleAction,
      id = _ref3.id,
      paneCaption = _ref3.paneCaption,
      Item = _ref3.Item,
      onRemoveItems = _ref3.onRemoveItems,
      onRemoveUnder = _ref3.onRemoveUnder,
      onCloseItem = _ref3.onCloseItem,
      onClose = _ref3.onClose;

  var _refRootDiv = (0, _react.useRef)(),
      _getRootDiv = (0, _react.useCallback)(function () {
    return _getRefValue(_refRootDiv);
  }, []),
      _refFirstItem = (0, _react.useRef)(),
      _MODEL_MORE = (0, _react.useMemo)(function () {
    return (0, _crModelMore["default"])(_crModelMoreHandlers(_refRootDiv, onRemoveItems));
  }, []),
      _useState = (0, _react.useState)(true),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _useBool = (0, _useBool2["default"])(false),
      isMore = _useBool[0],
      _showMore = _useBool[1],
      _hideMore = _useBool[2],
      _useState2 = (0, _react.useState)({
    articles: [],
    sortBy: ''
  }),
      state = _useState2[0],
      setState = _useState2[1],
      articles = state.articles,
      sortBy = state.sortBy,
      _hHide = (0, _react.useCallback)(function () {
    onClose();
    setIsShow(false);
  }, []),
      TS = (0, _useTheme["default"])(_NewsPane["default"]);

  (0, _useListen["default"])(store, function (actionType, option) {
    if (option === void 0) {
      option = {};
    }

    if (option.id === id) {
      if (actionType === addAction) {
        setIsShow(true);
        setState(function (prevState) {
          return {
            articles: option.data,
            sortBy: option.sortBy
          };
        });

        _focusFirstItem(_refFirstItem);
      } else if (actionType === showAction) {
        setIsShow(true);
      } else if (actionType === toggleAction) {
        setIsShow(function (is) {
          return !is;
        });
      }
    }
  });

  var _paneCaption = _crPaneCaption(paneCaption, sortBy),
      _className = (0, _crCn["default"])(CL_NEWS_PANE, [isShow, CL_SHOW_POPUP]),
      _styleIsShow = isShow ? S_INLINE_BLOCK : S_NONE;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: _refRootDiv,
    className: _className,
    style: (0, _extends2["default"])({}, WIDTH_STYLE, TS.PANE_ROOT, _styleIsShow),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.EL_BORDER,
      model: _MODEL_MORE,
      onClose: _hideMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].BrowserCaption, {
      style: TS.PANE_CAPTION,
      caption: _paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        caption: "R",
        title: "Remove All Items",
        style: S_BT_REMOVE,
        onClick: onRemoveItems
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgHrzResize, {
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH,
        getDomNode: _getRootDiv
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S_SCROLL_DIV,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ItemStack, {
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