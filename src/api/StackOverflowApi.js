import DateUtil from '../utils/dt';

const API_URL = "https://api.stackexchange.com/2.2";

const _toUTCSecond = DateUtil.toUTCSecond
, DF_FROM_DATE_S = _toUTCSecond(DateUtil.getFromDate(1))
, DF_TO_DATE_S = _toUTCSecond(DateUtil.getToDate())

, DF_TAG_TAG = 'CSS'
, DF_TAG_SORT_BY = 'week'

, DF_SEARCH_TAGGED = 'CSS'
, DF_SEARCH_IN_TITLE = 'flexbox'
, DF_SEARCH_SORT_BY = 'votes';

const _rRequestUrl = {
  SO_TAGGED: ({
    tag=DF_TAG_TAG,
    sortBy=DF_TAG_SORT_BY,
    fromDate=DF_FROM_DATE_S,
    toDate=DF_TO_DATE_S
  }) => {
    return `${API_URL}/questions?page=1&pagesize=50&order=desc&fromdate=${fromDate}&todate=${toDate}&sort=${sortBy}&tagged=${tag}&site=stackoverflow`;
  },
  SO_SEARCH: ({
    tagged=DF_SEARCH_TAGGED,
    inTitle=DF_SEARCH_IN_TITLE,
    sortBy=DF_SEARCH_SORT_BY,
    fromDate=DF_FROM_DATE_S,
    toDate=DF_TO_DATE_S
   }) => {
    return `${API_URL}/search?page=1&pagesize=50&order=desc&fromdate=${fromDate}&todate=${toDate}&sort=${sortBy}&tagged=${tagged}&intitle=${inTitle}&site=stackoverflow`;
  }
}

const StackOverflowApi = {
  getRequestUrl(option){
    const _crRequestUrl = _rRequestUrl[option.type];
    return _crRequestUrl(option);
  },
  checkResponse(json, option){
    const {
      error_message,
      error_name=''
    } = json;
    if (error_message){
      throw {
        msg: `${error_name} ${error_message}`
      };
    }
    return true;
  }
}

export default StackOverflowApi
