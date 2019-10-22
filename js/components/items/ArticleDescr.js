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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_DIV = "link-wrapper";

var S = {
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 4,
    color: '#121212',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold'
    //fontFamily: '"Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  AUTHOR_ROOT: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 8px 6px 16px'
    /*paddingTop: 6,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 6*/
  },
  AUTHOR: {
    //float: 'right',
    color: 'gray',
    paddingRight: 16,
    fontWeight: 'bold'
  },
  DATE: {
    color: 'gray',
    flexShrink: 0,
    paddingRight: 32,
    fontWeight: 'bold'
  }
};

var ArticleDescr = function (_Component) {
  (0, _inherits3.default)(ArticleDescr, _Component);

  function ArticleDescr() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ArticleDescr);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ArticleDescr.__proto__ || Object.getPrototypeOf(ArticleDescr)).call.apply(_ref, [this].concat(args))), _this), _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;
      if (keyCode === 13) {
        window.open(_this.props.url, '_blank');
      } else if (keyCode === 27) {
        _this.props.onHide();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ArticleDescr, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          isShow = _props.isShow,
          url = _props.url,
          description = _props.description,
          related = _props.related,
          publishedAt = _props.publishedAt,
          author = _props.author;

      return _react2.default.createElement(
        _ShowHide2.default,
        {
          style: style,
          isShow: isShow
        },
        _react2.default.createElement(
          'div',
          {
            role: 'link',
            tabIndex: '0',
            className: CL_DIV,
            onKeyDown: this._hKeyDown
          },
          _react2.default.createElement(
            'a',
            { href: url, tabIndex: '-1' },
            _react2.default.createElement(
              'span',
              { style: S.DESCR },
              description
            )
          )
        ),
        related && _react2.default.createElement(
          'div',
          { style: S.DESCR },
          related
        ),
        _react2.default.createElement(
          'div',
          { style: S.AUTHOR_ROOT },
          _react2.default.createElement(
            'span',
            { style: S.DATE },
            publishedAt
          ),
          _react2.default.createElement(
            'span',
            { style: S.AUTHOR },
            author
          )
        )
      );
    }
  }]);
  return ArticleDescr;
}(_react.Component);

exports.default = ArticleDescr;
//# sourceMappingURL=ArticleDescr.js.map