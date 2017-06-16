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

var _LoadingProgress = require('./LoadingProgress');

var _LoadingProgress2 = _interopRequireDefault(_LoadingProgress);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _GitHubLink = require('./GitHubLink');

var _GitHubLink2 = _interopRequireDefault(_GitHubLink);

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _ModalButton = require('../zhn-atoms/ModalButton');

var _ModalButton2 = _interopRequireDefault(_ModalButton);

var _PanelQuery = require('./PanelQuery');

var _PanelQuery2 = _interopRequireDefault(_PanelQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = "News Aggregator v0.3.0";

var HeaderBar = function (_Component) {
  (0, _inherits3.default)(HeaderBar, _Component);

  function HeaderBar(props) {
    (0, _classCallCheck3.default)(this, HeaderBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).call(this));

    _this._onRegQuery = function (node) {
      _this.btQueryNode = node;
    };

    _this._handleClickQuery = function () {
      _this.setState({ isQuery: !_this.state.isQuery });
    };

    _this._handleCloseQuery = function (event) {
      if (!_this.btQueryNode.contains(event.target)) {
        _this.setState({ isQuery: false });
      }
    };

    _this._handleClickSource = function (id) {
      switch (id) {
        case 'Webhose':
          _this.props.onQuery();
          break;
        case 'StackTagged':
          _this.props.onStackTagged();
          break;
        default:
      }
      _this._handleClickQuery();
    };

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
          onNewsSources = _props.onNewsSources,
          onSettings = _props.onSettings,
          onAbout = _props.onAbout,
          isQuery = this.state.isQuery;

      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(_PanelQuery2.default, {
          className: 'header__panel-browser',
          isShow: isQuery,
          onClose: this._handleCloseQuery,
          onWebhose: this._handleClickSource.bind(null, 'Webhose'),
          onStackTagged: this._handleClickSource.bind(null, 'StackTagged')
        }),
        _react2.default.createElement(_LoadingProgress2.default, {
          store: store,
          ACTIONS: LOADING_ACTIONS
        }),
        _react2.default.createElement(_IconAppLogo2.default, {
          className: 'header__icon-app',
          title: TITLE
        }),
        _react2.default.createElement(_AppLabel2.default, {
          className: 'header__label-app',
          caption: TITLE
        }),
        _react2.default.createElement(
          'span',
          { className: 'header__browser-bts' },
          _react2.default.createElement(_ActionButton2.default, {
            type: 'TypeA',
            caption: 'News',
            title: 'Open News Sources Browser',
            onClick: onNewsSources
          }),
          _react2.default.createElement(
            _ModalButton2.default,
            {
              type: 'TypeA',
              caption: 'Query',
              title: 'Panel Query Source'
              //onClick={onQuery}
              , onClick: this._handleClickQuery,
              onReg: this._onRegQuery
            },
            _react2.default.createElement('span', { className: 'arrow-down' })
          )
        ),
        _react2.default.createElement(_GitHubLink2.default, {
          className: 'header__github-link',
          title: 'GitHub Repository',
          href: 'https://github.com/zhnzhn/news-aggregator'
        }),
        _react2.default.createElement(
          'div',
          { className: 'header__bts' },
          _react2.default.createElement(_ActionButton2.default, {
            type: 'TypeA',
            caption: 'Settings',
            title: 'Open Settings Dialog',
            onClick: onSettings
          }),
          _react2.default.createElement(_ActionButton2.default, {
            type: 'TypeA',
            caption: 'About',
            title: 'About',
            onClick: onAbout
          })
        )
      );
    }
  }]);
  return HeaderBar;
}(_react.Component);

exports.default = HeaderBar;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\HeaderBar.js.map