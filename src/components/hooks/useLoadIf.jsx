import {
  useState,
  useEffect
} from '../uiApi';

import SpinnerLoading from '../zhn/SpinnerLoading';

const LOADING = 1
, LOAD_COMPLETED = 2
, LOAD_FAILED = 3

, S_SPINNER_LOADING = {
  position: 'relative',
  display: 'block',
  width: 32,
  height: 32,
  margin: '0 auto',
  marginTop: 32,
  textAlign: 'middle'
};

const useLoadIf = (
  isShow,
  url,
  onLoad,
  onError
) => {
  const [
    loadStatus,
    setLoadStatus
  ] = useState();

  /*eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    if (isShow
      && loadStatus !== LOADING
      && loadStatus !== LOAD_COMPLETED
    ) {
    setLoadStatus(LOADING)
    fetch(url)
      .then(response => {
          const { status } = response;
          if (status>=200 && status<400){
            return response.json();
          } else {
            throw ({ status, url });
          }
      })
      .then(json => {
         setLoadStatus(LOAD_COMPLETED)
         onLoad(json)
      })
      .catch(err => {
         setLoadStatus(LOAD_FAILED)
         onError(err)
      })
    }
  }, [isShow])
  //url, onLoad, onError
  /*eslint-enable react-hooks/exhaustive-deps*/

  return loadStatus === LOADING
    ? <SpinnerLoading style={S_SPINNER_LOADING} />
    : loadStatus === LOAD_FAILED
       ? <SpinnerLoading style={S_SPINNER_LOADING} isFailed={true} />
       : null;
}

export default useLoadIf
