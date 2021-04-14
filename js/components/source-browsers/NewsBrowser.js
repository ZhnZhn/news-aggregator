"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _NewsBrowser = _interopRequireDefault(require("./NewsBrowser.Style"));

var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));

var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));

var _Links = _interopRequireDefault(require("../links/Links"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _jsxRuntime = require("react/jsx-runtime");

var NewsBrowser = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NewsBrowser, _Component);

  function NewsBrowser(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          updateAction = _this$props.updateAction,
          browserId = _this$props.browserId;

      if (actionType === updateAction && option.id === browserId) {
        _this.setState({
          itemData: option.data
        });
      }
    };

    _this._menuMore = (0, _crModelMore["default"])({
      onRemoveBadges: props.onRemoveBadges
    });
    _this.state = {
      itemData: {}
    };
    return _this;
  }

  var _proto = NewsBrowser.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        store = _this$props2.store,
        showAction = _this$props2.showAction,
        browserId = _this$props2.browserId,
        theme = _this$props2.theme,
        onClick = _this$props2.onClick,
        onError = _this$props2.onError,
        onClickBadge = _this$props2.onClickBadge,
        S = theme.createStyle(_NewsBrowser["default"]),
        itemData = this.state.itemData;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicMenuBrowser["default"], {
      styleConfig: S,
      caption: "News Sources",
      url: "data/news-source-menu.json",
      store: store,
      browserId: browserId,
      itemData: itemData,
      showAction: showAction,
      menuMore: this._menuMore,
      onClick: onClick,
      onError: onError,
      onClickBadge: onClickBadge,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PoweredBy["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Links["default"].NewsApi, {})
      })
    });
  };

  return NewsBrowser;
}(_react.Component);

var _default = (0, _withTheme["default"])(NewsBrowser);

exports["default"] = _default;
//# sourceMappingURL=NewsBrowser.js.map