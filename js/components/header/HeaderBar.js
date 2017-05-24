'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = "News Aggregator v0.1.0";

var HeaderBar = function HeaderBar(_ref) {
  var store = _ref.store,
      LOADING_ACTIONS = _ref.LOADING_ACTIONS,
      onNewsSources = _ref.onNewsSources,
      onSettings = _ref.onSettings,
      onAbout = _ref.onAbout;
  return _react2.default.createElement(
    'div',
    { className: 'header' },
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
      })
    ),
    _react2.default.createElement(_GitHubLink2.default, {
      className: 'header__github-link',
      title: 'GitHub Repository',
      href: 'https://github.com/news-aggregator'
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
};

exports.default = HeaderBar;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\HeaderBar.js.map