"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _has = require("../has");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _crStyle = require("../crStyle");
var _About = require("./About.Style");
var _Comp = _interopRequireDefault(require("../Comp"));
var _Links = require("../links/Links");
var _Step = _interopRequireDefault(require("./Step"));
var _LogoBar = _interopRequireDefault(require("./LogoBar"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ABOUT_PANE = "about-pane",
  S_BROWSER_CAPTION = {
    paddingLeft: 12,
    textAlign: 'left'
  },
  _crToken = (token, hotKey) => _has.HAS_WIDE_SCREEN ? token + " [" + hotKey + "]" : token;
const {
  ItemStack
} = _Comp.default;
const PROVIDER_LINKS = [[_Links.CryptoCompareLink], [_Links.CoinStatsLink], [_Links.MessariLink], [_Links.IexApiLink], [_Links.FmpApiLink, {
  title: _ProviderNames.FMP_LONG
}], [_Links.AlphaVantageLink], [_Links.NewsApiLink], [_Links.TheNewsApiLink], [_Links.DevToLink], [_Links.StackOverflowLink], [_Links.WebzLink], [_Links.RedditLink]];
const _crLinkItem = (_ref, index) => {
  let [Comp, props] = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    children: (0, _jsxRuntime.jsx)(Comp, {
      ...props
    })
  }, index);
};
const NEWS_SOURCE_STEP_DESCRIPTIONS = ["Please, click button " + _crToken('QUERY', 'q') + " in header.", "Choose headlines source.", "Click button " + _crToken('LOAD', 'l') + " in dialog."],
  API_KEYS_SETTINGS_MSG = "API Keys can be set in the " + _crToken('Settings Dialog', 's');
const _crStepItem = (descr, index) => (0, _jsxRuntime.jsx)(_Step.default, {
  step: index + 1,
  description: descr
}, index);
const About = _ref2 => {
  let {
    isInitShow,
    useMsAbout
  } = _ref2;
  const [isShow, setIsShowTrue, setIsShowFalse] = (0, _useBool.default)(isInitShow),
    TS = (0, _useTheme.default)(_About.styleConfig);
  useMsAbout(msAbout => {
    if (msAbout) {
      const _setIs = msAbout.is ? setIsShowTrue : setIsShowFalse;
      _setIs();
    }
  });
  const [_className, _showHideStyle] = (0, _crStyle.crShowHide)(isShow, CL_ABOUT_PANE);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: {
      ..._showHideStyle,
      ...TS.ROOT
    },
    children: [(0, _jsxRuntime.jsx)(_Comp.default.BrowserCaption, {
      style: {
        ...S_BROWSER_CAPTION,
        ...TS.BROWSER_CAPTION
      },
      caption: "About News Aggregator",
      onClose: setIsShowFalse
    }), (0, _jsxRuntime.jsx)(_Comp.default.ScrollPane, {
      style: _About.S_SCROLL_DIV,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: _About.S_DIV_WRAPPER,
        children: [(0, _jsxRuntime.jsxs)("div", {
          style: _About.S_LH_14,
          children: [(0, _jsxRuntime.jsxs)("p", {
            children: [(0, _jsxRuntime.jsx)("span", {
              style: _About.S_APP_TITLE,
              children: "News Agreggator"
            }), " is a web app for browsing news, blogs, social media headlines."]
          }), (0, _jsxRuntime.jsx)("p", {
            style: _About.S_MT_8,
            children: "Available headlines providers:\xA0"
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
            children: "Personal API Keys from some providers are required."
          }), (0, _jsxRuntime.jsx)("p", {
            children: API_KEYS_SETTINGS_MSG
          })]
        }), (0, _jsxRuntime.jsx)("p", {
          style: _About.S_MT_8,
          children: (0, _jsxRuntime.jsx)("span", {
            style: _About.S_BLACK,
            children: "Browsing by source:"
          })
        }), (0, _jsxRuntime.jsx)(ItemStack, {
          items: NEWS_SOURCE_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), (0, _jsxRuntime.jsx)(_LogoBar.default, {}), (0, _jsxRuntime.jsx)("p", {
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
exports.default = _default;
//# sourceMappingURL=About.js.map