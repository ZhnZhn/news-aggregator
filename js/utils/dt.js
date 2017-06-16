'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		if (m === null || (typeof m === 'undefined' ? 'undefined' : (0, _typeof3.default)(m)) !== 'object') {
			return false;
		}

		// CHECK m TYPE
		if ((typeof m === 'undefined' ? 'undefined' : (0, _typeof3.default)(m)) !== 'object' && m !== null && m.size !== 3) {
			return false;
		}

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
		    yearTo = dateNow.getUTCFullYear();

		var monthTo = dateNow.getUTCMonth() + 1;
		if (monthTo < 10) {
			monthTo = "0" + monthTo;
		}

		var dayTo = dateNow.getUTCDate();
		if (dayTo < 10) {
			dayTo = "0" + dayTo;
		}

		return yearTo - yearMinus + "-" + monthTo + "-" + dayTo;
	},
	getToDate: function getToDate() {
		var dateNow = new Date(),
		    yearTo = dateNow.getUTCFullYear();

		var monthTo = dateNow.getUTCMonth() + 1;
		if (monthTo < 10) {
			monthTo = "0" + monthTo;
		}

		var dayTo = dateNow.getUTCDate();
		if (dayTo < 10) {
			dayTo = "0" + dayTo;
		}
		return yearTo + "-" + monthTo + "-" + dayTo;
	},
	toUTCMillis: function toUTCMillis(strDate) {
		if (DateUtil.isValidDate(strDate)) {
			var arr = strDate.split('-');
			return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
		} else {
			return undefined;
		}
	}
};

exports.default = DateUtil;
//# sourceMappingURL=D:\_Dev\_React\_News\js\utils\dt.js.map