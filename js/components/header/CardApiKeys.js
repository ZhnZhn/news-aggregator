"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _safeFn = _interopRequireDefault(require("../../utils/safeFn"));

var _Comp = _interopRequireDefault(require("../Comp"));

var STR_EMPTY = '',
    _onTestLengthOrEmpty = function _onTestLengthOrEmpty(length) {
  return function (str) {
    return str.length === length || str === STR_EMPTY ? true : false;
  };
},
    _onTestIexApi = _onTestLengthOrEmpty(35),
    _onTestNewsApi = _onTestLengthOrEmpty(32),
    _onTestWebhose = _onTestLengthOrEmpty(36),
    SET_IEX_KEY = 'setIexKey',
    SET_NEWS_KEY = 'setNewsKey',
    SET_WEBHOSE_KEY = 'setWebhoseKey',
    _getKeySetters = function _getKeySetters(data) {
  return {
    setIexKey: (0, _safeFn["default"])(data, SET_IEX_KEY),
    setNewsKey: (0, _safeFn["default"])(data, SET_NEWS_KEY),
    setWebhoseKey: (0, _safeFn["default"])(data, SET_WEBHOSE_KEY)
  };
};

var CardApiKeys = function CardApiKeys(props) {
  var _refInputIex = (0, _react.useRef)(),
      _refInputNews = (0, _react.useRef)(),
      _refInputWebhose = (0, _react.useRef)(),
      style = props.style,
      fieldStyle = props.fieldStyle,
      buttonsStyle = props.buttonsStyle,
      TS = props.TS,
      data = props.data,
      onClose = props.onClose,
      _getKeySetters2 = _getKeySetters(data),
      setIexKey = _getKeySetters2.setIexKey,
      setNewsKey = _getKeySetters2.setNewsKey,
      setWebhoseKey = _getKeySetters2.setWebhoseKey,
      _hSetAllAndClose = (0, _react.useCallback)(function () {
    setIexKey(_refInputIex.current.getValue());
    setNewsKey(_refInputNews.current.getValue());
    setWebhoseKey(_refInputWebhose.current.getValue());
    onClose();
  });

  return _react["default"].createElement("div", {
    style: style
  }, _react["default"].createElement("form", null, _react["default"].createElement(_Comp["default"].SecretField, {
    ref: _refInputIex,
    rootStyle: fieldStyle,
    name: "iex-cloud",
    caption: "IEX Cloud API Key (35 Symbols)",
    maxLength: 35,
    errorMsg: "35 symbols must be",
    onTest: _onTestIexApi,
    onEnter: setIexKey
  })), _react["default"].createElement("form", null, _react["default"].createElement(_Comp["default"].SecretField, {
    ref: _refInputNews,
    rootStyle: fieldStyle,
    name: "newsapi",
    caption: "NewsApi API Key (32 Symbols)",
    maxLength: 32,
    errorMsg: "32 symbols must be",
    onTest: _onTestNewsApi,
    onEnter: setNewsKey
  })), _react["default"].createElement("form", null, _react["default"].createElement(_Comp["default"].SecretField, {
    ref: _refInputWebhose,
    rootStyle: fieldStyle,
    name: "webhose",
    caption: "Webhose API Key (36 Symbols)",
    maxLength: 36,
    errorMsg: "36 symbols must be",
    onTest: _onTestWebhose,
    onEnter: setWebhoseKey
  })), _react["default"].createElement("div", {
    style: buttonsStyle
  }, _react["default"].createElement(_Comp["default"].RaisedButton, {
    rootStyle: TS.BT.RAISED_ROOT,
    clDiv: TS.BT.CL_RAISED_DIV,
    caption: "Set All & Close",
    onClick: _hSetAllAndClose
  }), _react["default"].createElement(_Comp["default"].RaisedButton, {
    rootStyle: TS.BT.RAISED_ROOT,
    clDiv: TS.BT.CL_RAISED_DIV,
    isPrimary: true,
    caption: "Close",
    onClick: onClose
  })));
};

var _default = CardApiKeys;
exports["default"] = _default;
//# sourceMappingURL=CardApiKeys.js.map