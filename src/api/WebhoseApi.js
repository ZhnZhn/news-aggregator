
const C = {
  ROOT_URL: 'https://webhose.io/',
  NEWS_SLICE: 'filterWebContent',
  BRODCAST_SLICE: 'broadcastFilter'
};

const DF_SITE_TYPE = 'news';
const DF_IN_TITLE = 'Weather';
const DF_BEFORE_DAYS = 2;
const MS_DAY = 24*60*60*1000;
const MAX_BEFORE_DAYS = 30;

const _crTs = (beforeDays) => {
  const _ = parseInt(beforeDays, 10);
  if ( !Number.isNaN(_) && _ < MAX_BEFORE_DAYS ) {
    return Date.now() - _*MS_DAY;
  } else {
    return Date.now() - DF_BEFORE_DAYS*MS_DAY;
  }
}

const _crNewsUrl = (option) => {
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
  return `${C.ROOT_URL}${C.NEWS_SLICE}?token=${apiKey}&format=json&sort=crawled&ts=${_ts}&q=language:english thread.title:${_inTitle} site_type:${siteType}`;
}

const _crBrodcastUrl = (option) => {
  const {
          apiKey, query,
          beforeDays
        } = option
  , _beforeDays = (beforeDays)
       ? beforeDays
       : DF_BEFORE_DAYS
  , _ts = _crTs(_beforeDays);
  option.key = undefined
  return `${C.ROOT_URL}${C.BRODCAST_SLICE}?token=${apiKey}&format=json&ts=${_ts}&q=${query}`;
}

const _rCreateUrl = {
  NEWS: _crNewsUrl,
  BRODCAST: _crBrodcastUrl
};

const WebhoseApi = {
  getRequestUrl(option){
    const { requestType } = option
        , fnCr = _rCreateUrl[requestType];

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

  checkResponse(json, option){
    const { status, message } = json;
    if (status === 'error'){
      throw { msg: message };
    }
    return true;
  }
}

export default WebhoseApi
