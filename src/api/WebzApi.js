
const API_URL = 'https://api.webz.io/'
, NEWS_SLICE = 'filterWebContent'

, DF_SITE_TYPE = 'news'
, DF_IN_TITLE = 'Weather'
, DF_BEFORE_DAYS = 2
, MS_DAY = 24*60*60*1000
, MAX_BEFORE_DAYS = 30

, DF_COUNTRY = "AU"
, DF_TOPIC = "business";

const _crTs = (beforeDays) => {
  const _ = parseInt(beforeDays, 10);
  return !Number.isNaN(_) && _ < MAX_BEFORE_DAYS
    ? Date.now() - _*MS_DAY
    : Date.now() - DF_BEFORE_DAYS*MS_DAY;
};


const _crRootUrl = apiKey =>
  `${API_URL}${NEWS_SLICE}?token=${apiKey}&order=desc&format=json`;

const _crNewsUrl = (option) => {
  const {
     apiKey, inTitle,
     siteType=DF_SITE_TYPE,
     beforeDays
  } = option
  , _ts = _crTs(beforeDays || DF_BEFORE_DAYS)
  , _inTitle = inTitle || DF_IN_TITLE;
  option.apiKey = void 0
  return `${_crRootUrl(apiKey)}&sort=crawled&ts=${_ts}&q=language:english AND thread.title:${_inTitle} AND site_type:${siteType}`;
};

const _crCountryUrl = option => {
  const {
     apiKey,
     country=DF_COUNTRY,
     topic=DF_TOPIC,
     lang
  } = option
  , _qLangToken = lang
      ? `language:${lang} AND `
      : '';
  option.apiKey = void 0
  return `${_crRootUrl(apiKey)}&q=${_qLangToken}site_type:news AND country:${country} AND site_category:${topic}`;
};


const WebzApi = {
  getRequestUrl(option){
    return option.type === "W_WEBZ_COUNTRY"
      ? _crCountryUrl(option)
      : _crNewsUrl(option);
  },

  checkResponse(json, option){
    const { status, message } = json;
    if (status === 'error'){
      throw { msg: message };
    }
    return true;
  }
};

export default WebzApi
