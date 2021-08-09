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

var About = function About(_ref) {
  var isInitShow = _ref.isInitShow,
      store = _ref.store,
      showAction = _ref.showAction,
      hideAction = _ref.hideAction;

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
      rootStyle: S.BROWSER_CAPTION,
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.CryptoCompare, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.CoinStats, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Messari, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.IexApi, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.FmpApi, {
              title: "Financial Modeling Prep"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.NewsApi, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.StackOverflow, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.WebhoseIo, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_TOP,
            children: "Personal API Keys from providers are required."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "API Keys can be set by means off Settings Dialog."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MARGIN_TOP,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK,
            children: "Browsing by new source:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "1",
          description: "Please, click button News in header."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "2",
          description: "Choose a topic and news source."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "3",
          description: "Click a button Load in dialog."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MARGIN_TOP,
          children: "Not all news source support all sortBy values."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S.MARGIN_TOP,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK,
            children: "Browsing by search terms:"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "1",
          description: "Please, click button Query in header."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "2",
          description: "Choose news source in modal pane."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          styleRoot: S.STEP,
          step: "3",
          description: "Click a button Load in dialog."
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