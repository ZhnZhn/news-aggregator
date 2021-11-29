"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var ROOT_URL = 'https://api.webz.io/',
    NEWS_SLICE = 'filterWebContent';
var DF_SITE_TYPE = 'news';
var DF_IN_TITLE = 'Weather';
var DF_BEFORE_DAYS = 2;
var MS_DAY = 24 * 60 * 60 * 1000;
var MAX_BEFORE_DAYS = 30;

var _crTs = function _crTs(beforeDays) {
  var _ = parseInt(beforeDays, 10);

  return !Number.isNaN(_) && _ < MAX_BEFORE_DAYS ? Date.now() - _ * MS_DAY : Date.now() - DF_BEFORE_DAYS * MS_DAY;
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
  return "" + ROOT_URL + NEWS_SLICE + "?token=" + apiKey + "&format=json&sort=crawled&ts=" + _ts + "&q=language:english thread.title:" + _inTitle + " site_type:" + siteType;
};

var WebzApi = {
  getRequestUrl: function getRequestUrl(option) {
    return _crNewsUrl(option);
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