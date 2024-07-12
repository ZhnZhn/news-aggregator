"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.toUTCSecond = exports.toUTCMillis = exports.toTimeDate = exports.toMls = exports.isValidDate = exports.getToDate = exports.getFromDate = exports.dateTimeToMls = void 0;
var _isTypeFn = require("./isTypeFn");
var _pipe = _interopRequireDefault(require("./pipe"));
const MIN_YEAR = 1999;
const _toTwoChars = n => n < 10 ? '0' + n : '' + n,
  _toUTCMonth = d => d.getUTCMonth() + 1,
  _toUTCDay = d => d.getUTCDate(),
  _toTwoCharsMonth = (0, _pipe.default)(_toUTCMonth, _toTwoChars),
  _toTwoCharsDay = (0, _pipe.default)(_toUTCDay, _toTwoChars);
const _toDateTime = datetime => {
  const _d = new Date(datetime),
    _tStr = _d.toTimeString(),
    _tArr = _tStr.split(' '),
    _y = _d.getUTCFullYear(),
    _m = _toTwoCharsMonth(_d),
    _day = _toTwoCharsDay(_d);
  return `${_tArr[0]} ${_day}-${_m}-${_y}`;
};
const REG_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const isValidDate = str => {
  // STRING FORMAT yyyy-mm-dd
  if (!(0, _isTypeFn.isStr)(str) || str.trim().length !== 10) {
    return false;
  }

  // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
  const m = str.match(REG_DATE);

  // STR IS NOT FIT m IS NOT OBJECT
  if (m === null || typeof m !== 'object' || m.length !== 4) {
    return false;
  }
  const thisYear = new Date().getFullYear();

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
const getFromDate = yearMinus => {
  const dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear(),
    monthTo = _toTwoCharsMonth(dateNow),
    dayTo = _toTwoCharsDay(dateNow);
  return yearTo - yearMinus + "-" + monthTo + "-" + dayTo;
};
exports.getFromDate = getFromDate;
const getToDate = () => {
  const dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear(),
    monthTo = _toTwoCharsMonth(dateNow),
    dayTo = _toTwoCharsDay(dateNow);
  return yearTo + "-" + monthTo + "-" + dayTo;
};
exports.getToDate = getToDate;
const toUTCMillis = strDate => {
  //YYYY-MM-DD
  if (isValidDate(strDate)) {
    const arr = strDate.split('-');
    return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
  } else {
    return;
  }
};
exports.toUTCMillis = toUTCMillis;
const toUTCSecond = strDate => toUTCMillis(strDate) / 1000;

//YYYYMMDDTHHMMSS
exports.toUTCSecond = toUTCSecond;
const toMls = strDate => (strDate || '').length > 12 ? Date.UTC(strDate.slice(0, 4), parseInt(strDate.slice(4, 6), 10) - 1, strDate.slice(6, 8), strDate.slice(9, 11), strDate.slice(11, 13)) : void 0;

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
const dateTimeToMls = strDateTime => {
  if (!(0, _isTypeFn.isStr)(strDateTime)) {
    return;
  }
  const [strDate, strTime] = strDateTime.trim().replace('Z', '').split('T'),
    [YYYY, MM, DD] = (strDate || '').split('-'),
    [hh, mm, ss] = (strTime || '').split(':');
  return toMls(`${YYYY}${MM}${DD}T${hh}${mm}${Math.round(ss)}`);
};
exports.dateTimeToMls = dateTimeToMls;
const _DF_TO_TIME_DATE_VALUE = 'No Date';
const toTimeDate = function (publishedAt, dfValue) {
  if (dfValue === void 0) {
    dfValue = _DF_TO_TIME_DATE_VALUE;
  }
  if (!publishedAt) {
    return '';
  } else if ((0, _isTypeFn.isNumber)(publishedAt)) {
    return _toDateTime(publishedAt);
  }
  //yyyy-MM-ddTHH:mm:ssZ case
  const _arr = (0, _isTypeFn.isStr)(publishedAt) ? publishedAt.trim().split('T') : [''],
    _arrDate = _arr[0].length === 10 ? _arr[0].split('-') : [],
    _strDate = _arrDate.length === 3 ? `${_arrDate[2]}-${_arrDate[1]}-${_arrDate[0]}` : '',
    _strTime = _arr[1] && _arr[1].length === 9 ? _arr[1].substring(0, 8) : '';
  return [_strTime, _strDate].filter(Boolean).join(' ') || dfValue;
};
exports.toTimeDate = toTimeDate;
//# sourceMappingURL=dt.js.map