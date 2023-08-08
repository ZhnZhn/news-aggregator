"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _settingStore = _interopRequireDefault(require("../settingStore"));
var _Adapters = _interopRequireDefault(require("../../adapters/Adapters"));
var _Api = _interopRequireDefault(require("../../api/Api"));
const MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
const MSG_ERR_DF = 'Unknow news API provider';
const _isFn = fn => typeof fn === 'function';
const _crConf = (type, msgErr, apiKey) => ({
  apiKey: _isFn(apiKey) ? apiKey() : true,
  api: _Api.default[type],
  adapter: _Adapters.default[type],
  msgErr
});
const _crNewsConf = () => ({
  apiKey: _settingStore.default.getNewsKey(),
  adapter: _Adapters.default.News,
  msgErr: _ProviderNames.NEWS_API_LONG + " " + MSG_ERR_TAIL
});
const _crTheNewsConf = () => ({
  apiKey: _settingStore.default.getTheNewsKey(),
  adapter: _Adapters.default.TheNews,
  msgErr: _ProviderNames.THE_NEWS_API + " " + MSG_ERR_TAIL
});
const RouterApiConf = {
  getApiConf: id => {
    switch (id) {
      case 'N':
        return {
          ..._crNewsConf(),
          api: _Api.default.News
        };
      case 'NS':
        return {
          ..._crNewsConf(),
          api: _Api.default.NewsSearch
        };
      case 'NT':
        return {
          ..._crNewsConf(),
          api: _Api.default.NewsTop
        };
      case 'TNS':
        return {
          ..._crTheNewsConf(),
          api: _Api.default.TheNewsSearch
        };
      case 'TNT':
        return {
          ..._crTheNewsConf(),
          api: _Api.default.TheNewsTop
        };
      case 'W':
        return _crConf('Webz', _ProviderNames.WEBZ_IO + " API " + MSG_ERR_TAIL, _settingStore.default.getWebzKey);
      case 'RD':
        return _crConf('Reddit', _ProviderNames.REDDIT + " API " + MSG_ERR_TAIL);
      case 'DT':
        return _crConf('DevTo', _ProviderNames.DEV_TO + " API " + MSG_ERR_TAIL);
      case 'SO':
        return _crConf('StackOverflow', _ProviderNames.STACK_OVERFLOW + " API " + MSG_ERR_TAIL);
      case 'IEX':
        return _crConf('Iex', _ProviderNames.IEX_CLOUD + " API " + MSG_ERR_TAIL, _settingStore.default.getIexKey);
      case 'FMP':
        return _crConf('Fmp', _ProviderNames.FMP + " API " + MSG_ERR_TAIL, _settingStore.default.getFmpKey);
      case 'AV':
        return _crConf('Av', _ProviderNames.ALPHA_VANTAGE + " API " + MSG_ERR_TAIL, _settingStore.default.getAvKey);
      case 'CCN':
        return _crConf('CryptoCompare', _ProviderNames.CRYPTO_COMPARE + " News API " + MSG_ERR_TAIL);
      case 'CS':
        return _crConf('CoinStats', _ProviderNames.COIN_STATS + " API " + MSG_ERR_TAIL);
      case 'MS':
        return _crConf('Messari', _ProviderNames.MESSARI + " Blockchain News API " + MSG_ERR_TAIL);
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};
var _default = RouterApiConf;
exports.default = _default;
//# sourceMappingURL=RouterApiConf.js.map