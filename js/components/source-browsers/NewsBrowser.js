"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _NewsBrowser = _interopRequireDefault(require("./NewsBrowser.Style"));

var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));

var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));

var _Links = _interopRequireDefault(require("../links/Links"));

var NewsBrowser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(NewsBrowser, _Component);

  function NewsBrowser() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      itemData: {}
    };

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
        S = theme.createStyle(_NewsBrowser["default"]);
    var itemData = this.state.itemData;
    return _react["default"].createElement(_DynamicMenuBrowser["default"], {
      styleConfig: S,
      caption: "News Sources",
      url: "data/news-source-menu.json",
      store: store,
      browserId: browserId,
      itemData: itemData,
      showAction: showAction,
      onClick: onClick,
      onError: onError,
      onClickBadge: onClickBadge
    }, _react["default"].createElement(_PoweredBy["default"], null, _react["default"].createElement(_Links["default"].NewsApi, null)));
  };

  return NewsBrowser;
}(_react.Component);

var _default = (0, _withTheme["default"])(NewsBrowser);

exports["default"] = _default;
//# sourceMappingURL=NewsBrowser.js.map