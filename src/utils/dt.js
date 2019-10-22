
const _isStr = str => typeof str === 'string';
const _isNum = n => typeof n === 'number';

const _toDateTime = datetime => {
  const _d = new Date(datetime)
  , _tStr = _d.toTimeString()
  , _tArr = _tStr.split(' ')
  , _y = _d.getUTCFullYear()
  , _m = _d.getUTCMonth() + 1
  , _day = _d.getUTCDate();
  return `${_tArr[0]} ${_day}-${_m}-${_y}`;
};

const DateUtil = {

   isValidDate(str){
	   // STRING FORMAT yyyy-mm-dd
	   if (!str) { return false; }

	   if (str.trim().length !== 10) { return false; }

	   // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
	   let m = str.match(/(\d{4})-(\d{2})-(\d{2})/);

	   // STR IS NOT FIT m IS NOT OBJECT
	   if( m === null || typeof m !== 'object') { return false; }

	   // CHECK m TYPE
	   if (typeof m !== 'object' && m !== null && m.size!==3) { return false; }

	   let thisYear = new Date().getFullYear();
	   let minYear = 1999;

	  // YEAR CHECK
	   if( (m[1].length < 4) || m[1] < minYear || m[1] > thisYear) { return false; }
	  // MONTH CHECK
	   if( (m[2].length < 2) || m[2] < 1 || m[2] > 12) { return false;}
	  // DAY CHECK
	   if( (m[3].length < 2) || m[3] < 1 || m[3] > 31) { return false;}

	   return true;
  },

  getFromDate(yearMinus){
	  const dateNow = new Date()
	      , yearTo = dateNow.getUTCFullYear();

	  let monthTo = dateNow.getUTCMonth() + 1;
	  if ( monthTo<10 ){
		  monthTo = "0" + monthTo;
	  }

	  let dayTo = dateNow.getUTCDate();
	  if ( dayTo<10 ){
		  dayTo = "0" + dayTo;
	  }

	  return (yearTo-yearMinus) + "-" + monthTo + "-" + dayTo;
  },

  getToDate(){
	  const dateNow = new Date()
	      , yearTo = dateNow.getUTCFullYear();

	  let monthTo = dateNow.getUTCMonth() + 1;
	  if ( monthTo<10 ){
		  monthTo = "0" + monthTo;
	  }

	  let dayTo = dateNow.getUTCDate();
	  if ( dayTo<10 ){
		  dayTo = "0" + dayTo;
	  }
	  return yearTo + "-" + monthTo + "-" + dayTo;
 },

 toUTCMillis(strDate){
   if (DateUtil.isValidDate(strDate)) {
     const arr = strDate.split('-');
     return Date.UTC(arr[0], parseInt(arr[1],10)-1, arr[2]);
   } else {
     return void 0;
   }
 },

toTimeDate: (publishedAt) => {
  if (_isNum(publishedAt)) {
    return _toDateTime(publishedAt);
  }
  //yyyy-MM-ddTHH:mm:ssZ
  const _arr = _isStr(publishedAt)
     ? publishedAt.split('T')
     : ['']
  , _arrDate = _arr[0].split('-')
  , _date = _arrDate.length === 3
      ? `${_arrDate[2]}-${_arrDate[1]}-${_arrDate[0]}`
      : ''
  , _time = _arr[1]
      ? _arr[1].replace('Z', '').substring(0, 8)
      : 'No Time';
  return `${_time} ${_date}`;
}

}

export default DateUtil
