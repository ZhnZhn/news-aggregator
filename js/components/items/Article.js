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

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    //marginBottom: '10px',
    marginBottom: '16px',
    marginRight: '25px',
    //borderLeft: 'solid 3px green'
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
    //backgroundColor: '#232F3B',
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    //paddingBottom: '5px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    //height: '32px',
    width: '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION_OPEN: {
    //display : 'inline-block',
    color: '#607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  },
  IMG: {},
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '4px',
    color: 'black',
    fontWeight: 'bold'
  },
  AUTHOR_ROOT: {
    paddingTop: '6px',
    paddingLeft: '16px',
    paddingRight: '8px',
    paddingBottom: '6px'
  },
  AUTHOR: {
    float: 'right',
    fontWeight: 'bold',
    color: 'gray',
    //color: 'burlywood',
    paddingRight: '24px'
  },
  DATE: {
    //float: 'right',
    //color: 'cornflowerblue',
    //color: '#3F51B5',
    color: 'gray',
    fontWeight: 'bold'
  }
};

var _toPublishedAt = function _toPublishedAt() {
  var publishedAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = publishedAt !== null ? publishedAt.split('T') : [''],
      time = arr[1] ? arr[1].replace('Z', '').substring(0, 8) : 'No Time';
  return time + ' ' + arr[0];
};

var Article = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this));

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          item = _this$props.item;

      onCloseItem(item);
      _this.setState({ isClosed: true });
    };

    _this.state = {
      isClosed: false,
      isShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(Article, [{
    key: 'render',
    value: function render() {
      var item = this.props.item,
          title = item.title,
          author = item.author,
          publishedAt = item.publishedAt,
          url = item.url,
          description = item.description || 'More...',
          _state = this.state,
          isClosed = _state.isClosed,
          isShow = _state.isShow,
          _headerStyle = isShow ? Object.assign({}, S.HEADER, S.HEADER_OPEN) : S.HEADER,
          _captionStyle = isShow ? Object.assign({}, S.CAPTION, S.CAPTION_OPEN) : S.CAPTION,
          _publishedAt = _toPublishedAt(publishedAt),
          _rootStyle = isClosed ? { display: 'none' } : undefined;

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, S.ROOT, _rootStyle) },
        _react2.default.createElement(
          'div',
          { style: _headerStyle },
          _react2.default.createElement(
            'span',
            {
              className: 'not-selected',
              style: _captionStyle,
              onClick: this._handleToggle
            },
            title
          ),
          _react2.default.createElement(_SvgClose2.default, {
            style: S.SVG_CLOSE,
            onClose: this._handleClose
          })
        ),
        _react2.default.createElement(
          _ShowHide2.default,
          { isShow: isShow },
          _react2.default.createElement(
            'div',
            { className: 'wrapper-link' },
            _react2.default.createElement(
              'a',
              { href: url },
              _react2.default.createElement(
                'span',
                { style: S.DESCR },
                description
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { style: S.AUTHOR_ROOT },
            _react2.default.createElement(
              'span',
              { style: S.DATE },
              _publishedAt
            ),
            _react2.default.createElement(
              'span',
              { style: S.AUTHOR },
              author
            )
          )
        )
      );
    }
  }]);
  return Article;
}(_react.Component);

exports.default = Article;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\items\Article.js.map