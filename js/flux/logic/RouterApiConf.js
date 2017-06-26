'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('../stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _NewsApi = require('../../api/NewsApi');

var _NewsApi2 = _interopRequireDefault(_NewsApi);

var _NewsApiAdapter = require('../../adapters/NewsApiAdapter');

var _NewsApiAdapter2 = _interopRequireDefault(_NewsApiAdapter);

var _WebhoseApi = require('../../api/WebhoseApi');

var _WebhoseApi2 = _interopRequireDefault(_WebhoseApi);

var _WebhoseAdapter = require('../../adapters/WebhoseAdapter');

var _WebhoseAdapter2 = _interopRequireDefault(_WebhoseAdapter);

var _StackOverflowApi = require('../../api/StackOverflowApi');

var _StackOverflowApi2 = _interopRequireDefault(_StackOverflowApi);

var _StackOverflowAdapter = require('../../adapters/StackOverflowAdapter');

var _StackOverflowAdapter2 = _interopRequireDefault(_StackOverflowAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
var MSG_ERR_DF = 'Unknow news API provider';

var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'N':
        return {
          apiKey: _Store2.default.getNewsKey(),
          api: _NewsApi2.default,
          adapter: _NewsApiAdapter2.default,
          msgErr: 'NewsApi ' + MSG_ERR_TAIL
        };
      case 'W':
        return {
          apiKey: _Store2.default.getWebhoseKey(),
          api: _WebhoseApi2.default,
          adapter: _WebhoseAdapter2.default,
          msgErr: 'Webhose.io API ' + MSG_ERR_TAIL
        };
      case 'SO':
        return {
          apiKey: true,
          api: _StackOverflowApi2.default,
          adapter: _StackOverflowAdapter2.default,
          msgErr: 'StackOverflowApi API ' + MSG_ERR_TAIL
        };
      default:
        return {
          apiKey: undefined,
          msgErr: MSG_ERR_DF
        };
    }
  }
};

exports.default = RouterApiConf;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\logic\RouterApiConf.js.map