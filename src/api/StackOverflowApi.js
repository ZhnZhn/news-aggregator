const BASE = "https://api.stackexchange.com/2.2";

const DF = {
  FROM_DATE_S: 1465776000,
  TO_DATE_S: 1497312000,
  TAG: {
    TAG: 'CSS',
    SORT_BY: 'week'
  },
  SEARCH: {
    TAGGED: 'CSS',
    IN_TITLE: 'flexbox',
    SORT_BY: 'votes'
  }
}

const _checkDate = (fromDate, toDate) => {
  return {
    _fromDate: fromDate || DF.FROM_DATE_S,
    _toDate: toDate || DF.TO_DATE_S
  };
}

const _rRequestUrl = {
  TAG: ({
    tag=DF.TAG.TAG,
    sortBy=DF.TAG.SORT_BY,
    fromDate, toDate
  }) => {
    const { _fromDate, _toDate } = _checkDate(fromDate, toDate);
    return `${BASE}/questions?page=1&pagesize=50&order=desc&fromdate=${_fromDate}&todate=${_toDate}&sort=${sortBy}&tagged=${tag}&site=stackoverflow`;
  },
  SEARCH: ({
    tagged=DF.SEARCH.TAGGED,
    inTitle=DF.SEARCH.IN_TITLE,
    sortBy=DF.SEARCH.SORT_BY,
    fromDate, toDate
   }) => {
    const { _fromDate, _toDate } = _checkDate(fromDate, toDate);
    return `${BASE}/search?page=1&pagesize=50&order=desc&fromdate=${_fromDate}&todate=${_toDate}&sort=${sortBy}&tagged=${tagged}&intitle=${inTitle}&site=stackoverflow`;
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
