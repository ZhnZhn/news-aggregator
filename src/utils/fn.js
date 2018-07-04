//const LIMIT_REMAINING = 'X-RateLimit-Remaining';

/*
const _fnMsg400 = (option) => {
  if (option.loadId === "EU_STAT"){
    return '400 : Bad request.\nDataset contains no data. One or more filtering elements (query parameters) are probably invalid.\nMaybe try request with older date.';
  } else {
    return '400 : Bad request';
  }
}
*/

const FREQUENCY_RESTRICTION = 5000;
const MSG_FREQUENCY_RESTRICTION = 'Time request frequency restriction.\n1 Request per 5 second.'
const MSG_LOAD_RESTRICTION = 'Request has already loaded.\n1 Request per 5 second.';
let _recentUri;
let _msLastFetch;

const fnFetch = function({
   uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch
 }){
  const _msNow = Date.now();
  if ( _msNow - _msLastFetch < FREQUENCY_RESTRICTION ) {
    if ( _recentUri !== uri ) {
      onFailed({ msg: MSG_FREQUENCY_RESTRICTION })
    } else {
      onFailed({ msg: MSG_LOAD_RESTRICTION })
      //onCompleted({ json: {}, option })
    }
  } else {
    _recentUri = uri;
    _msLastFetch = _msNow;
    fetch(uri)
      .then((response) => {
        const { status, statusText } = response;
        if (status === 404) {
          throw {
            msg: `Not Found ${status}`
          };
        } else if (status>=500 && status<600){
          throw {
            msg : `Response Error ${status} : ${statusText}`
          };
        } else {
          return Promise.all([
            Promise.resolve(status),
            response.json()
          ]);
        }
      })
      .then(([status, json ]) => {
         if (onCheckResponse(json, option)){
           //option.limitRemaining = limitRemaining;
           onFetch({ json, option, onCompleted });
         }
      })
      .catch((error) => {
         onCatch({ error, option, onFailed })
      })
   }
}

export default fnFetch
