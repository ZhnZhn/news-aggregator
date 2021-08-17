"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _jsxRuntime = require("react/jsx-runtime");

var Browser = _Comp["default"].Browser,
    BrowserCaption = _Comp["default"].BrowserCaption,
    ModalSlider = _Comp["default"].ModalSlider,
    ScrollPane = _Comp["default"].ScrollPane,
    SpinnerLoading = _Comp["default"].SpinnerLoading,
    ItemStack = _Comp["default"].ItemStack;
var CL_MENU_MORE = "popup-menu items__menu-more";
var S = {
  BROWSER: {
    paddingRight: 0
  },
  SCROLL_PANE: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  SPINNER_LOADING: {
    position: 'relative',
    display: 'block',
    width: 32,
    height: 32,
    margin: '0 auto',
    marginTop: 32,
    textAlign: 'middle'
  },
  ROOT_MENU: {
    paddingLeft: 4
  }
};

var _fnNoop = function _fnNoop() {};
/*
const INITIAL_MENU_MODEL = {
  menu: [],
  items: {}
};
*/


var _fCrMenuPart = function _fCrMenuPart(menuPartProps, items) {
  return function (menuPart, index) {
    return /*#__PURE__*/(0, _react.createElement)(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, menuPartProps, {
      hmItems: items,
      key: index
    }));
  };
};

var DynamicMenuBrowser = function DynamicMenuBrowser(_ref) {
  var styleConfig = _ref.styleConfig,
      caption = _ref.caption,
      menuMore = _ref.menuMore,
      store = _ref.store,
      showAction = _ref.showAction,
      browserId = _ref.browserId,
      url = _ref.url,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _fnNoop : _ref$onError,
      children = _ref.children,
      itemData = _ref.itemData,
      onClick = _ref.onClick,
      onClickBadge = _ref.onClickBadge;

  var _useState = (0, _react.useState)(true),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _useState2 = (0, _react.useState)(false),
      isMore = _useState2[0],
      setIsMore = _useState2[1],
      _useState3 = (0, _react.useState)(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1],
      _useState4 = (0, _react.useState)(false),
      isLoadingFailed = _useState4[0],
      setIsLoadingFailed = _useState4[1],
      _useState5 = (0, _react.useState)(),
      menuModel = _useState5[0],
      setMenuModel = _useState5[1],
      _hHide = (0, _react.useCallback)(function () {
    return setIsShow(false);
  }, []),
      _hShowMore = (0, _react.useCallback)(function () {
    return setIsMore(true);
  }, []),
      _hCloseMore = (0, _react.useCallback)(function () {
    return setIsMore(false);
  }, []);

  (0, _useListen["default"])(store, function (actionType, id) {
    if (actionType === showAction && id === browserId) {
      setIsShow(true);
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps*/

  (0, _react.useEffect)(function () {
    fetch(url).then(function (response) {
      var status = response.status;

      if (status >= 200 && status < 400) {
        return response.json();
      } else {
        throw {
          status: status,
          url: url
        };
      }
    }).then(function (json) {
      setIsLoading(false);
      setMenuModel(json);
    })["catch"](function (err) {
      setIsLoading(false);
      setIsLoadingFailed(true);
      onError(err);
    });
  }, []); //url, onError

  /*eslint-enable react-hooks/exhaustive-deps*/

  var _ref2 = menuModel || {},
      menu = _ref2.menu,
      items = _ref2.items,
      _crItem = (0, _react.useMemo)(function () {
    return _fCrMenuPart({
      styleConfig: styleConfig,
      itemData: itemData,
      browserId: browserId,
      onClick: onClick,
      onClickBadge: onClickBadge
    }, items);
  }, [styleConfig, itemData, items]),
      _onMore = menuMore ? _hShowMore : void 0,
      TS = styleConfig;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Browser, {
    isShow: isShow,
    style: (0, _extends2["default"])({}, S.BROWSER, TS.BROWSER),
    children: [menuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.EL_BORDER,
      model: menuMore,
      onClose: _hCloseMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: caption,
      onMore: _onMore,
      onClose: _hHide
    }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(SpinnerLoading, {
      style: S.SPINNER_LOADING
    }), isLoadingFailed && /*#__PURE__*/(0, _jsxRuntime.jsx)(SpinnerLoading, {
      style: S.SPINNER_LOADING,
      isFailed: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S.SCROLL_PANE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ItemStack, {
        items: menu,
        crItem: _crItem
      }), children]
    })]
  });
};

var _default = DynamicMenuBrowser;
exports["default"] = _default;
//# sourceMappingURL=DynamicMenuBrowser.js.map