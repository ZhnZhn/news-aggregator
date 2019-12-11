"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  ROOT_URL: 'https://webhose.io/',
  NEWS_SLICE: 'filterWebContent',
  BRODCAST_SLICE: 'broadcastFilter'
};
var DF_SITE_TYPE = 'news';
var DF_IN_TITLE = 'Weather';
var DF_BEFORE_DAYS = 2;
var MS_DAY = 24 * 60 * 60 * 1000;
var MAX_BEFORE_DAYS = 30;

var _crTs = function _crTs(beforeDays) {
  var _ = parseInt(beforeDays, 10);

  if (!Number.isNaN(_) && _ < MAX_BEFORE_DAYS) {
    return Date.now() - _ * MS_DAY;
  } else {
    return Date.now() - DF_BEFORE_DAYS * MS_DAY;
  }
};

var _crNewsUrl = function _crNewsUrl(option) {
  var apiKey = option.apiKey,
      inTitle = option.inTitle,
      _option$siteType = option.siteType,
      siteType = _option$siteType === void 0 ? DF_SITE_TYPE : _option$siteType,
      beforeDays = option.beforeDays,
      _beforeDays = beforeDays ? beforeDays : DF_BEFORE_DAYS,
      _ts = _crTs(_beforeDays),
      _inTitle = inTitle ? inTitle : DF_IN_TITLE;

  option.apiKey = undefined;
  return "" + C.ROOT_URL + C.NEWS_SLICE + "?token=" + apiKey + "&format=json&sort=crawled&ts=" + _ts + "&q=language:english thread.title:" + _inTitle + " site_type:" + siteType;
};

var _crBrodcastUrl = function _crBrodcastUrl(option) {
  var apiKey = option.apiKey,
      query = option.query,
      beforeDays = option.beforeDays,
      _beforeDays = beforeDays ? beforeDays : DF_BEFORE_DAYS,
      _ts = _crTs(_beforeDays);

  option.key = undefined;
  return "" + C.ROOT_URL + C.BRODCAST_SLICE + "?token=" + apiKey + "&format=json&ts=" + _ts + "&q=" + query;
};

var _rCreateUrl = {
  NEWS: _crNewsUrl,
  BRODCAST: _crBrodcastUrl
};
var WebhoseApi = {
  getRequestUrl: function getRequestUrl(option) {
    var requestType = option.requestType,
        fnCr = _rCreateUrl[requestType];
    return fnCr(option);
    /*
    const {
           apiKey, inTitle,
           siteType=DF_SITE_TYPE,
           beforeDays
         } = option
        , _beforeDays = (beforeDays)
             ? beforeDays
             : DF_BEFORE_DAYS
        , _ts = _crTs(_beforeDays)
        , _inTitle = (inTitle)
              ? inTitle
              : DF_IN_TITLE;
    option.apiKey = undefined
    return `${ROOT}?token=${apiKey}&format=json&sort=crawled&ts=${_ts}&q=language:english thread.title:${_inTitle} site_type:${siteType}`
    */
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
var _default = WebhoseApi;
exports["default"] = _default;
//# sourceMappingURL=WebhoseApi.js.map