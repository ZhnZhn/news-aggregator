"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _About = require("./About.Style");

var _Comp = _interopRequireDefault(require("../Comp"));

var _Step = _interopRequireDefault(require("./Step"));

var _LogoBar = _interopRequireDefault(require("./LogoBar"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_ABOUT_PANE = "about-pane";
var CL_SHOW = "show-popup";
var Link = _Comp["default"].Link,
    ItemStack = _Comp["default"].ItemStack;
var PROVIDER_LINKS = [[Link.CryptoCompare], [Link.CoinStats], [Link.Messari], [Link.IexApi], [Link.FmpApi, {
  title: "Financial Modeling Prep"
}], [Link.NewsApi], [Link.StackOverflow], [Link.Webz]];

var _crLinkItem = function _crLinkItem(_ref, index) {
  var Comp = _ref[0],
      props = _ref[1];
  return (0, _jsxRuntime.jsx)("div", {
    children: (0, _jsxRuntime.jsx)(Comp, (0, _extends2["default"])({}, props))
  }, index);
};

var NEWS_SOURCE_STEP_DESCRIPTIONS = ["Please, click button News in header.", "Choose a topic and news source.", "Click a button Load in dialog."];
var SEARCH_TERM_STEP_DESCRIPTIONS = ["Please, click button Query in header.", "Choose news source in modal pane.", "Click a button Load in dialog."];

var _crStepItem = function _crStepItem(descr, index) {
  return (0, _jsxRuntime.jsx)(_Step["default"], {
    step: index + 1,
    description: descr
  }, index);
};

var About = function About(_ref2) {
  var isInitShow = _ref2.isInitShow,
      store = _ref2.store,
      showAction = _ref2.showAction,
      hideAction = _ref2.hideAction;

  var _useBool = (0, _useBool2["default"])(isInitShow),
      isShow = _useBool[0],
      setIsShowTrue = _useBool[1],
      setIsShowFalse = _useBool[2],
      TS = (0, _useTheme["default"])(_About.styleConfig);

  (0, _useListen["default"])(store, function (actionType) {
    if (actionType === showAction) {
      setIsShowTrue();
    } else if (actionType === hideAction) {
      setIsShowFalse();
    }
  });

  var _className = (0, _crCn["default"])(CL_ABOUT_PANE, [isShow, CL_SHOW]),
      _style = isShow ? _About.S_BLOCK : _About.S_NONE;

  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, _style, TS.ROOT),
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].BrowserCaption, {
      style: TS.BROWSER_CAPTION,
      caption: "About News Aggregator",
      onClose: setIsShowFalse
    }), (0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      style: _About.S_SCROLL_DIV,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: _About.S_DIV_WRAPPER,
        children: [(0, _jsxRuntime.jsxs)("div", {
          style: _About.S_LH_14,
          children: [(0, _jsxRuntime.jsxs)("p", {
            children: [(0, _jsxRuntime.jsx)("span", {
              style: _About.S_APP_TITLE,
              children: "News Agreggator"
            }), " is web app for browsing news."]
          }), (0, _jsxRuntime.jsx)("p", {
            children: "News headlines providers:\xA0"
          })]
        }), (0, _jsxRuntime.jsx)("div", {
          style: _About.S_LH_18,
          children: (0, _jsxRuntime.jsx)(ItemStack, {
            items: PROVIDER_LINKS,
            crItem: _crLinkItem
          })
        }), (0, _jsxRuntime.jsxs)("div", {
          style: _About.S_LH_14,
          children: [(0, _jsxRuntime.jsx)("p", {
            style: _About.S_MT_8,
            children: "Personal API Keys from providers are required."
          }), (0, _jsxRuntime.jsx)("p", {
            children: "API Keys can be set by means off Settings Dialog."
          })]
        }), (0, _jsxRuntime.jsx)("p", {
          style: _About.S_MT_8,
          children: (0, _jsxRuntime.jsx)("span", {
            style: _About.S_BLACK,
            children: "Browsing by news source:"
          })
        }), (0, _jsxRuntime.jsx)(ItemStack, {
          items: NEWS_SOURCE_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), (0, _jsxRuntime.jsxs)("div", {
          style: _About.S_LH_14,
          children: [(0, _jsxRuntime.jsx)("p", {
            style: _About.S_MT_8,
            children: "Not all news source support all sortBy values."
          }), (0, _jsxRuntime.jsx)("p", {
            children: (0, _jsxRuntime.jsx)("span", {
              style: TS.BLACK,
              children: "Browsing by search terms:"
            })
          })]
        }), (0, _jsxRuntime.jsx)(ItemStack, {
          items: SEARCH_TERM_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), (0, _jsxRuntime.jsx)(_LogoBar["default"], {}), (0, _jsxRuntime.jsx)("p", {
          children: (0, _jsxRuntime.jsx)("span", {
            style: _About.S_BLACK,
            children: "*Logos Fair Use."
          })
        })]
      })
    })]
  });
};

var _default = About;
exports["default"] = _default;
//# sourceMappingURL=About.js.map