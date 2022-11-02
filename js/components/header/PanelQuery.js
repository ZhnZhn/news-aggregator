"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_ITEM = 'row__topic';

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
      onTheNewsTop = _ref.onTheNewsTop,
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
      (0, _uiApi.focusRefElement)(_refFirstItem);
    } else if (!isShow) {
      (0, _uiApi.focusRefElement)(_refPrevEl);
      _refPrevEl.current = null;
    }
  }, [isShow]);
  return (0, _jsxRuntime.jsxs)(_Comp["default"].ModalPopup, {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      ref: _refFirstItem,
      className: CL_ITEM,
      caption: "CryptoCompare: News",
      onClick: onCryptoCompare,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "CoinStats: News",
      onClick: onCoinStats,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Messari: Blockchain News",
      onClick: onMessari,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "IEX Cloud: Stock Market News",
      onClick: onIex,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "FMP: Stock Market News",
      onClick: onFmp,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Search",
      onClick: onNewsApi,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Top By",
      onClick: onNewsTop,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "TheNewsApi: Top By",
      onClick: onTheNewsTop,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Tagged Questions",
      onClick: onStackTagged,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Search Questions",
      onClick: onStackSearch,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Webz.io: News, Blogs",
      onClick: onWebz,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
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