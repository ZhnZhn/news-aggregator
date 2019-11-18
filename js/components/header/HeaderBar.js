'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _HeaderBar = require('./HeaderBar.Style');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _LoadingProgress = require('./LoadingProgress');

var _LoadingProgress2 = _interopRequireDefault(_LoadingProgress);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _PanelQuery = require('./PanelQuery');

var _PanelQuery2 = _interopRequireDefault(_PanelQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var HeaderBar = function (_Component) {
  (0, _inherits3.default)(HeaderBar, _Component);

  function HeaderBar(props) {
    (0, _classCallCheck3.default)(this, HeaderBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).call(this, props));

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
      _this.setState({ isQuery: false });
    };

    var onQuery = props.onQuery,
        onWebhoseBrodcast = props.onWebhoseBrodcast,
        onStackTagged = props.onStackTagged,
        onStackSearch = props.onStackSearch,
        onCryptoComapre = props.onCryptoComapre,
        onIex = props.onIex,
        onNewsSearch = props.onNewsSearch,
        onNewsTop = props.onNewsTop,
        _fClick = _ffClick(_this._hCloseQuery);

    _this._hWebhose = _fClick(onQuery);
    _this._hWebhoseBrodcast = _fClick(onWebhoseBrodcast);
    _this._hStackTagged = _fClick(onStackTagged);
    _this._hStackSearch = _fClick(onStackSearch);
    _this._hCryptoCompare = _fClick(onCryptoComapre);
    _this._hIex = _fClick(onIex);
    _this._hNewsApi = _fClick(onNewsSearch);
    _this._hNewsTop = _fClick(onNewsTop);

    _this.state = {
      isQuery: false
    };
    return _this;
  }

  (0, _createClass3.default)(HeaderBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          LOADING_ACTIONS = _props.LOADING_ACTIONS,
          theme = _props.theme,
          onNewsSources = _props.onNewsSources,
          onSettings = _props.onSettings,
          onAbout = _props.onAbout,
          S = theme.createStyle(_HeaderBar2.default),
          isQuery = this.state.isQuery;

      return _react2.default.createElement(
        'div',
        { className: CL.HEADER, style: S.HEADER },
        _react2.default.createElement(_PanelQuery2.default, {
          paneStyle: S.PANE,
          className: CL.PANEL_BROWSER,
          isShow: isQuery,
          onClose: this._hToggleQuery,
          onWebhose: this._hWebhose,
          onWebhoseBrodcast: this._hWebhoseBrodcast,
          onStackTagged: this._hStackTagged,
          onStackSearch: this._hStackSearch,
          onCryptoComapre: this._hCryptoCompare,
          onIex: this._hIex,
          onNewsApi: this._hNewsApi,
          onNewsTop: this._hNewsTop
        }),
        _react2.default.createElement(_LoadingProgress2.default, {
          store: store,
          ACTIONS: LOADING_ACTIONS
        }),
        _react2.default.createElement(_IconAppLogo2.default, {
          className: CL.ICON_APP,
          title: TITLE
        }),
        _react2.default.createElement(_AppLabel2.default, {
          className: CL.LABEL_APP,
          caption: TITLE
        }),
        _react2.default.createElement(
          'span',
          { className: CL.BROWSER_BTS },
          _react2.default.createElement(_Atoms2.default.FlatButton, {
            rootStyle: S.BT.FLAT_ROOT,
            clDiv: S.BT.CL_FLAT_DIV,
            caption: 'News',
            title: 'Open News Sources Browser',
            accessKey: 'n',
            onClick: onNewsSources
          }),
          _react2.default.createElement(
            _Atoms2.default.ModalButton,
            {
              rootStyle: S.BT.FLAT_ROOT,
              clDiv: S.BT.CL_FLAT_DIV,
              caption: 'Query',
              title: 'Panel Query Source',
              accessKey: 'q',
              onClick: this._hToggleQuery,
              onReg: this._onRegQuery
            },
            _react2.default.createElement('span', { className: CL.ARROW_DOWN })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: CL.BTS },
          _react2.default.createElement(
            _Atoms2.default.FlatButton,
            {
              rootStyle: S.BT.FLAT_ROOT,
              clDiv: S.BT.CL_FLAT_DIV,
              title: 'Open Settings Dialog',
              accessKey: 's',
              onClick: onSettings
            },
            _react2.default.createElement(_Atoms2.default.SvgSettings, { style: STYLE.SVG_ICON })
          ),
          _react2.default.createElement(
            _Atoms2.default.FlatButton,
            {
              className: CL.BT_ABOUT,
              rootStyle: S.BT.FLAT_ROOT,
              clDiv: S.BT.CL_FLAT_DIV,
              title: 'About News Aggregator',
              accessKey: 'a',
              onClick: onAbout
            },
            _react2.default.createElement(_Atoms2.default.SvgInfo, { style: STYLE.SVG_ICON })
          )
        )
      );
    }
  }]);
  return HeaderBar;
}(_react.Component);

exports.default = (0, _withTheme2.default)(HeaderBar);
//# sourceMappingURL=HeaderBar.js.map