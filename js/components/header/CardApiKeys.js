"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _ProviderNames = require("../../conf/ProviderNames");
var _uiApi = require("../uiApi");
var _safeFn = _interopRequireDefault(require("../../utils/safeFn"));
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _PasswordField = _interopRequireDefault(require("../zhn-m-input/PasswordField"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
var S_OPEN_CLOSE = {
  lineHeight: 2.2
};
var _hasLengthOrEmpty = function _hasLengthOrEmpty(length) {
    return function (str) {
      return str.length === length || str === '';
    };
  },
  SET_IEX_KEY = 'setIexKey',
  SET_FMP_KEY = 'setFmpKey',
  SET_NEWS_KEY = 'setNewsKey',
  SET_THE_NEWS_KEY = 'setTheNewsKey',
  SET_WEBZ_KEY = 'setWebzKey',
  _getKeySetters = function _getKeySetters(data) {
    return {
      setIex: (0, _safeFn["default"])(data, SET_IEX_KEY),
      setFmp: (0, _safeFn["default"])(data, SET_FMP_KEY),
      setNews: (0, _safeFn["default"])(data, SET_NEWS_KEY),
      setTheNews: (0, _safeFn["default"])(data, SET_THE_NEWS_KEY),
      setWebz: (0, _safeFn["default"])(data, SET_WEBZ_KEY)
    };
  };
var _isVisible = function _isVisible(_ref) {
  var isSelected = _ref.isSelected,
    isShow = _ref.isShow;
  return isShow && isSelected;
};
var _getRefCompValue = function _getRefCompValue(ref) {
  return ref.current.getValue();
};
var _clearInputRefs = function _clearInputRefs(refs) {
  return refs.forEach(function (ref) {
    return ref.current.clear();
  });
};
var _setWasEnterRefs = function _setWasEnterRefs(refs) {
  return refs.forEach(function (ref) {
    return ref.current.setWasEnter();
  });
};
var _crCaption = function _crCaption(name, maxLength) {
  var _tokenKey = name.toUpperCase().indexOf('API') === -1 ? 'API Key' : 'Key';
  return name + " " + _tokenKey + " (" + maxLength + ")";
};
var _crPasswordFieldProps = function _crPasswordFieldProps(name, maxLength) {
  return {
    caption: _crCaption(name, maxLength),
    maxLength: maxLength,
    onTest: _hasLengthOrEmpty(maxLength)
  };
};
var CardApiKeys = function CardApiKeys(props) {
  var _refInputIex = (0, _uiApi.useRef)(),
    _refInputFmp = (0, _uiApi.useRef)(),
    _refInputNews = (0, _uiApi.useRef)(),
    _refInputTheNews = (0, _uiApi.useRef)(),
    _refInputWebz = (0, _uiApi.useRef)(),
    style = props.style,
    fieldStyle = props.fieldStyle,
    buttonsStyle = props.buttonsStyle,
    TS = props.TS,
    data = props.data,
    _getKeySetters2 = _getKeySetters(data),
    setIex = _getKeySetters2.setIex,
    setFmp = _getKeySetters2.setFmp,
    setNews = _getKeySetters2.setNews,
    setTheNews = _getKeySetters2.setTheNews,
    setWebz = _getKeySetters2.setWebz,
    _hClearAll = (0, _uiApi.useCallback)(function () {
      setIex('');
      setFmp('');
      setNews('');
      setTheNews('');
      setWebz('');
      _clearInputRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputTheNews, _refInputWebz]);
    }, []),
    _hSetAll = (0, _uiApi.useCallback)(function () {
      setIex(_getRefCompValue(_refInputIex));
      setFmp(_getRefCompValue(_refInputFmp));
      setNews(_getRefCompValue(_refInputNews));
      setTheNews(_getRefCompValue(_refInputTheNews));
      setWebz(_getRefCompValue(_refInputWebz));
      _setWasEnterRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebz]);
    }, []);

  //setIex, setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */

  if (!_isVisible(props)) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_ScrollPane["default"], {
    style: style,
    children: [(0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      style: (0, _extends2["default"])({}, TS.OPEN_CLOSE, S_OPEN_CLOSE),
      caption: "Stock Market",
      children: [(0, _jsxRuntime.jsx)(_PasswordField["default"], (0, _extends2["default"])({}, _crPasswordFieldProps(_ProviderNames.IEX_CLOUD, 35), {
        ref: _refInputIex,
        style: fieldStyle,
        name: "iex-cloud",
        onEnter: setIex
      })), (0, _jsxRuntime.jsx)(_PasswordField["default"], (0, _extends2["default"])({}, _crPasswordFieldProps(_ProviderNames.FMP, 32), {
        ref: _refInputFmp,
        style: fieldStyle,
        name: "fmp-api",
        onEnter: setFmp
      }))]
    }), (0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      style: (0, _extends2["default"])({}, TS.OPEN_CLOSE, S_OPEN_CLOSE),
      caption: "General News",
      children: [(0, _jsxRuntime.jsx)(_PasswordField["default"], (0, _extends2["default"])({}, _crPasswordFieldProps(_ProviderNames.NEWS_API_LONG, 32), {
        ref: _refInputNews,
        style: fieldStyle,
        name: "newsapi.org",
        onEnter: setNews
      })), (0, _jsxRuntime.jsx)(_PasswordField["default"], (0, _extends2["default"])({}, _crPasswordFieldProps(_ProviderNames.THE_NEWS_API, 40), {
        ref: _refInputTheNews,
        style: fieldStyle,
        name: "thenewsapi",
        onEnter: setTheNews
      })), (0, _jsxRuntime.jsx)(_PasswordField["default"], (0, _extends2["default"])({}, _crPasswordFieldProps(_ProviderNames.WEBZ_IO, 36), {
        ref: _refInputWebz,
        style: fieldStyle,
        name: "webz.io",
        onEnter: setWebz
      }))]
    }), (0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
        style: TS.BT.RAISED,
        clDiv: TS.BT.CL_RAISED_DIV,
        caption: "Clear All",
        onClick: _hClearAll
      }), (0, _jsxRuntime.jsx)(_RaisedButton["default"], {
        style: TS.BT.RAISED,
        clDiv: TS.BT.CL_RAISED_DIV,
        isPrimary: true,
        caption: "Set All",
        onClick: _hSetAll
      })]
    })]
  });
};
var _default = CardApiKeys;
exports["default"] = _default;
//# sourceMappingURL=CardApiKeys.js.map