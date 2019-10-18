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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Article = require('./Article.Style');

var _Article2 = _interopRequireDefault(_Article);

var _ItemHeader = require('./ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

var _ArticleDescr = require('./ArticleDescr');

var _ArticleDescr2 = _interopRequireDefault(_ArticleDescr);

var _withDnDStyle = require('./decorators/withDnDStyle');

var _withDnDStyle2 = _interopRequireDefault(_withDnDStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var D_REMOVE_UNDER = 60;
var D_REMOVE_ITEM = 35;

var CL_ITEM_HEADER = "article-header";

var S = {
  ROOT: {
    position: 'relative',
    marginBottom: 5,
    marginRight: 25,
    lineHeight: 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    width: '100%',
    backgroundColor: '#404040',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 16,
    lineHeight: 1.5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    paddingRight: 32,
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: 8,
    right: 0
  }
};

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};
var _isNum = function _isNum(n) {
  return typeof n === 'number';
};

var _toDateTime = function _toDateTime(datetime) {
  var _d = new Date(datetime),
      _dStr = _d.toDateString(),
      _tStr = _d.toTimeString(),
      _tArr = _tStr.split(' ');
  return _tArr[0] + ' ' + _dStr;
};

var _toPublishedAt = function _toPublishedAt(publishedAt) {
  if (_isNum(publishedAt)) {
    return _toDateTime(publishedAt);
  }
  var _arr = _isStr(publishedAt) ? publishedAt.split('T') : [''],
      _time = _arr[1] ? _arr[1].replace('Z', '').substring(0, 8) : 'No Time';
  return _time + ' ' + _arr[0];
};

var Article = (0, _withDnDStyle2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Article.__proto__ || Object.getPrototypeOf(Article)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isClosed: false,
      isShow: false
    }, _this._dragStart = function (ev) {
      ev.persist();
      _this.clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
    }, _this._dragEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this.clientX - ev.clientX),
          _this$props = _this.props,
          item = _this$props.item,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > D_REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > D_REMOVE_ITEM) {
        _this._handleClose();
      }
    }, _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    }, _this._handleClose = function () {
      var _this$props2 = _this.props,
          onCloseItem = _this$props2.onCloseItem,
          item = _this$props2.item;

      onCloseItem(item);
      _this.setState({ isClosed: true });
    }, _this._handleHide = function () {
      _this.headerComp.focus();
      _this.setState({ isShow: false });
    }, _this._refItemHeader = function (comp) {
      _this.headerComp = comp;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Article, [{
    key: '_preventDefault',
    value: function _preventDefault(ev) {
      ev.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          theme = _props.theme,
          TS = theme.createStyle(_Article2.default),
          title = item.title,
          author = item.author,
          publishedAt = item.publishedAt,
          url = item.url,
          related = item.related,
          description = item.description || 'More...',
          _state = this.state,
          isClosed = _state.isClosed,
          isShow = _state.isShow,
          _headerStyle = isShow ? (0, _extends3.default)({}, S.HEADER, S.HEADER_OPEN) : S.HEADER,
          _captionStyle = isShow ? (0, _extends3.default)({}, S.CAPTION, S.CAPTION_OPEN) : S.CAPTION,
          _publishedAt = _toPublishedAt(publishedAt),
          _rootStyle = isClosed ? { display: 'none' } : void 0;

      return _react2.default.createElement(
        'div',
        {
          style: (0, _extends3.default)({}, S.ROOT, _rootStyle),
          draggable: true,
          onDragStart: this._dragStart,
          onDragEnd: this._dragEnd,
          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault
        },
        _react2.default.createElement(_ItemHeader2.default, {
          ref: this._refItemHeader,
          className: CL_ITEM_HEADER,
          style: (0, _extends3.default)({}, _headerStyle, TS.HEADER),
          captionStyle: _captionStyle,
          svgCloseStyle: S.SVG_CLOSE,
          title: title,
          url: url,
          isShow: isShow,
          onClick: this._handleToggle,
          onClose: this._handleClose,
          onHide: this._handleHide
        }),
        _react2.default.createElement(_ArticleDescr2.default, {
          style: TS.DESCR,
          isShow: isShow,
          url: url,
          description: description,
          related: related,
          publishedAt: _publishedAt,
          author: author,
          onHide: this._handleHide
        })
      );
    }
  }]);
  return Article;
}(_react.Component)) || _class;

exports.default = (0, _withTheme2.default)(Article);
//# sourceMappingURL=Article.js.map