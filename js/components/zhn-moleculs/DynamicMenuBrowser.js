"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useLoadIf = _interopRequireDefault(require("../hooks/useLoadIf"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
const {
  Browser,
  BrowserCaption,
  ModalSlider,
  ScrollPane,
  ItemStack
} = _Comp.default;
const CL_MENU_MORE = "popup-menu items__menu-more";
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
    styleConfig,
    caption,
    menuMore,
    browserId,
    useMsBrowser,
    url,
    onError = FN_NOOP,
    children,
    onClick
  } = _ref;
  const [isShow, setIsShowTrue, setIsShowFalse] = (0, _useBool.default)(_has.HAS_WIDE_SCREEN),
    [isMore, setIsMoreTrue, setIsMoreFalse] = (0, _useBool.default)(false),
    [menuModel, setMenuModel] = (0, _uiApi.useState)(),
    loadingSpinner = (0, _useLoadIf.default)(isShow, url, setMenuModel, onError);
  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === browserId) {
      setIsShowTrue();
    }
  });
  const {
      menu,
      items
    } = menuModel || {},
    _onMore = menuMore ? setIsMoreTrue : void 0,
    TS = styleConfig,
    _styleBrowserCaption = {
      paddingLeft: menuMore ? 30 : 10
    };
  return (0, _jsxRuntime.jsxs)(Browser, {
    isShow: isShow,
    style: {
      ...S_BROWSER,
      ...TS.BROWSER
    },
    children: [menuMore && (0, _jsxRuntime.jsx)(ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.EL_BORDER,
      model: menuMore,
      onClose: setIsMoreFalse
    }), (0, _jsxRuntime.jsx)(BrowserCaption, {
      style: {
        ...S_BROWSER_CAPTION,
        ..._styleBrowserCaption,
        ...TS.BROWSER_CAPTION
      },
      caption: caption,
      onMore: _onMore,
      onClose: setIsShowFalse
    }), loadingSpinner, (0, _jsxRuntime.jsxs)(ScrollPane, {
      style: S_SCROLL_PANE,
      children: [(0, _jsxRuntime.jsx)(ItemStack, {
        items: menu,
        crItem: _crItemMenuPart,
        styleConfig: styleConfig,
        browserId: browserId,
        hmItems: items,
        onClick: onClick
      }), children]
    })]
  });
};
var _default = DynamicMenuBrowser;
exports.default = _default;
//# sourceMappingURL=DynamicMenuBrowser.js.map