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
    lineHeight: 1.5,
    marginBottom: '5px',
    marginRight: '25px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: '2px'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: '0px',
    left: 'Opx',
    width: '3px',
    height: '8px',
    backgroundColor: '#3F51B5'
  },
  HEADER: {
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width: '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  },
  IMG: {}
};

var _toPublishedAt = function _toPublishedAt() {
  var publishedAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = publishedAt !== null ? publishedAt.split('T') : [''],
      time = arr[1] ? arr[1].replace('Z', '').substring(0, 8) : 'No Time';
  return time + ' ' + arr[0];
};

var Article = (0, _withDnDStyle2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this));

    _this._dragStart = function (ev) {
      ev.persist();
      _this.clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
    };

    _this._dragEnd = function (ev) {
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
    };

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._handleClose = function () {
      var _this$props2 = _this.props,
          onCloseItem = _this$props2.onCloseItem,
          item = _this$props2.item;

      onCloseItem(item);
      _this.setState({ isClosed: true });
    };

    _this._handleHide = function () {
      _this.headerComp.focus();
      _this.setState({ isShow: false });
    };

    _this._refItemHeader = function (comp) {
      _this.headerComp = comp;
    };

    _this.state = {
      isClosed: false,
      isShow: false
    };
    return _this;
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