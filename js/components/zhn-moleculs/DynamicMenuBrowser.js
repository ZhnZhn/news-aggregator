"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _SpinnerLoading = _interopRequireDefault(require("../zhn-atoms/SpinnerLoading"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var S = {
  BROWSER: {
    paddingRight: '0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px' //paddingLeft: '4px'

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

var DynamicMenuBrowser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DynamicMenuBrowser, _Component);

  function DynamicMenuBrowser(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._onStore = function (actionType, id) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          browserId = _this$props.browserId;

      if (actionType === showAction && id === browserId) {
        _this.setState({
          isShow: true
        });
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
          throw {
            status: status,
            url: url
          };
        }
      }).then(function (json) {
        _this.setState({
          isLoading: false,
          menuModel: json
        });
      })["catch"](function (err) {
        _this.setState({
          isLoadingFailed: true,
          isLoading: false
        });

        onError(err);
      });
    };

    _this._handleHide = function () {
      _this.setState({
        isShow: false
      });
    };

    _this.state = {
      isShow: true,
      isLoading: true,
      isLoadingFailed: false,
      menuModel: {}
    };
    return _this;
  }

  var _proto = DynamicMenuBrowser.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);

    this._loadMenu();
  };

  _proto.componetWillUnmaount = function componetWillUnmaount() {
    this.unsubscribe();
  };

  _proto._renderMenuParts = function _renderMenuParts(_ref) {
    var styleConfig = _ref.styleConfig,
        menuModel = _ref.menuModel,
        restProps = _ref.restProps;
    var _menuModel$menu = menuModel.menu,
        menu = _menuModel$menu === void 0 ? [] : _menuModel$menu,
        _menuModel$items = menuModel.items,
        items = _menuModel$items === void 0 ? {} : _menuModel$items;
    return menu.map(function (menuPart, index) {
      return _react["default"].createElement(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, {
        key: index,
        hmItems: items,
        styleConfig: styleConfig
      }, restProps));
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        TS = _this$props3.styleConfig,
        caption = _this$props3.caption,
        children = _this$props3.children,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props3, ["styleConfig", "caption", "children"]),
        _this$state = this.state,
        isShow = _this$state.isShow,
        isLoading = _this$state.isLoading,
        isLoadingFailed = _this$state.isLoadingFailed,
        menuModel = _this$state.menuModel;
    return _react["default"].createElement(_Browser["default"], {
      isShow: isShow,
      style: (0, _extends2["default"])({}, S.BROWSER, {}, TS.BROWSER)
    }, _react["default"].createElement(_BrowserCaption["default"], {
      rootStyle: TS.BROWSER_CAPTION,
      caption: caption,
      onClose: this._handleHide
    }), isLoading && _react["default"].createElement(_SpinnerLoading["default"], {
      style: S.SPINNER_LOADING
    }), isLoadingFailed && _react["default"].createElement(_SpinnerLoading["default"], {
      style: S.SPINNER_LOADING,
      isFailed: true
    }), _react["default"].createElement(_ScrollPane["default"], {
      className: TS.CL_SCROLL_PANE,
      style: S.SCROLL_PANE
    }, this._renderMenuParts({
      styleConfig: TS,
      menuModel: menuModel,
      restProps: restProps
    }), children));
  };

  return DynamicMenuBrowser;
}(_react.Component);

DynamicMenuBrowser.defaultProps = {
  onError: function onError() {}
};
var _default = DynamicMenuBrowser;
exports["default"] = _default;
//# sourceMappingURL=DynamicMenuBrowser.js.map