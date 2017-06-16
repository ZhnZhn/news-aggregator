const BASE = "https://api.stackexchange.com/2.2";

const SORT_BY = 'week';
const FROM_DATE_S = 1465776000;
const TO_DATE_S = 1497312000;

const _rRequestUrl = {
  TAG: ({ tag, sortBy=SORT_BY, fromDate, toDate }) => {
    const _fromDate = fromDate || FROM_DATE_S
        , _toDate = toDate || TO_DATE_S;
    return `${BASE}/questions?page=1&pagesize=50&order=desc&fromdate=${_fromDate}&todate=${_toDate}&sort=${sortBy}&tagged=${tag}&site=stackoverflow`;
  }
}

const StackOverflowApi = {
  getRequestUrl(option){
    const fn = _rRequestUrl[option.requestType];
    return fn(option);
  },
  checkResponse(json, option){
    const { error_message, error_name='' } = json;
     if (error_message){
        throw {
          msg: `${error_name} ${error_message}`
        };
     }
      return true;
  }
}

export default StackOverflowApi
