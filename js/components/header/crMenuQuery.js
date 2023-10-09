"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _NewsQuery = _interopRequireDefault(require("../../conf/NewsQuery"));
var _compStore = require("../../flux/compStore");
var _uiApi = require("../uiApi");
const _fOnClick = (onClose, id) => evt => {
  (0, _compStore.showDialog)(id);
  onClose(evt);
};
let _menuQuery;
const crMenuQuery = (onNewsSources, onClose) => {
  if (!_menuQuery) {
    const _crOnClick = (0, _uiApi.bindTo)(_fOnClick, onClose);
    const _fOnMenuItem = onClick => () => {
      onClick();
      onClose();
    };
    _menuQuery = [{
      t: 'Blockchain',
      items: [[_ProviderNames.CRYPTO_COMPARE, _crOnClick(_NewsQuery.default.CRYPTO_COMPARE)], [_ProviderNames.COIN_STATS, _crOnClick(_NewsQuery.default.COIN_STATS)], [_ProviderNames.MESSARI, _crOnClick(_NewsQuery.default.MESSARI)]]
    }, {
      t: "Stock Market",
      items: [[_ProviderNames.ALPHA_VANTAGE + ": Sentiment", _crOnClick(_NewsQuery.default.AV)], [_ProviderNames.IEX_CLOUD, _crOnClick(_NewsQuery.default.IEX)], [_ProviderNames.FMP_LONG, _crOnClick(_NewsQuery.default.FMP)]]
    }, {
      t: "General News",
      items: [[_ProviderNames.NEWS_API_LONG + ": Browser", _fOnMenuItem(onNewsSources)], [_ProviderNames.NEWS_API_LONG + ": Search", _crOnClick(_NewsQuery.default.NEWS_SEARCH)], [_ProviderNames.NEWS_API_LONG + ": Top By", _crOnClick(_NewsQuery.default.NEWS_TOP)], '1', [_ProviderNames.THE_NEWS_API + ": Search", _crOnClick(_NewsQuery.default.THE_NEWS_SEARCH)], [_ProviderNames.THE_NEWS_API + ": Top By", _crOnClick(_NewsQuery.default.THE_NEWS_TOP)], '2', [_ProviderNames.WEBZ_IO + ": News, Blogs", _crOnClick(_NewsQuery.default.WEBZ)], [_ProviderNames.WEBZ_IO + ": By Country, Topic", _crOnClick(_NewsQuery.default.WEBZ_COUNTRY)]]
    }, {
      t: "Miscellaneous",
      items: [[_ProviderNames.DEV_TO, _crOnClick(_NewsQuery.default.DEV_TO)], '1', [_ProviderNames.STACK_OVERFLOW + ": Tagged", _crOnClick(_NewsQuery.default.STACK_TAGGED)], [_ProviderNames.STACK_OVERFLOW + ": Search", _crOnClick(_NewsQuery.default.STACK_SEARCH)], '2', [_ProviderNames.REDDIT + ": Top By", _crOnClick(_NewsQuery.default.REDDIT)]]
    }];
  }
  return _menuQuery;
};
var _default = exports.default = crMenuQuery;
//# sourceMappingURL=crMenuQuery.js.map