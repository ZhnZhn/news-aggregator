"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));

var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _PanelQuery = _interopRequireDefault(require("./PanelQuery"));

var _jsxRuntime = require("react/jsx-runtime");

var TITLE = "News Aggregator v0.4.0",
    CL_HEADER = "header",
    CL_PANEL_BROWSER = "header__panel-browser",
    CL_ICON_APP = "header__icon-app",
    CL_LABEL_APP = "header__label-app",
    CL_BROWSER_BTS = "header__browser-bts",
    CL_ARROW_DOWN = "arrow-down",
    CL_BTS = "header__bts",
    CL_BT_ABOUT = "header__bt-about",
    S_SVG_ICON = {
  position: 'relative',
  top: -1,
  verticalAlign: 'middle',
  margin: '0 8px'
};
/*eslint-disable react-hooks/exhaustive-deps */

var _useClickItem = function _useClickItem(onClick, onClose) {
  return (0, _react.useCallback)(function () {
    onClick();
    onClose();
  }, []);
}; // onClick, onClose

/*eslint-enable react-hooks/exhaustive-deps */


var HeaderBar = function HeaderBar(_ref) {
  var store = _ref.store,
      onNewsSources = _ref.onNewsSources,
      onSettings = _ref.onSettings,
      onAbout = _ref.onAbout,
      onWebz = _ref.onWebz,
      onWebzCountry = _ref.onWebzCountry,
      onStackTagged = _ref.onStackTagged,
      onStackSearch = _ref.onStackSearch,
      onCryptoCompare = _ref.onCryptoCompare,
      onCoinStats = _ref.onCoinStats,
      onMessari = _ref.onMessari,
      onIex = _ref.onIex,
      onFmp = _ref.onFmp,
      onNewsSearch = _ref.onNewsSearch,
      onNewsTop = _ref.onNewsTop;

  var _useState = (0, _react.useState)(false),
      isQuery = _useState[0],
      setIsQuery = _useState[1],
      _hCloseQuery = (0, _react.useCallback)(function () {
    return setIsQuery(false);
  }, []),
      _hToggleQuery = (0, _react.useCallback)(function () {
    return setIsQuery(function (is) {
      return !is;
    });
  }, []),
      _hWebz = _useClickItem(onWebz, _hCloseQuery),
      _hWebzCountry = _useClickItem(onWebzCountry, _hCloseQuery),
      _hStackTagged = _useClickItem(onStackTagged, _hCloseQuery),
      _hStackSearch = _useClickItem(onStackSearch, _hCloseQuery),
      _hCryptoCompare = _useClickItem(onCryptoCompare, _hCloseQuery),
      _hCoinStats = _useClickItem(onCoinStats, _hCloseQuery),
      _hMessari = _useClickItem(onMessari, _hCloseQuery),
      _hIex = _useClickItem(onIex, _hCloseQuery),
      _hFmp = _useClickItem(onFmp, _hCloseQuery),
      _hNewsApi = _useClickItem(onNewsSearch, _hCloseQuery),
      _hNewsTop = _useClickItem(onNewsTop, _hCloseQuery),
      TS = (0, _useTheme["default"])(_HeaderBar["default"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: TS.HEADER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelQuery["default"], {
      paneStyle: TS.PANE,
      className: CL_PANEL_BROWSER,
      isShow: isQuery,
      onClose: _hToggleQuery,
      onWebz: _hWebz,
      onWebzCountry: _hWebzCountry,
      onStackTagged: _hStackTagged,
      onStackSearch: _hStackSearch,
      onCryptoCompare: _hCryptoCompare,
      onCoinStats: _hCoinStats,
      onMessari: _hMessari,
      onIex: _hIex,
      onFmp: _hFmp,
      onNewsApi: _hNewsApi,
      onNewsTop: _hNewsTop
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress["default"], {
      store: store
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      className: CL_ICON_APP,
      title: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: CL_LABEL_APP,
      caption: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: CL_BROWSER_BTS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        style: TS.BT.FLAT_ROOT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "News",
        title: "Open News Sources Browser",
        accessKey: "n",
        onClick: onNewsSources
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalButton, {
        style: TS.BT.FLAT_ROOT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "Query",
        title: "Panel Query Source",
        accessKey: "q",
        onClick: _hToggleQuery,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        className: CL_BT_ABOUT,
        style: TS.BT.FLAT_ROOT,
        clDiv: TS.BT.CL_FLAT_DIV,
        title: "About News Aggregator",
        accessKey: "a",
        onClick: onAbout,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgInfo, {
          style: S_SVG_ICON
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        style: TS.BT.FLAT_ROOT,
        clDiv: TS.BT.CL_FLAT_DIV,
        title: "Open Settings Dialog",
        accessKey: "s",
        onClick: onSettings,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgSettings, {
          style: S_SVG_ICON
        })
      })]
    })]
  });
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map