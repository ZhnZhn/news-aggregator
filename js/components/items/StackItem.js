"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Article = _interopRequireDefault(require("./Article.Style"));

var _has = _interopRequireDefault(require("../has"));

var _useItemGestureSwipeX = _interopRequireDefault(require("./useItemGestureSwipeX"));

var _GestureSwipeX = _interopRequireDefault(require("../zhn-gesture/GestureSwipeX"));

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_WRAPPER = "link-wrapper";
var HAS_TOUCH = _has["default"].HAS_TOUCH;
var _S = {
  BADGE: {
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '1.125rem'
  }
};
var S = {
  NONE: {
    display: 'none'
  },
  ROOT: {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 16,
    lineHeight: 1.5,
    width: '100%',
    marginBottom: 5,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  SVG_CLOSE: {
    "float": 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  ITEM_CAPTION: {
    paddingBottom: 8
  },
  LINK: {
    display: 'block',
    paddingBottom: 8
  },
  SPAN_VERSION: {
    color: '#80c040',
    paddingLeft: 10,
    paddingRight: 10
  },
  BTN_CIRCLE: {
    marginLeft: 10
  },
  SPAN_TAG: {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },
  FISH_BADGE: (0, _extends2["default"])({}, _S.BADGE, {
    color: '#d7bb52'
  }),
  GREEN_BADGE: (0, _extends2["default"])({}, _S.BADGE, {
    color: '#80c040'
  }),
  BLACK_BADGE: (0, _extends2["default"])({}, _S.BADGE, {
    color: 'black'
  })
};
var TOKEN_ANSWER = HAS_TOUCH ? 'A' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "hammer and pick",
  children: "\u2692"
});
var TOKEN_SCORE = HAS_TOUCH ? 'S' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "fish",
  children: "\uD83D\uDC1F"
});
var TOKEN_VIEW = HAS_TOUCH ? 'V' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "wheel of dharma",
  children: "\u2638"
});
var TOKEN_REPUTATION = HAS_TOUCH ? 'R' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "shamrock",
  children: "\u2618"
});

var _fTagItem = function _fTagItem(TS) {
  return function (tag, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S.SPAN_TAG, TS.DESCR),
      children: tag
    }, index);
  };
};

var _fnNoop = function _fnNoop() {};

var StackItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
      onCloseItem = _ref.onCloseItem,
      _ref$onRemoveUnder = _ref.onRemoveUnder,
      onRemoveUnder = _ref$onRemoveUnder === void 0 ? _fnNoop : _ref$onRemoveUnder,
      _ref$onRemoveItem = _ref.onRemoveItem,
      onRemoveItem = _ref$onRemoveItem === void 0 ? _fnNoop : _ref$onRemoveItem;

  var _useState = (0, _react.useState)(false),
      isClosed = _useState[0],
      setIsClosed = _useState[1],
      _hClose = (0, _react.useCallback)(function () {
    onCloseItem(item);
    setIsClosed(true);
  }, []),
      _onGestureSwipeX = (0, _useItemGestureSwipeX["default"])(item, onRemoveItem, _hClose),
      TS = (0, _useTheme["default"])(_Article["default"]),
      _crItem = (0, _react.useMemo)(function () {
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
      _rootStyle = isClosed ? S.NONE : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_GestureSwipeX["default"], {
    style: (0, _extends2["default"])({}, S.ROOT, _rootStyle, TS.HEADER),
    onGesture: _onGestureSwipeX,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.ITEM_CAPTION,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: is_answered ? S.GREEN_BADGE : S.FISH_BADGE,
        children: [TOKEN_ANSWER, "\xA0", answer_count]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: S.FISH_BADGE,
        children: [TOKEN_SCORE, "\xA0", score]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: S.BLACK_BADGE,
        children: [TOKEN_VIEW, "\xA0", view_count]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: S.GREEN_BADGE,
        children: [TOKEN_REPUTATION, "\xA0", reputation]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S.BLACK_BADGE,
        children: display_name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
        style: S.SVG_CLOSE,
        onClick: _hClose
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: CL_WRAPPER,
      style: S.LINK,
      href: link,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
        items: tags,
        crItem: _crItem
      })
    })]
  });
});
var _default = StackItem;
exports["default"] = _default;
//# sourceMappingURL=StackItem.js.map