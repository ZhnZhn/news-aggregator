"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _About = _interopRequireDefault(require("./About.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Step = _interopRequireDefault(require("./Step"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var CL_SHOW = "show-popup";

var About = /*#__PURE__*/function (_Component) {
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

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _rootClass,
      style: (0, _extends2["default"])({}, _ContainerStyle["default"].aboutRootDiv, _rootStyle, S.ROOT),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].BrowserCaption, {
        rootStyle: S.BROWSER_CAPTION,
        caption: "About News Aggregator",
        onClose: this._handleClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
        className: S.CL_SCROLL_PANE,
        style: S.SCROLL_DIV,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: S.DIV_WRAPPER,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            style: S.DIV_TEXT,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                style: S.APP_TITLE,
                children: "News Agreggator"
              }), " is web app for browsing news."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "News headlines providers:\xA0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.CryptoCompare, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Messari, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.IexApi, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.FmpApi, {
                title: "Financial Modeling Prep"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.NewsApi, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.StackOverflow, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.WebhoseIo, {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              style: S.MARGIN_TOP,
              children: "Personal API Keys from providers are required."
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "API Keys can be set by means off Settings Dialog."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_TOP,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: S.BLACK,
              children: "Browsing by new source:"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "1",
            description: "Please, click button News in header."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "2",
            description: "Choose a topic and news source."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "3",
            description: "Click a button Load in dialog."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_TOP,
            children: "Not all news source support all sortBy values."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_TOP,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: S.BLACK,
              children: "Browsing by search terms:"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "1",
            description: "Please, click button Query in header."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "2",
            description: "Choose news source in modal pane."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            styleRoot: S.STEP,
            step: "3",
            description: "Click a button Load in dialog."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconLogoBar["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: S.BLACK,
              children: "*Logos Fair Use."
            })
          })]
        })
      })]
    });
  };

  return About;
}(_react.Component);

var _default = (0, _withTheme["default"])(About);

exports["default"] = _default;
//# sourceMappingURL=About.js.map