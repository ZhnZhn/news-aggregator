"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Store = _interopRequireDefault(require("../stores/Store"));

var _Adapters = _interopRequireDefault(require("../../adapters/Adapters"));

var _Api = _interopRequireDefault(require("../../api/Api"));

var MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
var MSG_ERR_DF = 'Unknow news API provider';
var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'N':
        return {
          apiKey: _Store["default"].getNewsKey(),
          api: _Api["default"].News,
          adapter: _Adapters["default"].News,
          msgErr: "NewsApi " + MSG_ERR_TAIL
        };

      case 'NS':
        return {
          apiKey: _Store["default"].getNewsKey(),
          api: _Api["default"].NewsSearch,
          adapter: _Adapters["default"].News,
          msgErr: "NewsApi " + MSG_ERR_TAIL
        };

      case 'NT':
        return {
          apiKey: _Store["default"].getNewsKey(),
          api: _Api["default"].NewsTop,
          adapter: _Adapters["default"].News,
          msgErr: "NewsApi " + MSG_ERR_TAIL
        };

      case 'W':
        return {
          apiKey: _Store["default"].getWebhoseKey(),
          api: _Api["default"].Webhose,
          adapter: _Adapters["default"].Webhose,
          msgErr: "Webhose.io API " + MSG_ERR_TAIL
        };

      case 'SO':
        return {
          apiKey: true,
          api: _Api["default"].StackOverflow,
          adapter: _Adapters["default"].StackOverflow,
          msgErr: "StackOverflowApi API " + MSG_ERR_TAIL
        };

      case 'IEX':
        return {
          apiKey: _Store["default"].getIexKey(),
          api: _Api["default"].Iex,
          adapter: _Adapters["default"].Iex,
          msgErr: "IEX Cloud API " + MSG_ERR_TAIL
        };

      case 'CCN':
        return {
          apiKey: true,
          api: _Api["default"].CryptoCompare,
          adapter: _Adapters["default"].CryptoCompare,
          msgErr: "CryptoCompare News API " + MSG_ERR_TAIL
        };

      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};
var _default = RouterApiConf;
exports["default"] = _default;
//# sourceMappingURL=RouterApiConf.js.map