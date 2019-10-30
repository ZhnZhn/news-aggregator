'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('../stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _Adapters = require('../../adapters/Adapters');

var _Adapters2 = _interopRequireDefault(_Adapters);

var _Api = require('../../api/Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
var MSG_ERR_DF = 'Unknow news API provider';

var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'N':
        return {
          apiKey: _Store2.default.getNewsKey(),
          api: _Api2.default.News,
          adapter: _Adapters2.default.News,
          msgErr: 'NewsApi ' + MSG_ERR_TAIL
        };
      case 'NS':
        return {
          apiKey: _Store2.default.getNewsKey(),
          api: _Api2.default.NewsSearch,
          adapter: _Adapters2.default.News,
          msgErr: 'NewsApi ' + MSG_ERR_TAIL
        };
      case 'NT':
        return {
          apiKey: _Store2.default.getNewsKey(),
          api: _Api2.default.NewsTop,
          adapter: _Adapters2.default.News,
          msgErr: 'NewsApi ' + MSG_ERR_TAIL
        };
      case 'W':
        return {
          apiKey: _Store2.default.getWebhoseKey(),
          api: _Api2.default.Webhose,
          adapter: _Adapters2.default.Webhose,
          msgErr: 'Webhose.io API ' + MSG_ERR_TAIL
        };
      case 'SO':
        return {
          apiKey: true,
          api: _Api2.default.StackOverflow,
          adapter: _Adapters2.default.StackOverflow,
          msgErr: 'StackOverflowApi API ' + MSG_ERR_TAIL
        };
      case 'IEX':
        return {
          apiKey: _Store2.default.getIexKey(),
          api: _Api2.default.Iex,
          adapter: _Adapters2.default.Iex,
          msgErr: 'IEX Cloud API ' + MSG_ERR_TAIL
        };
      case 'CCN':
        return {
          apiKey: true,
          api: _Api2.default.CryptoCompare,
          adapter: _Adapters2.default.CryptoCompare,
          msgErr: 'CryptoCompare News API ' + MSG_ERR_TAIL
        };
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};

exports.default = RouterApiConf;
//# sourceMappingURL=RouterApiConf.js.map