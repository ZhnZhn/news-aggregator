'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IexApi = exports.StackOverflow = exports.WebhoseIo = exports.NewsApi = undefined;

var _withProps = require('../hoc/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Link = require('../zhn-atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

var _PoweredBy = require('./PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsApi = exports.NewsApi = (0, _withProps2.default)({
  title: "NewsApi.org",
  href: "https://newsapi.org",
  tabIndex: "-1"
})(_Link2.default);

var WebhoseIo = exports.WebhoseIo = (0, _withProps2.default)({
  title: "Webhose.io",
  href: "https://webhose.io",
  tabIndex: "-1"
})(_Link2.default);

var StackOverflow = exports.StackOverflow = (0, _withProps2.default)({
  title: "StackOverflow",
  href: "https://stackoverflow.com",
  tabIndex: "-1"
})(_Link2.default);

var IexApi = exports.IexApi = (0, _withProps2.default)({
  title: "IEX Cloud",
  href: "https://iexcloud.io",
  tabIndex: "-1"
})(_Link2.default);

var Link = {
  NewsApi: NewsApi,
  WebhoseIo: WebhoseIo,
  StackOverflow: StackOverflow,
  IexApi: IexApi,
  PoweredBy: _PoweredBy2.default
};

exports.default = Link;
//# sourceMappingURL=Links.js.map