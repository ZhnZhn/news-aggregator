'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconGitHub = require('./IconGitHub');

var _IconGitHub2 = _interopRequireDefault(_IconGitHub);

var _IconReact = require('./IconReact');

var _IconReact2 = _interopRequireDefault(_IconReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    textAlign: 'center',
    paddingTop: 20
  }
};

var IconLogoBar = function IconLogoBar() {
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(_IconGitHub2.default, {
      className: 'icon__github',
      title: 'GitHub: Repo News Aggregator',
      uri: 'https://github.com/zhnzhn/news-aggregator'
    }),
    _react2.default.createElement(_IconReact2.default, null)
  );
};

exports.default = IconLogoBar;
//# sourceMappingURL=IconLogoBar.js.map