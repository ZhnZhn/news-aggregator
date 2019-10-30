'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsApi = require('./NewsApi');

var _NewsApi2 = _interopRequireDefault(_NewsApi);

var _WebhoseApi = require('./WebhoseApi');

var _WebhoseApi2 = _interopRequireDefault(_WebhoseApi);

var _StackOverflowApi = require('./StackOverflowApi');

var _StackOverflowApi2 = _interopRequireDefault(_StackOverflowApi);

var _IexApi = require('./IexApi');

var _IexApi2 = _interopRequireDefault(_IexApi);

var _NewsSearchApi = require('./NewsSearchApi');

var _NewsSearchApi2 = _interopRequireDefault(_NewsSearchApi);

var _NewsApiTop = require('./NewsApiTop');

var _NewsApiTop2 = _interopRequireDefault(_NewsApiTop);

var _CryptoCompareApi = require('./CryptoCompareApi');

var _CryptoCompareApi2 = _interopRequireDefault(_CryptoCompareApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = {
  News: _NewsApi2.default, Webhose: _WebhoseApi2.default, StackOverflow: _StackOverflowApi2.default, Iex: _IexApi2.default,
  NewsSearch: _NewsSearchApi2.default, NewsTop: _NewsApiTop2.default,
  CryptoCompare: _CryptoCompareApi2.default
};

exports.default = Api;
//# sourceMappingURL=Api.js.map