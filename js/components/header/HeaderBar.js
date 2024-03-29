"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useHotKey = _interopRequireDefault(require("../hotkeys/useHotKey"));
var _hotkeys = require("../hotkeys/hotkeys");
var _DP = require("../DP");
var _tokens = require("../styles/tokens");
var _SvgInfo = _interopRequireDefault(require("../zhn/svg/SvgInfo"));
var _SvgSettings = _interopRequireDefault(require("../zhn/svg/SvgSettings"));
var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _PanelQuery = _interopRequireDefault(require("./PanelQuery"));
var _crMenuQuery = _interopRequireDefault(require("./crMenuQuery"));
var _HotBar = _interopRequireDefault(require("./HotBar"));
var _jsxRuntime = require("preact/jsx-runtime");
const HEADER = "header",
  CL_HEADER = (0, _crStyle.crContainerBgCn)(HEADER),
  CL_PANEL_BROWSER = (0, _crStyle.crPanelShadowCn)((0, _crStyle.crContainerBgCn)(HEADER + "__panel-browser")),
  CL_ICON_APP = HEADER + "__icon-app",
  CL_LABEL_APP = HEADER + "__label-app",
  CL_BROWSER_BTS = HEADER + "__browser-bts",
  CL_ARROW_DOWN = "arrow-down",
  CL_BTS = HEADER + "__bts",
  CL_BT_ABOUT = HEADER + "__bt-about",
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
    [isQuery, toggleIsQuery] = (0, _useToggle.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCloseQuery = (0, _uiApi.useCallback)(evt => {
      const _menuItemElement = evt && evt.target;
      (0, _uiApi.setRefValue)(_refFocusItem, _menuItemElement && _menuItemElement.role === 'menuitem' ? _menuItemElement : null);
      toggleIsQuery(false);
    }, [])
    // toggleIsQuery
    /*eslint-enable react-hooks/exhaustive-deps */,
    _menuQuery = (0, _crMenuQuery.default)(_tokens.APP_TITLE, onNewsSources, onAbout, _hCloseQuery);
  (0, _useHotKey.default)(_hotkeys.HK_QUERY_SOURCES, toggleIsQuery);
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    children: [(0, _jsxRuntime.jsx)(_PanelQuery.default, {
      isShow: isQuery,
      menuModel: _menuQuery,
      refFocusItem: _refFocusItem,
      className: CL_PANEL_BROWSER,
      onClose: _hCloseQuery
    }), (0, _jsxRuntime.jsx)(_LoadingProgress.default, {}), (0, _jsxRuntime.jsx)(_IconAppLogo.default, {
      ariaLabel: _tokens.APP_TITLE,
      dataPos: _DP.DP_BOTTOM_LEFT,
      className: CL_ICON_APP
    }), (0, _jsxRuntime.jsx)(_AppLabel.default, {
      className: CL_LABEL_APP,
      caption: _tokens.APP_TITLE
    }), (0, _jsxRuntime.jsx)("span", {
      className: CL_BROWSER_BTS,
      children: (0, _jsxRuntime.jsx)(_Comp.default.ModalButton, {
        ariaLabel: "Query Sources Menu",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        caption: "Query",
        hotKey: _hotkeys.HK_QUERY_SOURCES,
        onClick: toggleIsQuery,
        children: (0, _jsxRuntime.jsx)("span", {
          className: CL_ARROW_DOWN
        })
      })
    }), (0, _jsxRuntime.jsx)(_HotBar.default, {}), (0, _jsxRuntime.jsxs)("div", {
      className: CL_BTS,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
        ariaLabel: "About News Aggregator",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        className: CL_BT_ABOUT,
        hotKey: _hotkeys.HK_ABOUT,
        onClick: onAbout,
        children: (0, _jsxRuntime.jsx)(_SvgInfo.default, {
          style: S_SVG_ICON
        })
      }), (0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
        ariaLabel: "Settings Dialog",
        dataPos: _DP.DP_BOTTOM_RIGHT,
        hotKey: _hotkeys.HK_SETTINGS,
        onClick: onSettings,
        children: (0, _jsxRuntime.jsx)(_SvgSettings.default, {
          style: S_SVG_ICON
        })
      })]
    })]
  });
};
var _default = exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map