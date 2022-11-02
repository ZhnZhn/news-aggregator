"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _safeFn = _interopRequireDefault(require("../../utils/safeFn"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("preact/jsx-runtime");

var STR_EMPTY = '',
    _hasLengthOrEmpty = function _hasLengthOrEmpty(length) {
  return function (str) {
    return str.length === length || str === STR_EMPTY;
  };
},
    _onTestIex = _hasLengthOrEmpty(35),
    _onTestFmp = _hasLengthOrEmpty(32),
    _onTestNews = _hasLengthOrEmpty(32),
    _onTestTheNews = _hasLengthOrEmpty(40),
    _onTestWebz = _hasLengthOrEmpty(36),
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
      onClose = props.onClose,
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

  if (!_isVisible(props)) {
    return null;
  }

  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputIex,
        style: fieldStyle,
        name: "iex-cloud",
        caption: "IEX Cloud API Key (35 Symbols)",
        maxLength: 35,
        onTest: _onTestIex,
        onEnter: setIex
      })
    }), (0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputFmp,
        style: fieldStyle,
        name: "fmp-api",
        caption: "FMP API Key (32 Symbols)",
        maxLength: 32,
        onTest: _onTestFmp,
        onEnter: setFmp
      })
    }), (0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputNews,
        style: fieldStyle,
        name: "newsapi",
        caption: "NewsApi API Key (32 Symbols)",
        maxLength: 32,
        onTest: _onTestNews,
        onEnter: setNews
      })
    }), (0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputTheNews,
        style: fieldStyle,
        name: "thenewsapi",
        caption: "TheNewsApi API Key (40 Symbols)",
        maxLength: 40,
        onTest: _onTestTheNews,
        onEnter: setTheNews
      })
    }), (0, _jsxRuntime.jsx)("form", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputWebz,
        style: fieldStyle,
        name: "webz.io",
        caption: "Webz.IO API Key (36 Symbols)",
        maxLength: 36,
        onTest: _onTestWebz,
        onEnter: setWebz
      })
    }), (0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        style: TS.BT.RAISED,
        clDiv: TS.BT.CL_RAISED_DIV,
        caption: "Clear All",
        onClick: _hClearAll
      }), (0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        style: TS.BT.RAISED,
        clDiv: TS.BT.CL_RAISED_DIV,
        caption: "Set All",
        onClick: _hSetAll
      }), (0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        style: TS.BT.RAISED,
        clDiv: TS.BT.CL_RAISED_DIV,
        isPrimary: true,
        caption: "Close",
        onClick: onClose
      })]
    })]
  });
};

var _default = CardApiKeys;
exports["default"] = _default;
//# sourceMappingURL=CardApiKeys.js.map