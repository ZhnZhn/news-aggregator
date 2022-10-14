"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));

var _DP = require("../DP");

var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _PanelQuery = _interopRequireDefault(require("./PanelQuery"));

var _jsxRuntime = require("preact/jsx-runtime");

var TITLE = "News Aggregator v0.4.0",
    CL_HEADER = "header",
    CL_PANEL_BROWSER = CL_HEADER + "__panel-browser",
    CL_ICON_APP = CL_HEADER + "__icon-app",
    CL_LABEL_APP = CL_HEADER + "__label-app",
    CL_BROWSER_BTS = CL_HEADER + "__browser-bts",
    CL_ARROW_DOWN = "arrow-down",
    CL_BTS = CL_HEADER + "__bts",
    CL_BT_ABOUT = CL_HEADER + "__bt-about",
    S_SVG_ICON = {
  position: 'relative',
  top: -1,
  verticalAlign: 'middle',
  margin: '0 8px'
};
/*eslint-disable react-hooks/exhaustive-deps */

var _useClickItem = function _useClickItem(onClick, onClose) {
  return (0, _uiApi.useCallback)(function () {
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

  var _useState = (0, _uiApi.useState)(false),
      isQuery = _useState[0],
      setIsQuery = _useState[1],
      _hCloseQuery = (0, _uiApi.useCallback)(function () {
    return setIsQuery(false);
  }, []),
      _hToggleQuery = (0, _uiApi.useCallback)(function () {
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

  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: TS.HEADER,
    children: [(0, _jsxRuntime.jsx)(_PanelQuery["default"], {
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
    }), (0, _jsxRuntime.jsx)(_LoadingProgress["default"], {
      store: store
    }), (0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      ariaLabel: TITLE,
      dataPos: _DP.DP_BOTTOM_LEFT,
      className: CL_ICON_APP
    }), (0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: CL_LABEL_APP,
      caption: TITLE
    }), (0, _jsxRuntime.jsxs)("span", {
      className: CL_BROWSER_BTS,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        ariaLabel: "News Sources Browser [n]",
        dataPos: _DP.DP_BOTTOM_LEFT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "News",
        accessKey: "n",
        onClick: onNewsSources
      }), (0, _jsxRuntime.jsx)(_Comp["default"].ModalButton, {
        ariaLabel: "Panel Query Sources [q]",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "Query",
        accessKey: "q",
        onClick: _hToggleQuery,
        children: (0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })]
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        ariaLabel: "About News Aggregator [a]",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        className: CL_BT_ABOUT,
        clDiv: TS.BT.CL_FLAT_DIV,
        accessKey: "a",
        onClick: onAbout,
        children: (0, _jsxRuntime.jsx)(_Comp["default"].SvgInfo, {
          style: S_SVG_ICON
        })
      }), (0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
        ariaLabel: "Settings Dialog [s]",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        clDiv: TS.BT.CL_FLAT_DIV,
        accessKey: "s",
        onClick: onSettings,
        children: (0, _jsxRuntime.jsx)(_Comp["default"].SvgSettings, {
          style: S_SVG_ICON
        })
      })]
    })]
  });
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map