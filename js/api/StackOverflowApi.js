'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE = "https://api.stackexchange.com/2.2";

var DF = {
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
};

var _checkDate = function _checkDate(fromDate, toDate) {
  return {
    _fromDate: fromDate || DF.FROM_DATE_S,
    _toDate: toDate || DF.TO_DATE_S
  };
};

var _rRequestUrl = {
  TAG: function TAG(_ref) {
    var _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? DF.TAG.TAG : _ref$tag,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === undefined ? DF.TAG.SORT_BY : _ref$sortBy,
        fromDate = _ref.fromDate,
        toDate = _ref.toDate;

    var _checkDate2 = _checkDate(fromDate, toDate),
        _fromDate = _checkDate2._fromDate,
        _toDate = _checkDate2._toDate;

    return BASE + '/questions?page=1&pagesize=50&order=desc&fromdate=' + _fromDate + '&todate=' + _toDate + '&sort=' + sortBy + '&tagged=' + tag + '&site=stackoverflow';
  },
  SEARCH: function SEARCH(_ref2) {
    var _ref2$tagged = _ref2.tagged,
        tagged = _ref2$tagged === undefined ? DF.SEARCH.TAGGED : _ref2$tagged,
        _ref2$inTitle = _ref2.inTitle,
        inTitle = _ref2$inTitle === undefined ? DF.SEARCH.IN_TITLE : _ref2$inTitle,
        _ref2$sortBy = _ref2.sortBy,
        sortBy = _ref2$sortBy === undefined ? DF.SEARCH.SORT_BY : _ref2$sortBy,
        fromDate = _ref2.fromDate,
        toDate = _ref2.toDate;

    var _checkDate3 = _checkDate(fromDate, toDate),
        _fromDate = _checkDate3._fromDate,
        _toDate = _checkDate3._toDate;

    return BASE + '/search?page=1&pagesize=50&order=desc&fromdate=' + _fromDate + '&todate=' + _toDate + '&sort=' + sortBy + '&tagged=' + tagged + '&intitle=' + inTitle + '&site=stackoverflow';
  }
};

var StackOverflowApi = {
  getRequestUrl: function getRequestUrl(option) {
    var fn = _rRequestUrl[option.requestType];
    return fn(option);
  },
  checkResponse: function checkResponse(json, option) {
    var error_message = json.error_message,
        _json$error_name = json.error_name,
        error_name = _json$error_name === undefined ? '' : _json$error_name;

    if (error_message) {
      throw {
        msg: error_name + ' ' + error_message
      };
    }
    return true;
  }
};

exports.default = StackOverflowApi;
//# sourceMappingURL=D:\_Dev\_React\_News\js\api\StackOverflowApi.js.map