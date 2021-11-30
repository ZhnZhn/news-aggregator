"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

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

var _ffClick = function _ffClick(onClose) {
  return function (onClick) {
    return function () {
      onClick();
      onClose();
    };
  };
};

var HeaderBar = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(HeaderBar, _Component);

  function HeaderBar(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onRegQuery = function (node) {
      _this.btQueryNode = node;
    };

    _this._hToggleQuery = function () {
      _this.setState(function (prevState) {
        return {
          isQuery: !prevState.isQuery
        };
      });
    };

    _this._hCloseQuery = function (event) {
      _this.setState({
        isQuery: false
      });
    };

    var onWebz = props.onWebz,
        onWebzCountry = props.onWebzCountry,
        onStackTagged = props.onStackTagged,
        onStackSearch = props.onStackSearch,
        onCryptoCompare = props.onCryptoCompare,
        onCoinStats = props.onCoinStats,
        onMessari = props.onMessari,
        onIex = props.onIex,
        onFmp = props.onFmp,
        onNewsSearch = props.onNewsSearch,
        onNewsTop = props.onNewsTop,
        _fClick = _ffClick(_this._hCloseQuery);

    _this._hWebz = _fClick(onWebz);
    _this._hWebzCountry = _fClick(onWebzCountry);
    _this._hStackTagged = _fClick(onStackTagged);
    _this._hStackSearch = _fClick(onStackSearch);
    _this._hCryptoCompare = _fClick(onCryptoCompare);
    _this._hCoinStats = _fClick(onCoinStats);
    _this._hMessari = _fClick(onMessari);
    _this._hIex = _fClick(onIex);
    _this._hFmp = _fClick(onFmp);
    _this._hNewsApi = _fClick(onNewsSearch);
    _this._hNewsTop = _fClick(onNewsTop);
    _this.state = {
      isQuery: false
    };
    return _this;
  }

  var _proto = HeaderBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        store = _this$props.store,
        LOADING_ACTIONS = _this$props.LOADING_ACTIONS,
        theme = _this$props.theme,
        onNewsSources = _this$props.onNewsSources,
        onSettings = _this$props.onSettings,
        onAbout = _this$props.onAbout,
        TS = theme.createStyle(_HeaderBar["default"]),
        isQuery = this.state.isQuery;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_HEADER,
      style: TS.HEADER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelQuery["default"], {
        paneStyle: TS.PANE,
        className: CL_PANEL_BROWSER,
        isShow: isQuery,
        onClose: this._hToggleQuery,
        onWebz: this._hWebz,
        onWebzCountry: this._hWebzCountry,
        onStackTagged: this._hStackTagged,
        onStackSearch: this._hStackSearch,
        onCryptoCompare: this._hCryptoCompare,
        onCoinStats: this._hCoinStats,
        onMessari: this._hMessari,
        onIex: this._hIex,
        onFmp: this._hFmp,
        onNewsApi: this._hNewsApi,
        onNewsTop: this._hNewsTop
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress["default"], {
        store: store,
        ACTIONS: LOADING_ACTIONS
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
          onClick: this._hToggleQuery,
          onReg: this._onRegQuery,
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

  return HeaderBar;
}(_react.Component);

var _default = (0, _withTheme["default"])(HeaderBar);

exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map