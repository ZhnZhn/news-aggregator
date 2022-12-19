"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useKeyDelete = _interopRequireDefault(require("../hooks/useKeyDelete"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Article = _interopRequireDefault(require("./Article.Style"));
var _has = require("../has");
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));
var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));
var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));
var _SafeLink = _interopRequireDefault(require("../zhn-atoms/SafeLink"));
var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_WRAPPER = "link-wrapper",
  _S_BADGE = {
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '1.125rem'
  },
  S_NONE = {
    display: 'none'
  },
  S_ROOT = {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    width: '100%',
    padding: '8px 4px 16px 16px',
    marginBottom: 5,
    lineHeight: 1.5,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    top: 8,
    right: 0
  },
  S_ITEM_CAPTION = {
    paddingBottom: 8
  },
  S_LINK = {
    display: 'block',
    paddingBottom: 8
  },
  S_SPAN_TAG = {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    padding: '4px 8px',
    margin: '6px 8px 2px 8px',
    borderRadius: 16
  },
  S_FISH_BADGE = (0, _extends2["default"])({}, _S_BADGE, {
    color: '#d7bb52'
  }),
  S_GREEN_BADGE = (0, _extends2["default"])({}, _S_BADGE, {
    color: '#80c040'
  }),
  S_BLACK_BADGE = (0, _extends2["default"])({}, _S_BADGE, {
    color: 'black'
  });
var TOKEN_ANSWER = _has.HAS_TOUCH_EVENTS ? 'A' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "hammer and pick",
  children: "\u2692"
});
var TOKEN_SCORE = _has.HAS_TOUCH_EVENTS ? 'S' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "fish",
  children: "\uD83D\uDC1F"
});
var TOKEN_VIEW = _has.HAS_TOUCH_EVENTS ? 'V' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "wheel of dharma",
  children: "\u2638"
});
var TOKEN_REPUTATION = _has.HAS_TOUCH_EVENTS ? 'R' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "shamrock",
  children: "\u2618"
});
var _fTagItem = function _fTagItem(TS) {
  return function (tag, index) {
    return (0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S_SPAN_TAG, TS.DESCR),
      children: tag
    }, index);
  };
};
var FN_NOOP = function FN_NOOP() {};
var StackItem = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
    onCloseItem = _ref.onCloseItem,
    _ref$onRemoveUnder = _ref.onRemoveUnder,
    onRemoveUnder = _ref$onRemoveUnder === void 0 ? FN_NOOP : _ref$onRemoveUnder,
    _ref$onRemoveItem = _ref.onRemoveItem,
    onRemoveItem = _ref$onRemoveItem === void 0 ? FN_NOOP : _ref$onRemoveItem;
  var _useToggle = (0, _useToggle2["default"])(false),
    isClosed = _useToggle[0],
    toggleIsClosed = _useToggle[1],
    _hClose = (0, _uiApi.useCallback)(function () {
      onCloseItem(item);
      toggleIsClosed(true);
    }, []),
    _hKeyDown = (0, _useKeyDelete["default"])(_hClose),
    _onGestureSwipeX = (0, _useItemGestureSwipeX["default"])(item, onRemoveUnder, _hClose),
    TS = (0, _useTheme["default"])(_Article["default"]),
    _crItem = (0, _uiApi.useMemo)(function () {
      return _fTagItem(TS);
    }, [TS]);
  var _ref2 = item || {},
    is_answered = _ref2.is_answered,
    answer_count = _ref2.answer_count,
    score = _ref2.score,
    view_count = _ref2.view_count,
    title = _ref2.title,
    link = _ref2.link,
    owner = _ref2.owner,
    tags = _ref2.tags,
    _ref3 = owner || {},
    reputation = _ref3.reputation,
    display_name = _ref3.display_name,
    _style = (0, _crStyle["default"])([isClosed, S_NONE]);
  return (0, _jsxRuntime.jsxs)(_GestureSwipeX["default"], {
    style: (0, _extends2["default"])({}, S_ROOT, _style, TS.HEADER),
    onGesture: _onGestureSwipeX,
    children: [(0, _jsxRuntime.jsxs)("div", {
      style: S_ITEM_CAPTION,
      children: [(0, _jsxRuntime.jsxs)("span", {
        style: is_answered ? S_GREEN_BADGE : S_FISH_BADGE,
        children: [TOKEN_ANSWER, "\xA0", answer_count]
      }), (0, _jsxRuntime.jsxs)("span", {
        style: S_FISH_BADGE,
        children: [TOKEN_SCORE, "\xA0", score]
      }), (0, _jsxRuntime.jsxs)("span", {
        style: S_BLACK_BADGE,
        children: [TOKEN_VIEW, "\xA0", view_count]
      }), (0, _jsxRuntime.jsxs)("span", {
        style: S_GREEN_BADGE,
        children: [TOKEN_REPUTATION, "\xA0", reputation]
      }), (0, _jsxRuntime.jsx)("span", {
        style: S_BLACK_BADGE,
        children: display_name
      }), (0, _jsxRuntime.jsx)(_SvgX["default"], {
        style: S_SVG_CLOSE,
        onClick: _hClose
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      children: title
    }), (0, _jsxRuntime.jsx)(_SafeLink["default"], {
      className: CL_WRAPPER,
      style: S_LINK,
      href: link,
      onKeyDown: _hKeyDown,
      children: (0, _jsxRuntime.jsx)(_ItemStack["default"], {
        items: tags,
        crItem: _crItem
      })
    })]
  });
});
var _default = StackItem;
exports["default"] = _default;
//# sourceMappingURL=StackItem.js.map