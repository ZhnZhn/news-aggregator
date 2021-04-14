"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Article = _interopRequireDefault(require("./Article.Style"));

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _withDnD = _interopRequireDefault(require("./decorators/withDnD"));

var _jsxRuntime = require("react/jsx-runtime");

var _class, _class2, _temp;

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

var StackItem = (0, _withDnD["default"])(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(StackItem, _Component);

  function StackItem(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          item = _this$props.item;
      onCloseItem(item);

      _this.setState({
        isClosed: true
      });
    };

    _this._itemHandlers = _this._crDnDHandlers();
    _this.state = {
      isClosed: false
    };
    return _this;
  }

  var _proto = StackItem.prototype;

  _proto._renderTags = function _renderTags(tags, TS) {
    return tags.map(function (tag, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: (0, _extends2["default"])({}, S.SPAN_TAG, TS.DESCR),
        children: tag
      }, index);
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        item = _this$props2.item,
        theme = _this$props2.theme,
        TS = theme.createStyle(_Article["default"]),
        is_answered = item.is_answered,
        answer_count = item.answer_count,
        score = item.score,
        view_count = item.view_count,
        title = item.title,
        link = item.link,
        owner = item.owner,
        tags = item.tags,
        reputation = owner.reputation,
        display_name = owner.display_name,
        isClosed = this.state.isClosed,
        _rootStyle = isClosed ? S.NONE : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
      style: (0, _extends2["default"])({}, S.ROOT, _rootStyle, TS.HEADER)
    }, this._itemHandlers, {
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
          onClick: this._handleClose
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        className: CL_WRAPPER,
        style: S.LINK,
        href: link,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: this._renderTags(tags, TS)
        })]
      })]
    }));
  };

  return StackItem;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp)) || _class;

var _default = (0, _withTheme["default"])(StackItem);

exports["default"] = _default;
//# sourceMappingURL=StackItem.js.map