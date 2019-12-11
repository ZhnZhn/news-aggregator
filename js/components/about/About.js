"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Step = _interopRequireDefault(require("./Step"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var CL_SHOW = "show-popup";

var About =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(About, _Component);

  function About(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          hideAction = _this$props.hideAction;

      switch (actionType) {
        case showAction:
          _this.setState({
            isShow: true
          });

          break;

        case hideAction:
          _this.setState({
            isShow: false
          });

          break;

        default:
          return void 0;
      }
    };

    _this._handleClose = function () {
      _this.setState({
        isShow: false
      });
    };

    _this.state = {
      isShow: props.isInitShow
    };
    return _this;
  }

  var _proto = About.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var theme = this.props.theme,
        S = theme.createStyle(_About["default"]),
        isShow = this.state.isShow,
        _rootClass = isShow ? CL_SHOW : null,
        _rootStyle = isShow ? S.BLOCK : S.NONE;

    return _react["default"].createElement("div", {
      className: _rootClass,
      style: (0, _extends2["default"])({}, _ContainerStyle["default"].aboutRootDiv, {}, _rootStyle, {}, S.ROOT)
    }, _react["default"].createElement(_Comp["default"].BrowserCaption, {
      rootStyle: S.BROWSER_CAPTION,
      caption: "About News Aggregator",
      onClose: this._handleClose
    }), _react["default"].createElement(_Comp["default"].ScrollPane, {
      className: S.CL_SCROLL_PANE,
      style: S.SCROLL_DIV
    }, _react["default"].createElement("div", {
      style: S.DIV_WRAPPER
    }, _react["default"].createElement("div", {
      style: S.DIV_TEXT
    }, _react["default"].createElement("p", null, _react["default"].createElement("span", {
      style: S.APP_TITLE
    }, "News Agreggator"), " is web app for browsing news."), _react["default"].createElement("p", null, "News headlines providers:\xA0"), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].Link.CryptoCompare, null)), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].Link.IexApi, null)), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].Link.NewsApi, null)), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].Link.StackOverflow, null)), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].Link.WebhoseIo, null)), _react["default"].createElement("p", {
      style: S.MARGIN_TOP
    }, "Personal API Keys from providers are required."), _react["default"].createElement("p", null, "API Keys can be set by means off Settings Dialog.")), _react["default"].createElement("p", {
      style: S.MARGIN_TOP
    }, _react["default"].createElement("span", {
      style: S.BLACK
    }, "Browsing by new source:")), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "1",
      description: "Please, click button News in header."
    }), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "2",
      description: "Choose a topic and news source."
    }), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "3",
      description: "Click a button Load in dialog."
    }), _react["default"].createElement("p", {
      style: S.MARGIN_TOP
    }, "Not all news source support all sortBy values."), _react["default"].createElement("p", {
      style: S.MARGIN_TOP
    }, _react["default"].createElement("span", {
      style: S.BLACK
    }, "Browsing by search terms:")), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "1",
      description: "Please, click button Query in header."
    }), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "2",
      description: "Choose news source in modal pane."
    }), _react["default"].createElement(_Step["default"], {
      styleRoot: S.STEP,
      step: "3",
      description: "Click a button Load in dialog."
    }), _react["default"].createElement(_IconLogoBar["default"], null), _react["default"].createElement("p", null, _react["default"].createElement("span", {
      style: S.BLACK
    }, "*Logos Fair Use.")))));
  };

  return About;
}(_react.Component);

var _default = (0, _withTheme["default"])(About);

exports["default"] = _default;
//# sourceMappingURL=About.js.map