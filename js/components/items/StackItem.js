'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhn-atoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width: '100%',
    marginBottom: '5px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  },
  LINK: {
    display: 'block',
    paddingBottom: '8px'
  },
  SPAN_VERSION: {
    color: '#80c040',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  BTN_CIRCLE: {
    marginLeft: '10px'
  },
  SPAN_TAG: {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '6px',
    marginBottom: '2px',
    borderRadius: '16px'
  },

  PURPLE_BADGE: {
    color: '#a487d4', fontSize: '18px', paddingRight: '8px'
  },
  GREEN_BADGE: {
    color: '#80c040', fontSize: '18px', paddingRight: '8px'
  },
  BLACK_BAGDE: {
    color: 'black', fontSize: '18px', paddingRight: '8px'
  }
};

var StackItem = function (_Component) {
  (0, _inherits3.default)(StackItem, _Component);

  function StackItem(props) {
    (0, _classCallCheck3.default)(this, StackItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackItem.__proto__ || Object.getPrototypeOf(StackItem)).call(this));

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          item = _this$props.item;

      onCloseItem(item);
      _this.setState({ isClosed: true });
    };

    _this.state = {
      isClosed: false
    };
    return _this;
  }

  (0, _createClass3.default)(StackItem, [{
    key: '_renderTags',
    value: function _renderTags(tags) {
      return tags.map(function (tag, index) {
        return _react2.default.createElement(
          'span',
          { key: index, style: S.SPAN_TAG },
          tag
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item,
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
          _rootStyle = isClosed ? { display: 'none' } : undefined;

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, S.ROOT, _rootStyle) },
        _react2.default.createElement(
          'div',
          { style: { paddingBottom: '8px' } },
          _react2.default.createElement(
            'span',
            { style: S.PURPLE_BADGE },
            '\u2692\xA0',
            answer_count
          ),
          _react2.default.createElement(
            'span',
            { style: S.GREEN_BADGE },
            '\u26BE\xA0',
            score
          ),
          _react2.default.createElement(
            'span',
            { style: S.BLACK_BAGDE },
            '\u2638\xA0',
            view_count
          ),
          _react2.default.createElement(
            'span',
            { style: S.GREEN_BADGE },
            '\u2618\xA0',
            reputation
          ),
          _react2.default.createElement(
            'span',
            { style: S.BLACK_BAGDE },
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
            className: 'wrapper-link',
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
            this._renderTags(tags)
          )
        )
      );
    }
  }]);
  return StackItem;
}(_react.Component);

exports.default = StackItem;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\items\StackItem.js.map