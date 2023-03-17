"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _useFocusRefElementIf = _interopRequireDefault(require("../hooks/useFocusRefElementIf"));
var _ProviderNames = require("../../conf/ProviderNames");
var _ModalPopup = _interopRequireDefault(require("../zhn-moleculs/ModalPopup"));
var _MenuItem = _interopRequireDefault(require("../zhn-atoms/MenuItem"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
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
    onAv = _ref.onAv,
    onNewsApi = _ref.onNewsApi,
    onNewsTop = _ref.onNewsTop,
    onTheNewsSearch = _ref.onTheNewsSearch,
    onTheNewsTop = _ref.onTheNewsTop,
    onStackTagged = _ref.onStackTagged,
    onStackSearch = _ref.onStackSearch,
    onWebz = _ref.onWebz,
    onWebzCountry = _ref.onWebzCountry,
    onClose = _ref.onClose;
  var _refFirstItem = (0, _useFocusRefElementIf["default"])(isShow);
  return (0, _jsxRuntime.jsxs)(_ModalPopup["default"], {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      refBt: _refFirstItem,
      caption: "Blockchain",
      children: [(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.CRYPTO_COMPARE + ": News",
        onClick: onCryptoCompare
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.COIN_STATS + ": News",
        onClick: onCoinStats
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.MESSARI + ": Blockchain News",
        onClick: onMessari
      })]
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.IEX_CLOUD + ": Stock Market News",
      onClick: onIex
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.FMP + ": Stock Market News",
      onClick: onFmp
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.ALPHA_VANTAGE + ": Sentiment",
      onClick: onAv
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.NEWS_API_LONG + ": Search",
      onClick: onNewsApi
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.NEWS_API_LONG + ": Top By",
      onClick: onNewsTop
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.THE_NEWS_API + ": Search",
      onClick: onTheNewsSearch
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.THE_NEWS_API + ": Top By",
      onClick: onTheNewsTop
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.STACK_OVERFLOW + ": Tagged Questions",
      onClick: onStackTagged
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.STACK_OVERFLOW + ": Search Questions",
      onClick: onStackSearch
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.WEBZ_IO + ": News, Blogs",
      onClick: onWebz
    }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
      className: CL_ITEM,
      caption: _ProviderNames.WEBZ_IO + ": By Country, Topic",
      onClick: onWebzCountry
    })]
  });
};
var _default = PanelQuery;
exports["default"] = _default;
//# sourceMappingURL=PanelQuery.js.map