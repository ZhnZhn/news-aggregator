"use strict";

exports.__esModule = true;
exports.getAvDialogConfig = void 0;
var _DialogFn = require("./DialogFn");
const TOPIC_OPTIONS = [['All', ''], ['Blockchain', 'blockchain'], ['Earnings', 'earnings'], ['IPO', 'ipo'], ['Mergers & Acquisitions', 'mergers_and_acquisitions'], ['Financial Markets', 'financial_markets'], ['Economy - Fiscal Policy', 'economy_fiscal'], ['Economy - Monetary Policy', 'economy_monetary'], ['Economy - Macro/Overall', 'economy_macro'], ['Energy & Transportation', 'energy_transportation'], ['Finance', 'finance'], ['Life Sciences', 'life_sciences'], ['Manufacturing', 'manufacturing'], ['Real Estate & Construction', 'real_estate'], ['Retail & Wholesale', 'retail_wholesale'], ['Technology', 'technology']],
  SORTBY_OPTIONS = [['Latest', 'LATEST'], ['Earliest', 'EARLIEST'], ['Relevance', 'RELEVANCE']],
  LIMIT_OPTIONS = [['Limit 50', '50'], ['Limit 100', '100'], ['Limit 200', '200']],
  DF_TICKERS = "AMD",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("tickers", {
    caption: "Stock Symbol",
    dfValue: DF_TICKERS,
    inputProps: (0, _DialogFn.crInputProps)(16),
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("topics", TOPIC_OPTIONS), (0, _DialogFn.crInputSelectConfig)("sortBy", SORTBY_OPTIONS), (0, _DialogFn.crInputSelectConfig)("limit", LIMIT_OPTIONS)];
const getAvDialogConfig = exports.getAvDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crAvSentimentConfig.js.map