"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _crStyle = require("../crStyle");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useShowHideComponent = _interopRequireDefault(require("../hooks/useShowHideComponent"));
var _useLoadIf = _interopRequireDefault(require("../hooks/useLoadIf"));
var _Browser = _interopRequireDefault(require("../zhn/Browser"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _ScrollPane = _interopRequireDefault(require("../zhn/ScrollPane"));
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MENU_MORE = (0, _crStyle.crPopupMenuCn)("items__menu-more");
const S_BROWSER = {
    paddingRight: 0
  },
  S_BROWSER_CAPTION = {
    textAlign: 'left'
  },
  S_SCROLL_PANE = {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  };
const FN_NOOP = () => {};
/*
const INITIAL_MENU_MODEL = {
  menu: [],
  items: {}
};
*/

const _crItemMenuPart = (menuPart, index, propOptions) => (0, _preact.createElement)(_MenuPart.default, {
  ...menuPart,
  ...propOptions,
  key: index
});
const DynamicMenuBrowser = _ref => {
  let {
    caption,
    menuMore,
    browserId,
    useMsBrowser,
    url,
    onError = FN_NOOP,
    children,
    onClick
  } = _ref;
  const [isShow, showMenuBrowser, hideMenuBrowser, hKeyDown] = (0, _useShowHideComponent.default)(_has.HAS_WIDE_SCREEN),
    [isMore, setIsMoreTrue, setIsMoreFalse] = (0, _useBool.default)(false),
    [menuModel, setMenuModel] = (0, _uiApi.useState)(),
    loadingSpinner = (0, _useLoadIf.default)(isShow, url, setMenuModel, onError);
  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === browserId) {
      showMenuBrowser();
    }
  });
  const {
      menu,
      items
    } = menuModel || {},
    _onMore = menuMore ? setIsMoreTrue : void 0,
    _styleBrowserCaption = {
      paddingLeft: menuMore ? 30 : 10
    };
  return (0, _jsxRuntime.jsxs)(_Browser.default, {
    isShow: isShow,
    style: S_BROWSER,
    onKeyDown: hKeyDown,
    children: [menuMore && (0, _jsxRuntime.jsx)(_ModalSlider.default, {
      isShow: isMore,
      className: CL_MENU_MORE,
      model: menuMore,
      onClose: setIsMoreFalse
    }), (0, _jsxRuntime.jsx)(_BrowserCaption.default, {
      style: {
        ...S_BROWSER_CAPTION,
        ..._styleBrowserCaption
      },
      caption: caption,
      onMore: _onMore,
      onClose: hideMenuBrowser
    }), loadingSpinner, (0, _jsxRuntime.jsxs)(_ScrollPane.default, {
      style: S_SCROLL_PANE,
      children: [(0, _jsxRuntime.jsx)(_ItemStack.default, {
        items: menu,
        crItem: _crItemMenuPart,
        browserId: browserId,
        hmItems: items,
        onClick: onClick
      }), children]
    })]
  });
};
var _default = exports.default = DynamicMenuBrowser;
//# sourceMappingURL=DynamicMenuBrowser.js.map