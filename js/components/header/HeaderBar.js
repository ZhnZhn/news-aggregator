"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useHotKey = _interopRequireDefault(require("../hotkeys/useHotKey"));
var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));
var _hotkeys = require("../hotkeys/hotkeys");
var _DP = require("../DP");
var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _PanelQuery = _interopRequireDefault(require("./PanelQuery"));
var _crMenuQuery = _interopRequireDefault(require("./crMenuQuery"));
var _jsxRuntime = require("preact/jsx-runtime");
const TITLE = "News Aggregator v0.4.0",
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
const HeaderBar = _ref => {
  let {
    onNewsSources,
    onSettings,
    onAbout
  } = _ref;
  const _refFocusItem = (0, _uiApi.useRef)(),
    [isQuery, setIsQuery] = (0, _uiApi.useState)(false),
    _hCloseQuery = (0, _uiApi.useCallback)(evt => {
      const _menuItemElement = evt && evt.target,
        _focusElement = _menuItemElement && _menuItemElement.role === 'menuitem' ? _menuItemElement : null;
      _refFocusItem.current = _focusElement;
      setIsQuery(false);
    }, []),
    _hToggleQuery = (0, _uiApi.useCallback)(() => setIsQuery(is => !is), []),
    TS = (0, _useTheme.default)(_HeaderBar.default),
    _menuQuery = (0, _crMenuQuery.default)(_hCloseQuery);
  (0, _useHotKey.default)(_hotkeys.HK_QUERY_SOURCES, _hToggleQuery);
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: TS.HEADER,
    children: [(0, _jsxRuntime.jsx)(_PanelQuery.default, {
      menuModel: _menuQuery,
      refFocusItem: _refFocusItem,
      paneStyle: TS.PANE,
      className: CL_PANEL_BROWSER,
      isShow: isQuery,
      onClose: _hCloseQuery
    }), (0, _jsxRuntime.jsx)(_LoadingProgress.default, {}), (0, _jsxRuntime.jsx)(_IconAppLogo.default, {
      ariaLabel: TITLE,
      dataPos: _DP.DP_BOTTOM_LEFT,
      className: CL_ICON_APP
    }), (0, _jsxRuntime.jsx)(_AppLabel.default, {
      className: CL_LABEL_APP,
      caption: TITLE
    }), (0, _jsxRuntime.jsxs)("span", {
      className: CL_BROWSER_BTS,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
        ariaLabel: "News Sources Browser",
        dataPos: _DP.DP_BOTTOM_LEFT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "News",
        hotKey: _hotkeys.HK_NEWS_BROWSER,
        onClick: onNewsSources
      }), (0, _jsxRuntime.jsx)(_Comp.default.ModalButton, {
        ariaLabel: "Query Sources Menu",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        clDiv: TS.BT.CL_FLAT_DIV,
        caption: "Query",
        hotKey: _hotkeys.HK_QUERY_SOURCES,
        onClick: _hToggleQuery,
        children: (0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })]
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
        ariaLabel: "About News Aggregator",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        className: CL_BT_ABOUT,
        clDiv: TS.BT.CL_FLAT_DIV,
        hotKey: _hotkeys.HK_ABOUT,
        onClick: onAbout,
        children: (0, _jsxRuntime.jsx)(_Comp.default.SvgInfo, {
          style: S_SVG_ICON
        })
      }), (0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
        ariaLabel: "Settings Dialog",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        clDiv: TS.BT.CL_FLAT_DIV,
        hotKey: _hotkeys.HK_SETTINGS,
        onClick: onSettings,
        children: (0, _jsxRuntime.jsx)(_Comp.default.SvgSettings, {
          style: S_SVG_ICON
        })
      })]
    })]
  });
};
var _default = HeaderBar;
exports.default = _default;
//# sourceMappingURL=HeaderBar.js.map