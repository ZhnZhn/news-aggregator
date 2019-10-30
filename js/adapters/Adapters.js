'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsApiAdapter = require('./NewsApiAdapter');

var _NewsApiAdapter2 = _interopRequireDefault(_NewsApiAdapter);

var _WebhoseAdapter = require('./WebhoseAdapter');

var _WebhoseAdapter2 = _interopRequireDefault(_WebhoseAdapter);

var _StackOverflowAdapter = require('./StackOverflowAdapter');

var _StackOverflowAdapter2 = _interopRequireDefault(_StackOverflowAdapter);

var _IexAdapter = require('./IexAdapter');

var _IexAdapter2 = _interopRequireDefault(_IexAdapter);

var _CryptoCompareAdapter = require('./CryptoCompareAdapter');

var _CryptoCompareAdapter2 = _interopRequireDefault(_CryptoCompareAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Adapters = {
  News: _NewsApiAdapter2.default, Webhose: _WebhoseAdapter2.default, StackOverflow: _StackOverflowAdapter2.default, Iex: _IexAdapter2.default,
  CryptoCompare: _CryptoCompareAdapter2.default
};

exports.default = Adapters;
//# sourceMappingURL=Adapters.js.map