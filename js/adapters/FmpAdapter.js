"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var C = {
  SOURCE: 'fmp_news'
};

var _toDate = function _toDate(strDate) {
  var _arrDateTime = (strDate || '').split(' '),
      _arrDate = (_arrDateTime[0] || '').split('-'),
      _strDate = _arrDate.reverse().join('-');

  return (_arrDateTime[1] || '') + ' ' + _strDate;
};

var _toArticles = function _toArticles(json) {
  if (!Array.isArray(json)) {
    return [];
  }

  var articles = json.map(function (item) {
    var title = item.title,
        text = item.text,
        symbol = item.symbol,
        site = item.site,
        publishedDate = item.publishedDate,
        url = item.url;
    return {
      source: C.SOURCE,
      articleId: (0, _crId["default"])(),
      title: title,
      description: text,
      related: symbol,
      author: site,
      publishedDate: _toDate(publishedDate),
      url: url
    };
  });
  return articles;
};

var FmpAdapter = {
  toNews: function toNews(json, option) {
    var articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles //sortBy: `${symbol.toUpperCase()} ${recent}`

    };
  }
};
var _default = FmpAdapter;
exports["default"] = _default;
//# sourceMappingURL=FmpAdapter.js.map