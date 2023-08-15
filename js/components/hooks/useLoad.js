"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _SpinnerLoading = _interopRequireDefault(require("../zhn-atoms/SpinnerLoading"));
var _jsxRuntime = require("preact/jsx-runtime");
const LOADING = 1,
  LOAD_COMPLETED = 2,
  LOAD_FAILED = 3,
  S_SPINNER_LOADING = {
    position: 'relative',
    display: 'block',
    width: 32,
    height: 32,
    margin: '0 auto',
    marginTop: 32,
    textAlign: 'middle'
  };
const useLoadIf = (isShow, url, onLoad, onError) => {
  const [loadStatus, setLoadStatus] = (0, _uiApi.useState)();

  /*eslint-disable react-hooks/exhaustive-deps*/
  (0, _uiApi.useEffect)(() => {
    if (isShow && loadStatus !== LOADING && loadStatus !== LOAD_COMPLETED) {
      setLoadStatus(LOADING);
      fetch(url).then(response => {
        const {
          status
        } = response;
        if (status >= 200 && status < 400) {
          return response.json();
        } else {
          throw {
            status,
            url
          };
        }
      }).then(json => {
        setLoadStatus(LOAD_COMPLETED);
        onLoad(json);
      }).catch(err => {
        setLoadStatus(LOAD_FAILED);
        onError(err);
      });
    }
  }, [isShow]);
  //url, onLoad, onError
  /*eslint-enable react-hooks/exhaustive-deps*/

  return loadStatus === LOADING ? (0, _jsxRuntime.jsx)(_SpinnerLoading.default, {
    style: S_SPINNER_LOADING
  }) : loadStatus === LOAD_FAILED ? (0, _jsxRuntime.jsx)(_SpinnerLoading.default, {
    style: S_SPINNER_LOADING,
    isFailed: true
  }) : null;
};
var _default = useLoadIf;
exports.default = _default;
//# sourceMappingURL=useLoad.js.map