"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.toUTCSecond = exports.toUTCMillis = exports.toTimeDate = exports.toMls = exports.isValidDate = exports.getToDate = exports.getFromDate = exports.dateTimeToMls = void 0;
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
var isValidDate = function isValidDate(str) {
  // STRING FORMAT yyyy-mm-dd
  if (!_isStr(str) || str.trim().length !== 10) {
    return false;
  }

  // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
  var m = str.match(REG_DATE);

  // STR IS NOT FIT m IS NOT OBJECT
  if (m === null || typeof m !== 'object' || m.length !== 4) {
    return false;
  }
  var thisYear = new Date().getFullYear();

  // YEAR CHECK
  if (m[1].length < 4 || m[1] < MIN_YEAR || m[1] > thisYear) {
    return false;
  }
  // MONTH CHECK
  if (m[2].length < 2 || m[2] < 1 || m[2] > 12) {
    return false;
  }
  // DAY CHECK
  if (m[3].length < 2 || m[3] < 1 || m[3] > 31) {
    return false;
  }
  return true;
};
exports.isValidDate = isValidDate;
var getFromDate = function getFromDate(yearMinus) {
  var dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear(),
    monthTo = _toTwoCharsMonth(dateNow),
    dayTo = _toTwoCharsDay(dateNow);
  return yearTo - yearMinus + "-" + monthTo + "-" + dayTo;
};
exports.getFromDate = getFromDate;
var getToDate = function getToDate() {
  var dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear(),
    monthTo = _toTwoCharsMonth(dateNow),
    dayTo = _toTwoCharsDay(dateNow);
  return yearTo + "-" + monthTo + "-" + dayTo;
};
exports.getToDate = getToDate;
var toUTCMillis = function toUTCMillis(strDate) {
  //YYYY-MM-DD
  if (isValidDate(strDate)) {
    var arr = strDate.split('-');
    return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
  } else {
    return;
  }
};
exports.toUTCMillis = toUTCMillis;
var toUTCSecond = function toUTCSecond(strDate) {
  return toUTCMillis(strDate) / 1000;
};

//YYYYMMDDTHHMMSS
exports.toUTCSecond = toUTCSecond;
var toMls = function toMls(strDate) {
  return (strDate || '').length > 12 ? Date.UTC(strDate.slice(0, 4), parseInt(strDate.slice(4, 6), 10) - 1, strDate.slice(6, 8), strDate.slice(9, 11), strDate.slice(11, 13)) : void 0;
};

/*
//HH:MM:SS DD-MM-YYYY
export const timeDateToMls = (
  timeDate
) => {
  if (typeof timeDate !== 'string') {
    return;
  }
  const [time, date] = timeDate.trim().split(' ')
  , [hh, mm, ss] = (time || '').split(':')
  , [DD, MM, YYYY] = (date || '').split('-');
  return toMls(`${YYYY}${MM}${DD}${hh}${mm}${ss}`);
}
*/

//YYYY-MM-DDThh:mm:ssZ
exports.toMls = toMls;
var dateTimeToMls = function dateTimeToMls(strDateTime) {
  if (typeof strDateTime !== 'string') {
    return;
  }
  var _strDateTime$trim$rep = strDateTime.trim().replace('Z', '').split('T'),
    strDate = _strDateTime$trim$rep[0],
    strTime = _strDateTime$trim$rep[1],
    _split = (strDate || '').split('-'),
    YYYY = _split[0],
    MM = _split[1],
    DD = _split[2],
    _split2 = (strTime || '').split(':'),
    hh = _split2[0],
    mm = _split2[1],
    ss = _split2[2];
  return toMls("" + YYYY + MM + DD + hh + mm + ss);
};
exports.dateTimeToMls = dateTimeToMls;
var _DF_TO_TIME_DATE_VALUE = 'No Time';
var toTimeDate = function toTimeDate(publishedAt, dfValue) {
  if (dfValue === void 0) {
    dfValue = _DF_TO_TIME_DATE_VALUE;
  }
  if (!publishedAt) {
    return '';
  } else if (_isNum(publishedAt)) {
    return _toDateTime(publishedAt);
  }
  //yyyy-MM-ddTHH:mm:ssZ
  var _arr = _isStr(publishedAt) ? publishedAt.split('T') : [''],
    _arrDate = _arr[0].split('-'),
    _date = _arrDate.length === 3 ? " " + _arrDate[2] + "-" + _arrDate[1] + "-" + _arrDate[0] : '',
    _time = _arr[1] ? _arr[1].replace('Z', '').substring(0, 8) : _DF_TO_TIME_DATE_VALUE;
  return "" + _time + _date;
};
exports.toTimeDate = toTimeDate;
//# sourceMappingURL=dt.js.map