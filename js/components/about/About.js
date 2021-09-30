"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Step = _interopRequireDefault(require("./Step"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ABOUT_PANE = "about-pane";
var CL_SHOW = "show-popup";
var Link = _Comp["default"].Link,
    ItemStack = _Comp["default"].ItemStack;
var PROVIDER_LINKS = [[Link.CryptoCompare], [Link.CoinStats], [Link.Messari], [Link.IexApi], [Link.FmpApi, {
  title: "Financial Modeling Prep"
}], [Link.NewsApi], [Link.StackOverflow], [Link.WebhoseIo]];

var _crLinkItem = function _crLinkItem(_ref, index) {
  var Comp = _ref[0],
      props = _ref[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, (0, _extends2["default"])({}, props))
  }, index);
};

var NEWS_SOURCE_STEP_DESCRIPTIONS = ["Please, click button News in header.", "Choose a topic and news source.", "Click a button Load in dialog."];
var SEARCH_TERM_STEP_DESCRIPTIONS = ["Please, click button Query in header.", "Choose news source in modal pane.", "Click a button Load in dialog."];

var _crStepItem = function _crStepItem(descr, index) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
    step: index + 1,
    description: descr
  }, index);
};

var About = function About(_ref2) {
  var isInitShow = _ref2.isInitShow,
      store = _ref2.store,
      showAction = _ref2.showAction,
      hideAction = _ref2.hideAction;

  var _useState = (0, _react.useState)(isInitShow),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _hClose = (0, _react.useCallback)(function () {
    return setIsShow(false);
  }, []),
      S = (0, _useTheme["default"])(_About["default"]);

  (0, _useListen["default"])(store, function (actionType) {
    switch (actionType) {
      case showAction:
        setIsShow(true);
        break;

      case hideAction:
        setIsShow(false);
        break;

      default:
        return;
    }
  });

  var _className = (0, _crCn["default"])(CL_ABOUT_PANE, [isShow, CL_SHOW]),
      _style = isShow ? S.BLOCK : S.NONE;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, _style, S.ROOT),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].BrowserCaption, {
      style: S.BROWSER_CAPTION,
      caption: "About News Aggregator",
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      className: S.CL_SCROLL_PANE,
      style: S.SCROLL_DIV,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S.DIV_WRAPPER,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: S.DIV_TEXT,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: S.APP_TITLE,
              children: "News Agreggator"
            }), " is web app for browsing news."]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "News headlines providers:\xA0"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemStack, {
            items: PROVIDER_LINKS,
            crItem: _crLinkItem
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MT_8,
            children: "Personal API Keys from providers are required."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "API Keys can be set by means off Settings Dialog."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MT_8,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK,
            children: "Browsing by news source:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemStack, {
          items: NEWS_SOURCE_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MT_8,
          children: "Not all news source support all sortBy values."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MT_8,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK,
            children: "Browsing by search terms:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemStack, {
          items: SEARCH_TERM_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconLogoBar["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK,
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