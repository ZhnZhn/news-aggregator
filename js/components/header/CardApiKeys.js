"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _safeFn = _interopRequireDefault(require("../../utils/safeFn"));

var _Comp = _interopRequireDefault(require("../Comp"));

var STR_EMPTY = '',
    _hasLengthOrEmpty = function _hasLengthOrEmpty(length) {
  return function (str) {
    return str.length === length || str === STR_EMPTY ? true : false;
  };
},
    _onTestIex = _hasLengthOrEmpty(35),
    _onTestFmp = _hasLengthOrEmpty(32),
    _onTestNews = _hasLengthOrEmpty(32),
    _onTestWebhose = _hasLengthOrEmpty(36),
    SET_IEX_KEY = 'setIexKey',
    SET_FMP_KEY = 'setFmpKey',
    SET_NEWS_KEY = 'setNewsKey',
    SET_WEBHOSE_KEY = 'setWebhoseKey',
    _getKeySetters = function _getKeySetters(data) {
  return {
    setIex: (0, _safeFn["default"])(data, SET_IEX_KEY),
    setFmp: (0, _safeFn["default"])(data, SET_FMP_KEY),
    setNews: (0, _safeFn["default"])(data, SET_NEWS_KEY),
    setWebhose: (0, _safeFn["default"])(data, SET_WEBHOSE_KEY)
  };
};

var _isVisible = function _isVisible(_ref) {
  var isSelected = _ref.isSelected,
      isShow = _ref.isShow;
  return isShow && isSelected;
};

var CardApiKeys = function CardApiKeys(props) {
  var _refInputIex = (0, _react.useRef)(),
      _refInputFmp = (0, _react.useRef)(),
      _refInputNews = (0, _react.useRef)(),
      _refInputWebhose = (0, _react.useRef)(),
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
      setWebhose = _getKeySetters2.setWebhose,
      _hClearAll = (0, _react.useCallback)(function () {
    setIex('');
    setFmp('');
    setNews('');
    setWebhose('');

    _refInputIex.current.clear();

    _refInputFmp.current.clear();

    _refInputNews.current.clear();

    _refInputWebhose.current.clear();
  }, []),
      _hSetAll = (0, _react.useCallback)(function () {
    setIex(_refInputIex.current.getValue());
    setNews(_refInputNews.current.getValue());
    setWebhose(_refInputWebhose.current.getValue());

    _refInputIex.current.setWasEnter();

    _refInputNews.current.setWasEnter();

    _refInputWebhose.current.setWasEnter();
  }, []);

  if (!_isVisible(props)) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputIex,
        rootStyle: fieldStyle,
        name: "iex-cloud",
        caption: "IEX Cloud API Key (35 Symbols)",
        maxLength: 35 //errorMsg="35 symbols must be"
        ,
        onTest: _onTestIex,
        onEnter: setIex
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputFmp,
        rootStyle: fieldStyle,
        name: "fmp-api",
        caption: "FMP API Key (32 Symbols)",
        maxLength: 32 //errorMsg="35 symbols must be"
        ,
        onTest: _onTestFmp,
        onEnter: setFmp
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputNews,
        rootStyle: fieldStyle,
        name: "newsapi",
        caption: "NewsApi API Key (32 Symbols)",
        maxLength: 32 //errorMsg="32 symbols must be"
        ,
        onTest: _onTestNews,
        onEnter: setNews
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputWebhose,
        rootStyle: fieldStyle,
        name: "webhose",
        caption: "Webhose API Key (36 Symbols)",
        maxLength: 36 //errorMsg="36 symbols must be"
        ,
        onTest: _onTestWebhose,
        onEnter: setWebhose
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: buttonsStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        rootStyle: TS.BT.RAISED_ROOT,
        clDiv: TS.BT.CL_RAISED_DIV,
        caption: "Clear All",
        onClick: _hClearAll
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        rootStyle: TS.BT.RAISED_ROOT,
        clDiv: TS.BT.CL_RAISED_DIV,
        caption: "Set All",
        onClick: _hSetAll
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        rootStyle: TS.BT.RAISED_ROOT,
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