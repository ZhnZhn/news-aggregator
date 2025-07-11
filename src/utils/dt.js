import { isNumber, isStr } from './isTypeFn';
import pipe from './pipe'

const MIN_YEAR =  1999;

const _toTwoChars = n => n < 10 ? '0'+n : ''+n
, _toUTCMonth = d => d.getUTCMonth() + 1
, _toUTCDay = d => d.getUTCDate()
, _toTwoCharsMonth = pipe(_toUTCMonth, _toTwoChars)
, _toTwoCharsDay = pipe(_toUTCDay, _toTwoChars);

const _toDateTime = datetime => {
  const _d = new Date(datetime)
  , _tStr = _d.toTimeString()
  , _tArr = _tStr.split(' ')
  , _y = _d.getUTCFullYear()
  , _m = _toTwoCharsMonth(_d)
  , _day = _toTwoCharsDay(_d);
  return `${_tArr[0]} ${_day}-${_m}-${_y}`;
};

const REG_DATE = /(\d{4})-(\d{2})-(\d{2})/;


export const isValidDate = (str) => {
	 // STRING FORMAT yyyy-mm-dd
	 if (!isStr(str) || str.trim().length !== 10 ) {
     return false;
   }

	 // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
	 const m = str.match(REG_DATE);

	 // STR IS NOT FIT m IS NOT OBJECT
	 if( m === null || typeof m !== 'object' || m.length !== 4 ) {
     return false;
   }

	 const thisYear = new Date().getFullYear();

	 // YEAR CHECK
	 if( (m[1].length < 4) || m[1] < MIN_YEAR || m[1] > thisYear) {
     return false;
   }
	 // MONTH CHECK
	 if( (m[2].length < 2) || m[2] < 1 || m[2] > 12) {
     return false;
   }
	 // DAY CHECK
	 if( (m[3].length < 2) || m[3] < 1 || m[3] > 31) {
     return false;
   }

	 return true;
}

export const getFromDate = (yearMinus) => {
	const dateNow = new Date()
  , yearTo = dateNow.getUTCFullYear()
  , monthTo = _toTwoCharsMonth(dateNow)
  , dayTo = _toTwoCharsDay(dateNow);

	return (yearTo-yearMinus) + "-" + monthTo + "-" + dayTo;
}

export const getToDate = () => {
	const dateNow = new Date()
  , yearTo = dateNow.getUTCFullYear()
  , monthTo = _toTwoCharsMonth(dateNow)
  , dayTo = _toTwoCharsDay(dateNow);

	return yearTo + "-" + monthTo + "-" + dayTo;
}

export const toUTCMillis = (strDate) => {
  //YYYY-MM-DD
  if (isValidDate(strDate)) {
    const arr = strDate.split('-');
    return Date.UTC(
      arr[0],
      parseInt(arr[1], 10) - 1,
      arr[2]
    );
  } else {
    return;
  }
}

export const toUTCSecond = (strDate) => toUTCMillis(strDate)/1000

//YYYYMMDDTHHMMSS
export const toMls = (
  strDate
) => (strDate || '').length > 12
  ? Date.UTC(
      strDate.slice(0,4),
      parseInt(strDate.slice(4,6), 10) - 1,
      strDate.slice(6,8),
      strDate.slice(9,11),
      strDate.slice(11,13)
    )
  : void 0;

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
export const dateTimeToMls = (
  strDateTime
) => {
  if (!isStr(strDateTime)) {
    return;
  }
  const _strDateTime =  strDateTime.trim()
  , strDate = _strDateTime.slice(0, 10)
  , strTime = _strDateTime.slice(11, 19)
  , [YYYY, MM, DD] = (strDate || '').split('-')
  , [hh, mm, ss] = (strTime || '').split(':');
  return toMls(`${YYYY}${MM}${DD}T${hh}${mm}${Math.round(ss)}`);
}

const _DF_TO_TIME_DATE_VALUE = 'No Date';
export const toTimeDate = (
  publishedAt,
  dfValue=_DF_TO_TIME_DATE_VALUE
) => {
  if (!publishedAt) {
    return '';
  } else if (isNumber(publishedAt)) {
    return _toDateTime(publishedAt);
  }
  //yyyy-MM-ddTHH:mm:ssZ case
  const _arr = isStr(publishedAt)
    ? publishedAt.trim().split('T')
    : ['']
  , _arrDate = _arr[0].length === 10
      ? _arr[0].split('-')
      : []
  , _strDate = _arrDate.length === 3
     ? `${_arrDate[2]}-${_arrDate[1]}-${_arrDate[0]}`
     : ''
  , _strTime = _arr[1] && _arr[1].length === 9
     ? _arr[1].slice(0, 8)
     : '';
  return [_strTime, _strDate]
    .filter(Boolean)
    .join(' ') || dfValue;
}

export const toDateTime = (strTimeDate) => {
  if (!isStr(strTimeDate)) {
    return '';
  }
  const [
    strTime,
    strDmy
  ] = strTimeDate.split(' ')
  , [
    dd,
    mm, 
    yyyy
  ] = (strDmy || '').split('-');

  return yyyy
    ? `${yyyy}-${mm}-${dd} ${strTime}`
    : '';
}
