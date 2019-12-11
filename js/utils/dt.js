"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _pipe = _interopRequireDefault(require("./pipe"));

var MIN_YEAR = 1999;

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};

var _isNum = function _isNum(n) {
  return typeof n === 'number';
};

var _toTwoChars = function _toTwoChars(n) {
  return n < 10 ? '0' + n : '' + n;
},
    _toUTCMonth = function _toUTCMonth(d) {
  return d.getUTCMonth() + 1;
},
    _toUTCDay = function _toUTCDay(d) {
  return d.getUTCDate();
},
    _toTwoCharsMonth = (0, _pipe["default"])(_toUTCMonth, _toTwoChars),
    _toTwoCharsDay = (0, _pipe["default"])(_toUTCDay, _toTwoChars);

var _toDateTime = function _toDateTime(datetime) {
  var _d = new Date(datetime),
      _tStr = _d.toTimeString(),
      _tArr = _tStr.split(' '),
      _y = _d.getUTCFullYear(),
      _m = _toTwoCharsMonth(_d),
      _day = _toTwoCharsDay(_d);

  return _tArr[0] + " " + _day + "-" + _m + "-" + _y;
};

var REG_DATE = /(\d{4})-(\d{2})-(\d{2})/;
var DateUtil = {
  isValidDate: function isValidDate(str) {
    // STRING FORMAT yyyy-mm-dd
    if (!_isStr(str) || str.trim().length !== 10) {
      return false;
    } // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'


    var m = str.match(REG_DATE); // STR IS NOT FIT m IS NOT OBJECT

    if (m === null || typeof m !== 'object' || m.length !== 4) {
      return false;
    }

    var thisYear = new Date().getFullYear(); // YEAR CHECK

    if (m[1].length < 4 || m[1] < MIN_YEAR || m[1] > thisYear) {
      return false;
    } // MONTH CHECK


    if (m[2].length < 2 || m[2] < 1 || m[2] > 12) {
      return false;
    } // DAY CHECK


    if (m[3].length < 2 || m[3] < 1 || m[3] > 31) {
      return false;
    }

    return true;
  },
  getFromDate: function getFromDate(yearMinus) {
    var dateNow = new Date(),
        yearTo = dateNow.getUTCFullYear(),
        monthTo = _toTwoCharsMonth(dateNow),
        dayTo = _toTwoCharsDay(dateNow);

    return yearTo - yearMinus + "-" + monthTo + "-" + dayTo;
  },
  getToDate: function getToDate() {
    var dateNow = new Date(),
        yearTo = dateNow.getUTCFullYear(),
        monthTo = _toTwoCharsMonth(dateNow),
        dayTo = _toTwoCharsDay(dateNow);

    return yearTo + "-" + monthTo + "-" + dayTo;
  },
  toUTCMillis: function toUTCMillis(strDate) {
    if (DateUtil.isValidDate(strDate)) {
      var arr = strDate.split('-');
      return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
    } else {
      return void 0;
    }
  },
  toUTCSecond: function toUTCSecond(strDate) {
    return DateUtil.toUTCMillis(strDate) / 1000;
  },
  toTimeDate: function toTimeDate(publishedAt) {
    if (_isNum(publishedAt)) {
      return _toDateTime(publishedAt);
    } //yyyy-MM-ddTHH:mm:ssZ


    var _arr = _isStr(publishedAt) ? publishedAt.split('T') : [''],
        _arrDate = _arr[0].split('-'),
        _date = _arrDate.length === 3 ? _arrDate[2] + "-" + _arrDate[1] + "-" + _arrDate[0] : '',
        _time = _arr[1] ? _arr[1].replace('Z', '').substring(0, 8) : 'No Time';

    return _time + " " + _date;
  }
};
var _default = DateUtil;
exports["default"] = _default;
//# sourceMappingURL=dt.js.map