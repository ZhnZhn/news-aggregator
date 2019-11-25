'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Article = require('./Article.Style');

var _Article2 = _interopRequireDefault(_Article);

var _SvgClose = require('../zhn-atoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _withDnD = require('./decorators/withDnD');

var _withDnD2 = _interopRequireDefault(_withDnD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_WRAPPER = "link-wrapper";

var HAS_TOUCH = _has2.default.HAS_TOUCH;


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
    float: 'none',
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
  FISH_BADGE: (0, _extends3.default)({}, _S.BADGE, {
    color: '#d7bb52'
  }),
  GREEN_BADGE: (0, _extends3.default)({}, _S.BADGE, {
    color: '#80c040'
  }),
  BLACK_BADGE: (0, _extends3.default)({}, _S.BADGE, {
    color: 'black'
  })
};

var TOKEN_ANSWER = HAS_TOUCH ? 'A' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'hammer and pick' },
  '\u2692'
);
var TOKEN_SCORE = HAS_TOUCH ? 'S' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'fish' },
  '\uD83D\uDC1F'
);
var TOKEN_VIEW = HAS_TOUCH ? 'V' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'wheel of dharma' },
  '\u2638'
);
var TOKEN_REPUTATION = HAS_TOUCH ? 'R' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'shamrock' },
  '\u2618'
);

var StackItem = (0, _withDnD2.default)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(StackItem, _Component);

  function StackItem(props) {
    (0, _classCallCheck3.default)(this, StackItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackItem.__proto__ || Object.getPrototypeOf(StackItem)).call(this, props));

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          item = _this$props.item;

      onCloseItem(item);
      _this.setState({ isClosed: true });
    };

    _this._itemHandlers = _this._crDnDHandlers();

    _this.state = {
      isClosed: false
    };
    return _this;
  }

  (0, _createClass3.default)(StackItem, [{
    key: '_renderTags',
    value: function _renderTags(tags, TS) {
      return tags.map(function (tag, index) {
        return _react2.default.createElement(
          'span',
          { key: index, style: (0, _extends3.default)({}, S.SPAN_TAG, TS.DESCR) },
          tag
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          theme = _props.theme,
          TS = theme.createStyle(_Article2.default),
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

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          style: (0, _extends3.default)({}, S.ROOT, _rootStyle, TS.HEADER)
        }, this._itemHandlers),
        _react2.default.createElement(
          'div',
          { style: S.ITEM_CAPTION },
          _react2.default.createElement(
            'span',
            { style: is_answered ? S.GREEN_BADGE : S.FISH_BADGE },
            TOKEN_ANSWER,
            '\xA0',
            answer_count
          ),
          _react2.default.createElement(
            'span',
            { style: S.FISH_BADGE },
            TOKEN_SCORE,
            '\xA0',
            score
          ),
          _react2.default.createElement(
            'span',
            { style: S.BLACK_BADGE },
            TOKEN_VIEW,
            '\xA0',
            view_count
          ),
          _react2.default.createElement(
            'span',
            { style: S.GREEN_BADGE },
            TOKEN_REPUTATION,
            '\xA0',
            reputation
          ),
          _react2.default.createElement(
            'span',
            { style: S.BLACK_BADGE },
            display_name
          ),
          _react2.default.createElement(_SvgClose2.default, {
            style: S.SVG_CLOSE,
            onClose: this._handleClose
          })
        ),
        _react2.default.createElement(
          'a',
          {
            className: CL_WRAPPER,
            style: S.LINK,
            href: link
          },
          _react2.default.createElement(
            'div',
            null,
            title
          ),
          _react2.default.createElement(
            'div',
            null,
            this._renderTags(tags, TS)
          )
        )
      );
    }
  }]);
  return StackItem;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp)) || _class;

exports.default = (0, _withTheme2.default)(StackItem);
//# sourceMappingURL=StackItem.js.map