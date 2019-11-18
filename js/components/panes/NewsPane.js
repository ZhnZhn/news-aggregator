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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _NewsPane = require('./NewsPane.Style');

var _NewsPane2 = _interopRequireDefault(_NewsPane);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

var _crModelMore = require('./crModelMore');

var _crModelMore2 = _interopRequireDefault(_crModelMore);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHILD_MARGIN = 36,
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 395,
    RESIZE_MAX_WIDTH = 1200,
    RESIZE_DELTA = 10,
    CL = {
  SHOW_POPUP: "show-popup",
  MENU_MORE: "popup-menu items__menu-more"
};

var S = {
  ROOT_DIV: {
    backgroundColor: '#4d4d4d',
    padding: '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: 4,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  BT_REMOVE: {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  INLINE_BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  }
};

var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
};
var _toStyleWidth = function _toStyleWidth(width) {
  return width + 'px';
};

var NewsPane = function (_Component) {
  (0, _inherits3.default)(NewsPane, _Component);

  function NewsPane(props) {
    (0, _classCallCheck3.default)(this, NewsPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsPane.__proto__ || Object.getPrototypeOf(NewsPane)).call(this, props));

    _this._onStore = function (actionType) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          addAction = _this$props.addAction,
          showAction = _this$props.showAction,
          toggleAction = _this$props.toggleAction,
          id = _this$props.id;


      if (option.id === id) {
        switch (actionType) {
          case addAction:
            {
              _this.setState({
                isShow: true,
                articles: option.data,
                sortBy: option.sortBy || _this.state.sortBy
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
            return void 0;
        }
      }
    };

    _this._showMore = function () {
      _this.setState({ isMore: true });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._getRootNodeStyle = function () {
      var rootDiv = _this.rootDiv,
          _ref = rootDiv || {},
          _ref$style = _ref.style,
          style = _ref$style === undefined ? {} : _ref$style;

      return style;
    };

    _this._resizeTo = function (width) {
      _this._getRootNodeStyle().width = _toStyleWidth(width);
    };

    _this._plusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) + RESIZE_DELTA;
      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._minusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) - RESIZE_DELTA;
      if (w > RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._hHide = function () {
      var onClose = _this.props.onClose;

      onClose();
      _this.setState({ isShow: false });
    };

    _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    };

    _this._getRootDiv = function () {
      return _this.rootDiv;
    };

    _this.childMargin = CHILD_MARGIN;
    _this._widthStyle = _has2.default.initWidthStyle();

    _this._MODEL = (0, _crModelMore2.default)({
      onMinWidth: _this._resizeTo.bind(_this, RESIZE_MIN_WIDTH),
      onInitWidth: _this._resizeTo.bind(_this, RESIZE_INIT_WIDTH),
      onPlusWidth: _this._plusToWidth,
      onMinusWidth: _this._minusToWidth,
      onRemoveItems: props.onRemoveItems
    });

    _this.state = {
      isShow: true,
      isMore: false,
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

      return articles.map(function (article) {
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
      var _props = this.props,
          paneCaption = _props.paneCaption,
          theme = _props.theme,
          onRemoveItems = _props.onRemoveItems,
          onRemoveUnder = _props.onRemoveUnder,
          onCloseItem = _props.onCloseItem,
          TS = theme.createStyle(_NewsPane2.default),
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore,
          articles = _state.articles,
          sortBy = _state.sortBy,
          _sortBy = sortBy ? ': ' + sortBy : '',
          _paneCaption = '' + paneCaption + _sortBy,
          _styleIsShow = isShow ? S.INLINE_BLOCK : S.NONE,
          _classIsShow = isShow ? CL.SHOW_POPUP : void 0;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootDiv,
          className: _classIsShow,
          style: (0, _extends3.default)({}, this._widthStyle, S.ROOT_DIV, TS.PANE_ROOT, _styleIsShow)
        },
        _react2.default.createElement(_Comp2.default.ModalSlider, {
          isShow: isMore,
          className: CL.MENU_MORE,
          style: TS.EL_BORDER,
          model: this._MODEL,
          onClose: this._hToggleMore
        }),
        _react2.default.createElement(
          _Comp2.default.BrowserCaption,
          {
            rootStyle: TS.PANE_CAPTION,
            caption: _paneCaption,
            onMore: this._showMore,
            onClose: this._hHide
          },
          _react2.default.createElement(_Comp2.default.CircleButton, {
            caption: 'R',
            title: 'Remove All Items',
            style: S.BT_REMOVE,
            onClick: onRemoveItems
          }),
          _react2.default.createElement(_Comp2.default.SvgHrzResize, {
            minWidth: RESIZE_MIN_WIDTH,
            maxWidth: RESIZE_MAX_WIDTH,
            getDomNode: this._getRootDiv
          })
        ),
        _react2.default.createElement(
          _Comp2.default.ScrollPane,
          { className: TS.CL_SCROLL_PANE, style: S.SCROLL_DIV },
          this._renderArticles(articles, onCloseItem, onRemoveUnder)
        )
      );
    }
  }]);
  return NewsPane;
}(_react.Component);

exports.default = (0, _withTheme2.default)(NewsPane);
//# sourceMappingURL=NewsPane.js.map