"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Style"));

var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _PanelQuery = _interopRequireDefault(require("./PanelQuery"));

var TITLE = "News Aggregator v0.4.0";
var CL = {
  HEADER: "header",
  PANEL_BROWSER: "header__panel-browser",
  ICON_APP: "header__icon-app",
  LABEL_APP: "header__label-app",
  BROWSER_BTS: "header__browser-bts",
  ARROW_DOWN: "arrow-down",
  BTS: "header__bts",
  BT_ABOUT: "header__bt-about"
};
var STYLE = {
  SVG_ICON: {
    position: 'relative',
    top: -1,
    verticalAlign: 'middle',
    marginLeft: 8,
    marginRight: 8
  }
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

    var onQuery = props.onQuery,
        onWebhoseBrodcast = props.onWebhoseBrodcast,
        onStackTagged = props.onStackTagged,
        onStackSearch = props.onStackSearch,
        onCryptoComapre = props.onCryptoComapre,
        onMessari = props.onMessari,
        onIex = props.onIex,
        onFmp = props.onFmp,
        onNewsSearch = props.onNewsSearch,
        onNewsTop = props.onNewsTop,
        _fClick = _ffClick(_this._hCloseQuery);

    _this._hWebhose = _fClick(onQuery);
    _this._hWebhoseBrodcast = _fClick(onWebhoseBrodcast);
    _this._hStackTagged = _fClick(onStackTagged);
    _this._hStackSearch = _fClick(onStackSearch);
    _this._hCryptoCompare = _fClick(onCryptoComapre);
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
        S = theme.createStyle(_HeaderBar["default"]),
        isQuery = this.state.isQuery;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.HEADER,
      style: S.HEADER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelQuery["default"], {
        paneStyle: S.PANE,
        className: CL.PANEL_BROWSER,
        isShow: isQuery,
        onClose: this._hToggleQuery,
        onWebhose: this._hWebhose,
        onWebhoseBrodcast: this._hWebhoseBrodcast,
        onStackTagged: this._hStackTagged,
        onStackSearch: this._hStackSearch,
        onCryptoComapre: this._hCryptoCompare,
        onMessari: this._hMessari,
        onIex: this._hIex,
        onFmp: this._hFmp,
        onNewsApi: this._hNewsApi,
        onNewsTop: this._hNewsTop
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress["default"], {
        store: store,
        ACTIONS: LOADING_ACTIONS
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
        className: CL.ICON_APP,
        title: TITLE
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel["default"], {
        className: CL.LABEL_APP,
        caption: TITLE
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: CL.BROWSER_BTS,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
          rootStyle: S.BT.FLAT_ROOT,
          clDiv: S.BT.CL_FLAT_DIV,
          caption: "News",
          title: "Open News Sources Browser",
          accessKey: "n",
          onClick: onNewsSources
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ModalButton, {
          rootStyle: S.BT.FLAT_ROOT,
          clDiv: S.BT.CL_FLAT_DIV,
          caption: "Query",
          title: "Panel Query Source",
          accessKey: "q",
          onClick: this._hToggleQuery,
          onReg: this._onRegQuery,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: CL.ARROW_DOWN
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL.BTS,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
          rootStyle: S.BT.FLAT_ROOT,
          clDiv: S.BT.CL_FLAT_DIV,
          title: "Open Settings Dialog",
          accessKey: "s",
          onClick: onSettings,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SvgSettings, {
            style: STYLE.SVG_ICON
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FlatButton, {
          className: CL.BT_ABOUT,
          rootStyle: S.BT.FLAT_ROOT,
          clDiv: S.BT.CL_FLAT_DIV,
          title: "About News Aggregator",
          accessKey: "a",
          onClick: onAbout,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SvgInfo, {
            style: STYLE.SVG_ICON
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