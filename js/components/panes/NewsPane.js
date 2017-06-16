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

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _CircleButton = require('../zhn-atoms/CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

var _SvgHrzResize = require('../zhn-atoms/SvgHrzResize');

var _SvgHrzResize2 = _interopRequireDefault(_SvgHrzResize);

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Article from '../items/Article'

var SHOW_POPUP = "show-popup",
    CHILD_MARGIN = 36,
    RESIZE_MIN_WIDTH = 400,
    RESIZE_MAX_WIDTH = 1200;

var styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: '4px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  brCaption: {
    marginRight: '-2px'
  },
  hrzResize: {
    position: 'absolute',
    top: '30px',
    right: '0'
  },
  btCircle: {
    marginLeft: '16px',
    marginRight: '6px'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  chartDiv: {
    overflowY: 'auto',
    height: '680px'
  },
  transitionOption: {
    transitionName: "scaleY",
    transitionEnterTimeout: 400,
    transitionLeave: false
  },
  inlineBlock: {
    display: 'inline-block'
  },
  none: {
    display: 'none'
  }
};

var NewsPane = function (_Component) {
  (0, _inherits3.default)(NewsPane, _Component);

  function NewsPane(props) {
    (0, _classCallCheck3.default)(this, NewsPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsPane.__proto__ || Object.getPrototypeOf(NewsPane)).call(this));

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          addAction = _this$props.addAction,
          showAction = _this$props.showAction,
          toggleAction = _this$props.toggleAction,
          id = _this$props.id;

      if (option.id === id) {
        switch (actionType) {
          case addAction:
            {
              var sortBy = option.sortBy ? option.sortBy : _this.state.sortBy;
              _this.setState({
                isShow: true,
                articles: option.data,
                sortBy: sortBy
              });
              break;
            }
          case showAction:
            _this.setState({ isShow: true });
            break;
          case toggleAction:
            _this.setState(function (prevState) {
              return {
                isShow: !prevState.isShow
              };
            });
            break;
          default:
            return undefined;
        }
      }
    };

    _this._handleHide = function () {
      var onClose = _this.props.onClose;

      onClose();
      _this.setState({ isShow: false });
    };

    _this._getRootDiv = function () {
      return _this.rootDiv;
    };

    _this.childMargin = CHILD_MARGIN;
    _this.state = {
      isShow: true,
      articles: [],
      sortBy: ''
    };
    return _this;
  }

  (0, _createClass3.default)(NewsPane, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: '_renderArticles',
    value: function _renderArticles() {
      var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var onCloseItem = arguments[1];
      var onRemoveUnder = arguments[2];
      var Item = this.props.Item;

      return articles.map(function (article, index) {
        return _react2.default.createElement(Item, {
          key: article.articleId,
          item: article,
          onCloseItem: onCloseItem,
          onRemoveUnder: onRemoveUnder
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          paneCaption = _props.paneCaption,
          onRemoveItems = _props.onRemoveItems,
          onRemoveUnder = _props.onRemoveUnder,
          onCloseItem = _props.onCloseItem,
          _state = this.state,
          isShow = _state.isShow,
          articles = _state.articles,
          sortBy = _state.sortBy,
          _paneCaption = paneCaption + ' : ' + sortBy,
          _styleIsShow = isShow ? styles.inlineBlock : styles.none,
          _classIsShow = isShow ? SHOW_POPUP : undefined;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this2.rootDiv = node;
          },
          className: _classIsShow,
          style: (0, _extends3.default)({}, styles.rootDiv, _styleIsShow)
        },
        _react2.default.createElement(
          _BrowserCaption2.default,
          {
            rootStyle: styles.brCaption,
            caption: _paneCaption,
            onClose: this._handleHide
          },
          _react2.default.createElement(_CircleButton2.default, {
            caption: 'R',
            style: styles.btCircle,
            onClick: onRemoveItems
          }),
          _react2.default.createElement(_SvgHrzResize2.default, {
            minWidth: RESIZE_MIN_WIDTH,
            maxWidth: RESIZE_MAX_WIDTH,
            getDomNode: this._getRootDiv
          })
        ),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: styles.scrollDiv },
          this._renderArticles(articles, onCloseItem, onRemoveUnder)
        )
      );
    }
  }]);
  return NewsPane;
}(_react.Component);

exports.default = NewsPane;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\panes\NewsPane.js.map