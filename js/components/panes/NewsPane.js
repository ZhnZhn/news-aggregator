"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useRefHotKey = _interopRequireDefault(require("../hotkeys/useRefHotKey"));
var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _NewsPane = _interopRequireDefault(require("./NewsPane.Style"));
var _has = require("../has");
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _crRelatedBars = _interopRequireDefault(require("./crRelatedBars"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _ItemBarChart = _interopRequireDefault(require("../items/ItemBarChart"));
var _CaptionButtons = _interopRequireDefault(require("./CaptionButtons"));
var _LoadNextPage = _interopRequireDefault(require("./LoadNextPage"));
var _ResizeWidth = require("./ResizeWidth");
var _hotKeys = require("./hotKeys");
var _jsxRuntime = require("preact/jsx-runtime");
const WIDTH_STYLE = (0, _has.initWidthStyle)(),
  CL_NEWS_PANE = "news-pane",
  CL_SHOW_POPUP = "show-popup",
  CL_MENU_MORE = "popup-menu items__menu-more",
  S_BROWSER_CAPTION = {
    paddingLeft: 30,
    textAlign: 'left'
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
const _getWidth = style => parseInt(style.width, 10) || _ResizeWidth.RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';
const _focusFirstItem = ref => {
  setTimeout(() => {
    (0, _uiApi.focusRefElement)(ref);
  }, 1000);
};
const _crPaneCaption = (caption, sortBy) => [caption, sortBy].filter(Boolean).map(_toFirstUpperCase.default).join(': ');
const _crArticleItem = (article, index, _ref) => {
  let {
    Item,
    refFirstItem,
    onCloseItem,
    onRemoveUnder
  } = _ref;
  return (0, _jsxRuntime.jsx)(Item, {
    ref: index === 0 ? refFirstItem : void 0,
    item: article,
    onCloseItem: onCloseItem,
    onRemoveUnder: onRemoveUnder
  }, article.articleId);
};
const _crModelMoreHandlers = (ref, onRemoveItems) => {
  const _resizeTo = width => {
      ((0, _uiApi.getRefElementStyle)(ref) || {}).width = _toStyleWidth(width);
    },
    _plusToWidth = () => {
      const style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) + _ResizeWidth.RESIZE_DELTA;
      if (w < _ResizeWidth.RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    },
    _minusToWidth = () => {
      const style = (0, _uiApi.getRefElementStyle)(ref) || {},
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
const NewsPane = _ref2 => {
  let {
    id,
    paneCaption,
    Item,
    useMsPane,
    useMsItem,
    onRemoveItems,
    onRemoveUnder,
    onCloseItem
  } = _ref2;
  const _refRootDiv = (0, _uiApi.useRef)(),
    _refFirstItem = (0, _uiApi.useRef)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _MORE_HANDLERS = (0, _uiApi.useMemo)(() => _crModelMoreHandlers(_refRootDiv, onRemoveItems), []),
    _MODEL_MORE = (0, _uiApi.useMemo)(() => (0, _crModelMore.default)(_MORE_HANDLERS), [])
    // onRemoveItems
    /*eslint-enable react-hooks/exhaustive-deps */,
    {
      onPlusWidth,
      onMinusWidth
    } = _MORE_HANDLERS,
    [isShow, toggleIsShow] = (0, _useToggle.default)(true),
    [isMore, _showMore, _hideMore] = (0, _useBool.default)(false),
    [state, setState] = (0, _uiApi.useState)({
      articles: [],
      sortBy: '',
      caption: ''
    }),
    {
      articles,
      sortBy,
      caption,
      page,
      isRelatedBars
    } = state,
    [_categoryBars, _maxValue, _numberOfArticles] = (0, _uiApi.useMemo)(() => {
      if (isRelatedBars) {
        const _relatedBars = (0, _crRelatedBars.default)(articles);
        return [_relatedBars, (_relatedBars[0] || [])[1], articles.length];
      }
      return [];
    }, [isRelatedBars, articles])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hHide = (0, _uiApi.useCallback)(() => {
      toggleIsShow(false);
    }, [])
    // onClose
    /*eslint-enable react-hooks/exhaustive-deps */,
    TS = (0, _useTheme.default)(_NewsPane.default);
  useMsPane(msPane => {
    if (msPane && msPane.id === id) {
      toggleIsShow(true);
    }
  });
  useMsItem(msItem => {
    if (msItem && msItem.id === id) {
      if (msItem.isAdd === true) {
        toggleIsShow(true);
        setState({
          articles: msItem.data,
          sortBy: msItem.sortBy,
          caption: msItem.caption,
          page: msItem.page,
          isRelatedBars: msItem.isRelatedBars
        });
        _focusFirstItem(_refFirstItem);
      } else if (msItem.isUpdate === true) {
        setState(prevState => ({
          ...prevState,
          articles: msItem.data
        }));
      }
    }
  });
  (0, _useRefHotKey.default)(_refRootDiv, _hotKeys.HK_REMOVE_ITEMS, onRemoveItems);
  (0, _useRefHotKey.default)(_refRootDiv, _hotKeys.HK_PLUS_WIDTH, onPlusWidth);
  (0, _useRefHotKey.default)(_refRootDiv, _hotKeys.HK_MINUS_WIDTH, onMinusWidth);
  const _paneCaption = caption || _crPaneCaption(paneCaption, sortBy),
    _className = (0, _crCn.default)(CL_NEWS_PANE, [isShow, CL_SHOW_POPUP]),
    _styleIsShow = isShow ? S_INLINE_BLOCK : S_NONE;
  return (0, _jsxRuntime.jsxs)("div", {
    ref: _refRootDiv,
    className: _className,
    style: {
      ...WIDTH_STYLE,
      ...TS.PANE_ROOT,
      ..._styleIsShow
    },
    children: [(0, _jsxRuntime.jsx)(_Comp.default.ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.EL_BORDER,
      model: _MODEL_MORE,
      onClose: _hideMore
    }), (0, _jsxRuntime.jsx)(_Comp.default.BrowserCaption, {
      style: {
        ...S_BROWSER_CAPTION,
        ...TS.PANE_CAPTION
      },
      caption: _paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: (0, _jsxRuntime.jsx)(_CaptionButtons.default, {
        refRootDiv: _refRootDiv,
        onRemoveItems: onRemoveItems,
        onPlusWidth: onPlusWidth,
        onMinusWidth: onMinusWidth
      })
    }), (0, _jsxRuntime.jsxs)(_Comp.default.ScrollPane, {
      style: S_SCROLL_DIV,
      children: [isRelatedBars && _maxValue && (0, _jsxRuntime.jsx)(_ItemBarChart.default, {
        categoryBars: _categoryBars,
        maxValue: _maxValue,
        numberOfItems: _numberOfArticles
      }), (0, _jsxRuntime.jsx)(_Comp.default.ItemStack, {
        items: articles,
        crItem: _crArticleItem,
        Item: Item,
        refFirstItem: _refFirstItem,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder
      }), (0, _jsxRuntime.jsx)(_LoadNextPage.default, {
        page: page
      })]
    })]
  });
};
var _default = NewsPane;
exports.default = _default;
//# sourceMappingURL=NewsPane.js.map