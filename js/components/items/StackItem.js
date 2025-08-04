"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _fUseKey = require("../hooks/fUseKey");
var _has = require("../has");
var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));
var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));
var _SvgX = _interopRequireDefault(require("../zhn/SvgX"));
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
    position: 'relative',
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
    ..._crStyle.S_COLOR_BLACK,
    display: 'inline-block',
    backgroundColor: 'gray',
    padding: '4px 8px',
    margin: '6px 8px 2px 8px',
    borderRadius: 16
  },
  _crItemBadge = color => ({
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '1.125rem',
    color
  }),
  S_FISH_BADGE = _crItemBadge('#d7bb52'),
  S_GREEN_BADGE = _crItemBadge('#80c040'),
  S_BLACK_BADGE = _crItemBadge(_crStyle.COLOR_BLACK);
const TOKEN_ANSWER = _has.HAS_TOUCH_EVENTS ? 'A' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "hammer and pick",
  children: "\u2692"
});
const TOKEN_SCORE = _has.HAS_TOUCH_EVENTS ? 'S' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "fish",
  children: "\uD83D\uDC1F"
});
const TOKEN_VIEW = _has.HAS_TOUCH_EVENTS ? 'V' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "wheel of dharma",
  children: "\u2638"
});
const TOKEN_REPUTATION = _has.HAS_TOUCH_EVENTS ? 'R' : (0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "shamrock",
  children: "\u2618"
});
const _crTagItem = (tag, index) => (0, _jsxRuntime.jsx)("span", {
  className: _Item.CL_ITEM_DESCR,
  style: S_SPAN_TAG,
  children: tag
}, index);
const StackItem = _ref => {
  let {
    item,
    onCloseItem,
    onRemoveUnder = _uiApi.FN_NOOP,
    onRemoveItem = _uiApi.FN_NOOP
  } = _ref;
  const [isClosed, toggleIsClosed] = (0, _useToggle.default)(!1)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClose = (0, _uiApi.useCallback)(() => {
      onCloseItem(item);
      toggleIsClosed(!0);
    }, [])
    //item, onCloseIte, setClosed
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _fUseKey.useKeyDelete)(_hClose),
    _onGestureSwipeX = (0, _useItemGestureSwipeX.default)(item, onRemoveUnder, _hClose);
  const {
      is_answered,
      answer_count,
      score,
      view_count,
      title,
      link,
      owner,
      tags
    } = item || {},
    {
      reputation,
      display_name
    } = owner || {},
    _style = isClosed ? _Item.S_NONE : void 0;
  return (0, _jsxRuntime.jsxs)(_GestureSwipeX.default, {
    className: _Item.CL_ITEM_HEADER,
    style: {
      ...S_ROOT,
      ..._style
    },
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
      }), (0, _jsxRuntime.jsx)(_SvgX.default, {
        style: S_SVG_CLOSE,
        onClick: _hClose
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      children: title
    }), (0, _jsxRuntime.jsx)(_SafeLink.default, {
      className: _Item.CL_LINK_WRAPPER,
      style: S_LINK,
      href: link,
      onKeyDown: _hKeyDown,
      children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
        items: tags,
        crItem: _crTagItem
      })
    })]
  });
};
var _default = exports.default = StackItem;
//# sourceMappingURL=StackItem.js.map