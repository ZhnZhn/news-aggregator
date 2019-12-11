"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("../has"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Article = _interopRequireDefault(require("./Article.Style"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _withDnD = _interopRequireDefault(require("./decorators/withDnD"));

var _class, _class2, _temp;

var CL_WRAPPER = "link-wrapper";
var HAS_TOUCH = _has["default"].HAS_TOUCH;
var _S = {
  BADGE: {
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '18px'
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
var TOKEN_ANSWER = HAS_TOUCH ? 'A' : _react["default"].createElement("span", {
  role: "img",
  "arial-label": "hammer and pick"
}, "\u2692");
var TOKEN_SCORE = HAS_TOUCH ? 'S' : _react["default"].createElement("span", {
  role: "img",
  "aria-label": "fish"
}, "\uD83D\uDC1F");
var TOKEN_VIEW = HAS_TOUCH ? 'V' : _react["default"].createElement("span", {
  role: "img",
  "aria-label": "wheel of dharma"
}, "\u2638");
var TOKEN_REPUTATION = HAS_TOUCH ? 'R' : _react["default"].createElement("span", {
  role: "img",
  "arial-label": "shamrock"
}, "\u2618");

var StackItem = (0, _withDnD["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
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
      return _react["default"].createElement("span", {
        key: index,
        style: (0, _extends2["default"])({}, S.SPAN_TAG, {}, TS.DESCR)
      }, tag);
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

    return _react["default"].createElement("div", (0, _extends2["default"])({
      style: (0, _extends2["default"])({}, S.ROOT, {}, _rootStyle, {}, TS.HEADER)
    }, this._itemHandlers), _react["default"].createElement("div", {
      style: S.ITEM_CAPTION
    }, _react["default"].createElement("span", {
      style: is_answered ? S.GREEN_BADGE : S.FISH_BADGE
    }, TOKEN_ANSWER, "\xA0", answer_count), _react["default"].createElement("span", {
      style: S.FISH_BADGE
    }, TOKEN_SCORE, "\xA0", score), _react["default"].createElement("span", {
      style: S.BLACK_BADGE
    }, TOKEN_VIEW, "\xA0", view_count), _react["default"].createElement("span", {
      style: S.GREEN_BADGE
    }, TOKEN_REPUTATION, "\xA0", reputation), _react["default"].createElement("span", {
      style: S.BLACK_BADGE
    }, display_name), _react["default"].createElement(_SvgClose["default"], {
      style: S.SVG_CLOSE,
      onClose: this._handleClose
    })), _react["default"].createElement("a", {
      className: CL_WRAPPER,
      style: S.LINK,
      href: link
    }, _react["default"].createElement("div", null, title), _react["default"].createElement("div", null, this._renderTags(tags, TS))));
  };

  return StackItem;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp)) || _class;

var _default = (0, _withTheme["default"])(StackItem);

exports["default"] = _default;
//# sourceMappingURL=StackItem.js.map