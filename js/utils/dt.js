'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _pipe = require('./pipe');

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    _toTwoCharsMonth = (0, _pipe2.default)(_toUTCMonth, _toTwoChars),
    _toTwoCharsDay = (0, _pipe2.default)(_toUTCDay, _toTwoChars);

var _toDateTime = function _toDateTime(datetime) {
  var _d = new Date(datetime),
      _tStr = _d.toTimeString(),
      _tArr = _tStr.split(' '),
      _y = _d.getUTCFullYear(),
      _m = _toTwoCharsMonth(_d),
      _day = _toTwoCharsDay(_d);
  return _tArr[0] + ' ' + _day + '-' + _m + '-' + _y;
};

var DateUtil = {
  isValidDate: function isValidDate(str) {
    // STRING FORMAT yyyy-mm-dd
    if (!str) {
      return false;
    }

    if (str.trim().length !== 10) {
      return false;
    }

    // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
    var m = str.match(/(\d{4})-(\d{2})-(\d{2})/);

    // STR IS NOT FIT m IS NOT OBJECT
    if (m === null || (typeof m === 'undefined' ? 'undefined' : (0, _typeof3.default)(m)) !== 'object' || m.size !== 4) {
      return false;
    }

    // CHECK m TYPE
    //if (typeof m !== 'object' && m !== null && m.size!==3) { return false; }

    var thisYear = new Date().getFullYear();
    var minYear = 1999;

    // YEAR CHECK
    if (m[1].length < 4 || m[1] < minYear || m[1] > thisYear) {
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


  toTimeDate: function toTimeDate(publishedAt) {
    if (_isNum(publishedAt)) {
      return _toDateTime(publishedAt);
    }
    //yyyy-MM-ddTHH:mm:ssZ
    var _arr = _isStr(publishedAt) ? publishedAt.split('T') : [''],
        _arrDate = _arr[0].split('-'),
        _date = _arrDate.length === 3 ? _arrDate[2] + '-' + _arrDate[1] + '-' + _arrDate[0] : '',
        _time = _arr[1] ? _arr[1].replace('Z', '').substring(0, 8) : 'No Time';
    return _time + ' ' + _date;
  }

};

exports.default = DateUtil;
//# sourceMappingURL=dt.js.map