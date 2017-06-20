'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Browser = require('../zhn-atoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _SpinnerLoading = require('../zhn-atoms/SpinnerLoading');

var _SpinnerLoading2 = _interopRequireDefault(_SpinnerLoading);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BROWSER: {
    paddingRight: '0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  SPINNER_LOADING: {
    position: 'relative',
    display: 'block',
    textAlign: 'middle',
    margin: '0 auto',
    marginTop: '32px',
    width: '32px',
    height: '32px'
  },
  ROOT_MENU: {
    paddingLeft: '4px'
  }
};

var DynamicMenuBrowser = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(DynamicMenuBrowser, _Component);

  function DynamicMenuBrowser(props) {
    (0, _classCallCheck3.default)(this, DynamicMenuBrowser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DynamicMenuBrowser.__proto__ || Object.getPrototypeOf(DynamicMenuBrowser)).call(this));

    _this._onStore = function (actionType, id) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          browserId = _this$props.browserId;

      if (actionType === showAction && id === browserId) {
        _this.setState({ isShow: true });
      }
    };

    _this._loadMenu = function () {
      var _this$props2 = _this.props,
          url = _this$props2.url,
          onError = _this$props2.onError;

      fetch(url).then(function (response) {
        var status = response.status;

        if (status >= 200 && status < 400) {
          return response.json();
        } else {
          throw { status: status, url: url };
        }
      }).then(function (json) {
        _this.setState({ isLoading: false, menuModel: json });
      }).catch(function (err) {
        _this.setState({ isLoadingFailed: true, isLoading: false });
        onError(err);
      });
    };

    _this._handleHide = function () {
      _this.setState({ isShow: false });
    };

    _this.state = {
      isShow: true,
      isLoading: true,
      isLoadingFailed: false,
      menuModel: {}
    };
    return _this;
  }

  (0, _createClass3.default)(DynamicMenuBrowser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
      this._loadMenu();
    }
  }, {
    key: 'componetWillUnmaount',
    value: function componetWillUnmaount() {
      this.unsubscribe();
    }
  }, {
    key: '_renderMenuParts',
    value: function _renderMenuParts(_ref) {
      var menuModel = _ref.menuModel,
          restProps = (0, _objectWithoutProperties3.default)(_ref, ['menuModel']);
      var _menuModel$menu = menuModel.menu,
          menu = _menuModel$menu === undefined ? [] : _menuModel$menu,
          _menuModel$items = menuModel.items,
          items = _menuModel$items === undefined ? {} : _menuModel$items;

      return menu.map(function (menuPart, index) {
        return _react2.default.createElement(_MenuPart2.default, (0, _extends3.default)({}, menuPart, {
          key: index,
          hmItems: items
        }, restProps));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          clScrollPane = _props.clScrollPane,
          browserStyle = _props.browserStyle,
          browserCaptionStyle = _props.browserCaptionStyle,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['caption', 'clScrollPane', 'browserStyle', 'browserCaptionStyle', 'children']),
          _state = this.state,
          isShow = _state.isShow,
          isLoading = _state.isLoading,
          isLoadingFailed = _state.isLoadingFailed,
          menuModel = _state.menuModel;

      return _react2.default.createElement(
        _Browser2.default,
        { isShow: isShow, style: (0, _extends3.default)({}, S.BROWSER, browserStyle) },
        _react2.default.createElement(_BrowserCaption2.default, {
          rootStyle: browserCaptionStyle,
          caption: caption,
          onClose: this._handleHide
        }),
        isLoading && _react2.default.createElement(_SpinnerLoading2.default, { style: S.SPINNER_LOADING }),
        isLoadingFailed && _react2.default.createElement(_SpinnerLoading2.default, { style: S.SPINNER_LOADING, isFailed: true }),
        _react2.default.createElement(
          _ScrollPane2.default,
          {
            className: clScrollPane,
            style: S.SCROLL_PANE
          },
          this._renderMenuParts((0, _extends3.default)({ menuModel: menuModel }, restProps)),
          children
        )
      );
    }
  }]);
  return DynamicMenuBrowser;
}(_react.Component), _class.defaultProps = {
  onError: function onError() {}
}, _temp);
exports.default = DynamicMenuBrowser;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\DynamicMenuBrowser.js.map