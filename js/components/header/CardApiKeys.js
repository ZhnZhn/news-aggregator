"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _safeFn = _interopRequireDefault(require("../../utils/safeFn"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

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

    _clearInputRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebhose]);
  }, []),
      _hSetAll = (0, _react.useCallback)(function () {
    setIex(_getRefCompValue(_refInputIex));
    setFmp(_getRefCompValue(_refInputFmp));
    setNews(_getRefCompValue(_refInputNews));
    setWebhose(_getRefCompValue(_refInputWebhose));

    _setWasEnterRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebhose]);
  }, []);

  if (!_isVisible(props)) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputIex,
        style: fieldStyle,
        name: "iex-cloud",
        caption: "IEX Cloud API Key (35 Symbols)",
        maxLength: 35,
        onTest: _onTestIex,
        onEnter: setIex
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputFmp,
        style: fieldStyle,
        name: "fmp-api",
        caption: "FMP API Key (32 Symbols)",
        maxLength: 32,
        onTest: _onTestFmp,
        onEnter: setFmp
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputNews,
        style: fieldStyle,
        name: "newsapi",
        caption: "NewsApi API Key (32 Symbols)",
        maxLength: 32,
        onTest: _onTestNews,
        onEnter: setNews
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].PasswordField, {
        ref: _refInputWebhose,
        style: fieldStyle,
        name: "webhose",
        caption: "Webhose API Key (36 Symbols)",
        maxLength: 36,
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