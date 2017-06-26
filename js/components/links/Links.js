'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkStackOverflow = exports.LinkWebhoseIo = exports.LinkNewsApi = undefined;

var _withProps = require('../hoc/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Link = require('../zhn-atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkNewsApi = exports.LinkNewsApi = (0, _withProps2.default)({
  title: "NewsApi.org",
  href: "https://newsapi.org",
  tabIndex: "-1"
})(_Link2.default);

var LinkWebhoseIo = exports.LinkWebhoseIo = (0, _withProps2.default)({
  title: "Webhose.io",
  href: "https://webhose.io",
  tabIndex: "-1"
})(_Link2.default);

var LinkStackOverflow = exports.LinkStackOverflow = (0, _withProps2.default)({
  title: "StackOverflow",
  href: "https://stackoverflow.com",
  tabIndex: "-1"
})(_Link2.default);

var Link = {
  NewsApi: LinkNewsApi,
  WebhoseIo: LinkWebhoseIo,
  StackOverflow: LinkStackOverflow
};

exports.default = Link;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\links\Links.js.map