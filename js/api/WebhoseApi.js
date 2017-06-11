'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT = 'https://webhose.io/filterWebContent';
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

var WebhoseApi = {
  getRequestUrl: function getRequestUrl(option) {
    var apiKey = option.apiKey,
        inTitle = option.inTitle,
        _option$siteType = option.siteType,
        siteType = _option$siteType === undefined ? DF_SITE_TYPE : _option$siteType,
        beforeDays = option.beforeDays,
        _beforeDays = beforeDays ? beforeDays : DF_BEFORE_DAYS,
        _ts = _crTs(_beforeDays),
        _inTitle = inTitle ? inTitle : DF_IN_TITLE;

    option.apiKey = undefined;
    return ROOT + '?token=' + apiKey + '&format=json&sort=crawled&ts=' + _ts + '&q=language:english thread.title:' + _inTitle + ' site_type:' + siteType;
  },
  checkResponse: function checkResponse(json, option) {
    var status = json.status,
        message = json.message;

    if (status === 'error') {
      throw { msg: message };
    }
    return true;
  }
};

exports.default = WebhoseApi;
//# sourceMappingURL=D:\_Dev\_React\_News\js\api\WebhoseApi.js.map