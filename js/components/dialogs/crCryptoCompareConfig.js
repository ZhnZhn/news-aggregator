"use strict";

exports.__esModule = true;
exports.getCryptoCompareConfig = void 0;
var _DialogFn = require("./DialogFn");
const FEED_OPTIONS = [['All', 'ALL_NEWS_FEEDS'], ['Decrypt', 'decrypt'], ['CoinDesk', 'coindesk'], ['CoinTelegraph', 'cointelegraph'], ['CryptoCompare', 'cryptocompare']],
  CATEGORY_OPTIONS = [['All', 'ALL_NEWS_CATEGORIES'], ['Altcoin'], ['Asia'], ['Blockchain'], ['Business'], ['Commodity'], ['Exchange'], ['Fiat'], ['ICO'], ['Market'], ['Mining'], ['Regulation'], ['Trading'], ['Technology'], ['Sponsored'], ['Wallet']],
  SORTBY_OPTIONS = [['Latest', 'latest'], ['Popular', 'popular']],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("category", CATEGORY_OPTIONS, {
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("feed", FEED_OPTIONS), (0, _DialogFn.crInputSelectConfig)("sortOrder", SORTBY_OPTIONS, {
    caption: "SortBy"
  })];
const getCryptoCompareConfig = exports.getCryptoCompareConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crCryptoCompareConfig.js.map