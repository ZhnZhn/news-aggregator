"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _About = require("./About.Style");
var _Comp = _interopRequireDefault(require("../Comp"));
var _Links = require("../links/Links");
var _Step = _interopRequireDefault(require("./Step"));
var _LogoBar = _interopRequireDefault(require("./LogoBar"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ABOUT_PANE = "about-pane";
const CL_SHOW = "show-popup";
const S_BROWSER_CAPTION = {
  paddingLeft: 12,
  textAlign: 'left'
};
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
const NEWS_SOURCE_STEP_DESCRIPTIONS = ["Please, click button News in header.", "Choose a topic and news source.", "Click a button Load in dialog."];
const SEARCH_TERM_STEP_DESCRIPTIONS = ["Please, click button Query in header.", "Choose news source in modal pane.", "Click a button Load in dialog."];
const _crStepItem = (descr, index) => (0, _jsxRuntime.jsx)(_Step.default, {
  step: index + 1,
  description: descr
}, index);
const About = _ref2 => {
  let {
    isInitShow,
    store,
    useMsAbout,
    hideAction
  } = _ref2;
  const [isShow, setIsShowTrue, setIsShowFalse] = (0, _useBool.default)(isInitShow),
    TS = (0, _useTheme.default)(_About.styleConfig);
  useMsAbout(msAbout => {
    if (msAbout && msAbout.is === true) {
      setIsShowTrue();
    }
  });
  (0, _useListen.default)(store, actionType => {
    if (actionType === hideAction) {
      setIsShowFalse();
    }
  });
  const _className = (0, _crCn.default)(CL_ABOUT_PANE, [isShow, CL_SHOW]),
    _style = isShow ? _About.S_BLOCK : _About.S_NONE;
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: {
      ..._style,
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