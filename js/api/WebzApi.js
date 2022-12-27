"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var API_URL = 'https://api.webz.io/',
  NEWS_SLICE = 'filterWebContent',
  DF_SITE_TYPE = 'news',
  DF_IN_TITLE = 'Weather',
  DF_BEFORE_DAYS = 2,
  MS_DAY = 24 * 60 * 60 * 1000,
  MAX_BEFORE_DAYS = 30,
  DF_COUNTRY = "AU",
  DF_TOPIC = "business";
var _crTs = function _crTs(beforeDays) {
  var _ = parseInt(beforeDays, 10);
  return !Number.isNaN(_) && _ < MAX_BEFORE_DAYS ? Date.now() - _ * MS_DAY : Date.now() - DF_BEFORE_DAYS * MS_DAY;
};
var _crRootUrl = function _crRootUrl(apiKey) {
  return "" + API_URL + NEWS_SLICE + "?token=" + apiKey + "&order=desc&format=json";
};
var _crNewsUrl = function _crNewsUrl(option) {
  var apiKey = option.apiKey,
    inTitle = option.inTitle,
    _option$siteType = option.siteType,
    siteType = _option$siteType === void 0 ? DF_SITE_TYPE : _option$siteType,
    beforeDays = option.beforeDays,
    _ts = _crTs(beforeDays || DF_BEFORE_DAYS),
    _inTitle = inTitle || DF_IN_TITLE;
  option.apiKey = void 0;
  return _crRootUrl(apiKey) + "&sort=crawled&ts=" + _ts + "&q=language:english AND thread.title:" + _inTitle + " AND site_type:" + siteType;
};
var _crCountryUrl = function _crCountryUrl(option) {
  var apiKey = option.apiKey,
    _option$country = option.country,
    country = _option$country === void 0 ? DF_COUNTRY : _option$country,
    _option$topic = option.topic,
    topic = _option$topic === void 0 ? DF_TOPIC : _option$topic,
    lang = option.lang,
    _qLangToken = lang ? "language:" + lang + " AND " : '';
  option.apiKey = void 0;
  return _crRootUrl(apiKey) + "&q=" + _qLangToken + "site_type:news AND country:" + country + " AND site_category:" + topic;
};
var WebzApi = {
  getRequestUrl: function getRequestUrl(option) {
    return option.type === "W_WEBZ_COUNTRY" ? _crCountryUrl(option) : _crNewsUrl(option);
  },
  checkResponse: function checkResponse(json, option) {
    var status = json.status,
      message = json.message;
    if (status === 'error') {
      throw {
        msg: message
      };
    }
    return true;
  }
};
var _default = WebzApi;
exports["default"] = _default;
//# sourceMappingURL=WebzApi.js.map