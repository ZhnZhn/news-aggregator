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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dt = require('../../utils/dt');

var _dt2 = _interopRequireDefault(_dt);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

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

//const D_REMOVE_UNDER = 60;
//const D_REMOVE_ITEM = 35;

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
  },
  NONE: {
    display: 'none'
  }
};

var HAS_TOUCH = _has2.default.HAS_TOUCH,
    DELTA = HAS_TOUCH ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};


var _getTouchesClientX = function _getTouchesClientX(ev) {
  return (((ev || {}).touches || [])[0] || {}).clientX || 0;
};
var _getChangedTouches = function _getChangedTouches(ev) {
  return (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
};

var Article = (0, _withDnDStyle2.default)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

    _this._dragStart = function (ev) {
      ev.persist();
      _this.clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
    };

    _this._onTouchStart = function (ev) {
      ev.persist();
      var _clientX = _getTouchesClientX(ev);
      if (_clientX) {
        _this._clientX = _clientX;
      }
    };

    _this._onTouchMove = function (ev) {
      ev.persist();
      var _clientX = _getTouchesClientX(ev);
      if (_clientX && Math.abs(_this._clientX - _clientX) > DELTA.MARK_REMOVE) {
        _this.dragStartWithDnDStyle(ev);
      }
    };

    _this._dragEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this.clientX - ev.clientX),
          _this$props = _this.props,
          item = _this$props.item,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > DELTA.REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > DELTA.REMOVE_ITEM) {
        _this._handleClose();
      }
    };

    _this._onTouchEnd = function (ev) {
      //ev.preventDefault()
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _clientX = _getChangedTouches(ev);
      if (_clientX) {
        var _deltaX = Math.abs(_this._clientX - _clientX),
            _this$props2 = _this.props,
            item = _this$props2.item,
            onRemoveUnder = _this$props2.onRemoveUnder;

        if (_deltaX > DELTA.REMOVE_UNDER) {
          onRemoveUnder(item);
        } else if (_deltaX > DELTA.REMOVE_ITEM) {
          _this._handleClose();
        }
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
      var _this$props3 = _this.props,
          onCloseItem = _this$props3.onCloseItem,
          item = _this$props3.item;

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

    _this._itemHandlers = HAS_TOUCH ? {
      onTouchStart: _this._onTouchStart.bind(_this),
      onTouchMove: _this._onTouchMove.bind(_this),
      onTouchEnd: _this._onTouchEnd.bind(_this)
    } : {
      draggable: true,
      onDragStart: _this._dragStart.bind(_this),
      onDragEnd: _this._dragEnd.bind(_this),
      onDrop: _this._preventDefault,
      onDragOver: _this._preventDefault,
      onDragEnter: _this._preventDefault,
      onDragLeave: _this._preventDefault
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
          _publishedAt = _dt2.default.toTimeDate(publishedAt),
          _rootStyle = isClosed ? S.NONE : void 0;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          style: (0, _extends3.default)({}, S.ROOT, _rootStyle)
        }, this._itemHandlers),
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
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp)) || _class;

exports.default = (0, _withTheme2.default)(Article);
//# sourceMappingURL=Article.js.map