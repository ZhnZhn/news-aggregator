"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _has = require("../has");
var _useShowHideComponent = _interopRequireDefault(require("../hooks/useShowHideComponent"));
var _crStyle = require("../crStyle");
var _Comp = _interopRequireDefault(require("../Comp"));
var _Links = require("../links/Links");
var _Step = _interopRequireDefault(require("./Step"));
var _LogoBar = _interopRequireDefault(require("./LogoBar"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ABOUT_PANE = (0, _crStyle.crPaneCn)("about-pane"),
  S_BROWSER_CAPTION = {
    paddingLeft: 12,
    textAlign: 'left'
  },
  S_SCROLL_DIV = {
    height: '92%',
    paddingTop: 8,
    paddingRight: 10,
    overflowY: 'auto'
  },
  S_DIV_WRAPPER = {
    ..._crStyle.S_COLOR_BLACK,
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight: 1.4,
    fontWeight: 'bold'
  },
  S_LH_14 = {
    lineHeight: 1.4
  },
  S_LH_18 = {
    lineHeight: 1.8
  },
  S_APP_TITLE = {
    color: '#80c040'
  },
  S_MT_8 = {
    marginTop: 8
  },
  _crToken = (token, hotKey) => _has.HAS_WIDE_SCREEN ? `${token} [${hotKey}]` : token;
const {
  ItemStack
} = _Comp.default;
const PROVIDER_LINKS = [[_Links.CryptoCompareLink], [_Links.CoinStatsLink], [_Links.MessariLink], [_Links.FmpApiLink, {
  title: _ProviderNames.FMP_LONG
}], [_Links.AlphaVantageLink], [_Links.PlgLink], [_Links.NewsApiLink], [_Links.TheNewsApiLink], [_Links.DevToLink], [_Links.StackOverflowLink], [_Links.WebzLink], [_Links.RedditLink]];
const _crLinkItem = (_ref, index) => {
  let [Comp, props] = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    children: (0, _jsxRuntime.jsx)(Comp, {
      ...props,
      tabIndex: "0"
    })
  }, index);
};
const NEWS_SOURCE_STEP_DESCRIPTIONS = [`Please, click button ${_crToken('QUERY', 'q')} in header.`, "Choose headlines source.", `Click button ${_crToken('LOAD', 'l')} in dialog.`],
  API_KEYS_SETTINGS_MSG = `API Keys can be set in the ${_crToken('Settings Dialog', 's')}`;
const _crStepItem = (descr, index) => (0, _jsxRuntime.jsx)(_Step.default, {
  step: index + 1,
  description: descr
}, index);
const About = _ref2 => {
  let {
    isInitShow,
    useMsAbout
  } = _ref2;
  const [isShow, showAbout, hideAbout, hKeyDown] = (0, _useShowHideComponent.default)(isInitShow);
  useMsAbout(msAbout => {
    if (msAbout) {
      const _setIs = msAbout.is ? showAbout : hideAbout;
      _setIs();
    }
  });
  const [_className, _showHideStyle] = (0, _crStyle.crShowHide)(isShow, CL_ABOUT_PANE);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: _showHideStyle,
    role: "presentation",
    onKeyDown: hKeyDown,
    children: [(0, _jsxRuntime.jsx)(_Comp.default.BrowserCaption, {
      style: S_BROWSER_CAPTION,
      caption: "About News Aggregator",
      onClose: hideAbout
    }), (0, _jsxRuntime.jsx)(_Comp.default.ScrollPane, {
      style: S_SCROLL_DIV,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: S_DIV_WRAPPER,
        children: [(0, _jsxRuntime.jsxs)("div", {
          style: S_LH_14,
          children: [(0, _jsxRuntime.jsxs)("p", {
            children: [(0, _jsxRuntime.jsx)("span", {
              style: S_APP_TITLE,
              children: "News Agreggator"
            }), " is a web app for browsing news, blogs, social media headlines."]
          }), (0, _jsxRuntime.jsx)("p", {
            style: S_MT_8,
            children: "Available headlines providers:\xA0"
          })]
        }), (0, _jsxRuntime.jsx)("div", {
          style: S_LH_18,
          children: (0, _jsxRuntime.jsx)(ItemStack, {
            items: PROVIDER_LINKS,
            crItem: _crLinkItem
          })
        }), (0, _jsxRuntime.jsxs)("div", {
          style: S_LH_14,
          children: [(0, _jsxRuntime.jsx)("p", {
            style: S_MT_8,
            children: "Personal API Keys from some providers are required."
          }), (0, _jsxRuntime.jsx)("p", {
            children: API_KEYS_SETTINGS_MSG
          })]
        }), (0, _jsxRuntime.jsx)("p", {
          style: S_MT_8,
          children: (0, _jsxRuntime.jsx)("span", {
            style: _crStyle.S_COLOR_BLACK,
            children: "Browsing by source:"
          })
        }), (0, _jsxRuntime.jsx)(ItemStack, {
          items: NEWS_SOURCE_STEP_DESCRIPTIONS,
          crItem: _crStepItem
        }), (0, _jsxRuntime.jsx)(_LogoBar.default, {}), (0, _jsxRuntime.jsx)("p", {
          children: (0, _jsxRuntime.jsx)("span", {
            style: _crStyle.S_COLOR_BLACK,
            children: "*Logos Fair Use."
          })
        })]
      })
    })]
  });
};
var _default = exports.default = About;
//# sourceMappingURL=About.js.map