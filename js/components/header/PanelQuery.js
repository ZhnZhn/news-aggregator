"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ITEM = 'row__topic';

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _focusRefElement = function _focusRefElement(ref) {
  var _el = ref.current;

  if (_el && _isFn(_el.focus)) {
    _el.focus();
  }
};

var PanelQuery = function PanelQuery(_ref) {
  var className = _ref.className,
      paneStyle = _ref.paneStyle,
      isShow = _ref.isShow,
      onCryptoCompare = _ref.onCryptoCompare,
      onCoinStats = _ref.onCoinStats,
      onMessari = _ref.onMessari,
      onIex = _ref.onIex,
      onFmp = _ref.onFmp,
      onNewsApi = _ref.onNewsApi,
      onNewsTop = _ref.onNewsTop,
      onStackTagged = _ref.onStackTagged,
      onStackSearch = _ref.onStackSearch,
      onWebz = _ref.onWebz,
      onWebzCountry = _ref.onWebzCountry,
      onClose = _ref.onClose;

  var _refFirstItem = (0, _uiApi.useRef)(),
      _refPrevEl = (0, _uiApi.useRef)();

  (0, _uiApi.useEffect)(function () {
    if (isShow && !_refPrevEl.current) {
      _refPrevEl.current = document.activeElement;

      _focusRefElement(_refFirstItem);
    } else if (!isShow) {
      _focusRefElement(_refPrevEl);

      _refPrevEl.current = null;
    }
  }, [isShow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].ModalPopup, {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      ref: _refFirstItem,
      className: CL_ITEM,
      caption: "CryptoCompare: News",
      onClick: onCryptoCompare,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "CoinStats: News",
      onClick: onCoinStats,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Messari: Blockchain News",
      onClick: onMessari,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "IEX Cloud: Stock Market News",
      onClick: onIex,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "FMP: Stock Market News",
      onClick: onFmp,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Search",
      onClick: onNewsApi,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Top By",
      onClick: onNewsTop,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Tagged Questions",
      onClick: onStackTagged,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Search Questions",
      onClick: onStackSearch,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Webz.io: News, Blogs",
      onClick: onWebz,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Webz.io: By Country, Topic",
      onClick: onWebzCountry,
      onClose: onClose
    })]
  });
};

var _default = PanelQuery;
exports["default"] = _default;
//# sourceMappingURL=PanelQuery.js.map