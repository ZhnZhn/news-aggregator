"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _uiApi = require("../uiApi");
var _getFnByPropName = _interopRequireDefault(require("../../utils/getFnByPropName"));
var _ScrollPane = _interopRequireDefault(require("../zhn/ScrollPane"));
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose"));
var _PasswordField = _interopRequireDefault(require("../zhn-m-input/PasswordField"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_OPEN_CLOSE = {
  lineHeight: 2.2
};
const _hasLengthOrEmpty = length => str => str.length === length || str === '',
  SET_AV_KEY = 'setAvKey',
  SET_FMP_KEY = 'setFmpKey',
  SET_NEWS_KEY = 'setNewsKey',
  SET_THE_NEWS_KEY = 'setTheNewsKey',
  SET_WEBZ_KEY = 'setWebzKey',
  _getKeySetters = data => ({
    setAv: (0, _getFnByPropName.default)(data, SET_AV_KEY),
    setFmp: (0, _getFnByPropName.default)(data, SET_FMP_KEY),
    setNews: (0, _getFnByPropName.default)(data, SET_NEWS_KEY),
    setTheNews: (0, _getFnByPropName.default)(data, SET_THE_NEWS_KEY),
    setWebz: (0, _getFnByPropName.default)(data, SET_WEBZ_KEY)
  });
const _getRefCompValue = ref => ref.current.getValue();
const _clearInputRefs = refs => refs.forEach(ref => ref.current.clear());
const _setWasEnterRefs = refs => refs.forEach(ref => ref.current.setWasEnter());
const _crCaption = (name, maxLength) => {
  const _tokenKey = name.toUpperCase().indexOf('API') === -1 ? 'API Key' : 'Key';
  return `${name} ${_tokenKey} (${maxLength})`;
};
const _crPasswordFieldProps = (name, maxLength) => ({
  caption: _crCaption(name, maxLength),
  maxLength,
  onTest: _hasLengthOrEmpty(maxLength)
});
const CardApiKeys = props => {
  const _refInputAv = (0, _uiApi.useRef)(),
    _refInputFmp = (0, _uiApi.useRef)(),
    _refInputNews = (0, _uiApi.useRef)(),
    _refInputTheNews = (0, _uiApi.useRef)(),
    _refInputWebz = (0, _uiApi.useRef)(),
    {
      isVisible,
      setRefLast,
      style,
      fieldStyle,
      buttonsStyle,
      btStyle,
      data
    } = props,
    {
      setAv,
      setFmp,
      setNews,
      setTheNews,
      setWebz
    } = _getKeySetters(data)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClearAll = (0, _uiApi.useCallback)(() => {
      setAv('');
      setFmp('');
      setNews('');
      setTheNews('');
      setWebz('');
      _clearInputRefs([_refInputAv, _refInputFmp, _refInputNews, _refInputTheNews, _refInputWebz]);
    }, [])
    //setAv, setFmp, setNews, setTheNews, setWebz
    /*eslint-enable react-hooks/exhaustive-deps */
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hSetAll = (0, _uiApi.useCallback)(() => {
      setFmp(_getRefCompValue(_refInputFmp));
      setAv(_getRefCompValue(_refInputAv));
      setNews(_getRefCompValue(_refInputNews));
      setTheNews(_getRefCompValue(_refInputTheNews));
      setWebz(_getRefCompValue(_refInputWebz));
      _setWasEnterRefs([_refInputFmp, _refInputNews, _refInputWebz]);
    }, []);
  //setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */

  return isVisible ? (0, _jsxRuntime.jsxs)(_ScrollPane.default, {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_OpenClose.default, {
      style: S_OPEN_CLOSE,
      caption: "Market News & Sentiment",
      children: (0, _jsxRuntime.jsx)(_PasswordField.default, {
        ..._crPasswordFieldProps(_ProviderNames.ALPHA_VANTAGE, 16),
        refEl: _refInputAv,
        style: fieldStyle,
        name: "alpha-vantage",
        onEnter: setAv
      })
    }), (0, _jsxRuntime.jsx)(_OpenClose.default, {
      style: S_OPEN_CLOSE,
      caption: "Stock Market",
      children: (0, _jsxRuntime.jsx)(_PasswordField.default, {
        ..._crPasswordFieldProps(_ProviderNames.FMP, 32),
        refEl: _refInputFmp,
        style: fieldStyle,
        name: "fmp-api",
        onEnter: setFmp
      })
    }), (0, _jsxRuntime.jsxs)(_OpenClose.default, {
      style: S_OPEN_CLOSE,
      caption: "General News",
      children: [(0, _jsxRuntime.jsx)(_PasswordField.default, {
        ..._crPasswordFieldProps(_ProviderNames.NEWS_API_LONG, 32),
        refEl: _refInputNews,
        style: fieldStyle,
        name: "newsapi.org",
        onEnter: setNews
      }), (0, _jsxRuntime.jsx)(_PasswordField.default, {
        ..._crPasswordFieldProps(_ProviderNames.THE_NEWS_API, 40),
        refEl: _refInputTheNews,
        style: fieldStyle,
        name: "thenewsapi",
        onEnter: setTheNews
      }), (0, _jsxRuntime.jsx)(_PasswordField.default, {
        ..._crPasswordFieldProps(_ProviderNames.WEBZ_IO, 36),
        refEl: _refInputWebz,
        style: fieldStyle,
        name: "webz.io",
        onEnter: setWebz
      })]
    }), (0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [(0, _jsxRuntime.jsx)(_RaisedButton.default, {
        caption: "Clear All",
        onClick: _hClearAll
      }), (0, _jsxRuntime.jsx)(_RaisedButton.default, {
        isPrimary: true,
        refBt: isVisible ? setRefLast : void 0,
        style: btStyle,
        caption: "Set All",
        onClick: _hSetAll
      })]
    })]
  }) : null;
};
var _default = exports.default = CardApiKeys;
//# sourceMappingURL=CardApiKeys.js.map