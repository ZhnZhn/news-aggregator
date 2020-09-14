"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var CL_ITEM = 'row__topic';

var PanelQuery =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PanelQuery, _Component);

  function PanelQuery() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refFirstItem = function (comp) {
      return _this.firstItem = comp;
    };

    return _this;
  }

  var _proto = PanelQuery.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      if (this.props.isShow && !prevProps.isShow) {
        this.prevFocused = document.activeElement;
        this.firstItem.focus();
      } else if (!this.props.isShow && prevProps.isShow) {
        if (this.prevFocused) {
          this.prevFocused.focus();
        }
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        paneStyle = _this$props.paneStyle,
        isShow = _this$props.isShow,
        onCryptoComapre = _this$props.onCryptoComapre,
        onMessari = _this$props.onMessari,
        onIex = _this$props.onIex,
        onFmp = _this$props.onFmp,
        onNewsApi = _this$props.onNewsApi,
        onNewsTop = _this$props.onNewsTop,
        onStackTagged = _this$props.onStackTagged,
        onStackSearch = _this$props.onStackSearch,
        onWebhose = _this$props.onWebhose,
        onWebhoseBrodcast = _this$props.onWebhoseBrodcast,
        onClose = _this$props.onClose;
    return _react["default"].createElement(_Comp["default"].ModalPopup, {
      isShow: isShow,
      className: className,
      style: paneStyle,
      onClose: onClose
    }, _react["default"].createElement(_Comp["default"].MenuItem, {
      ref: this._refFirstItem,
      className: CL_ITEM,
      caption: "CryptoCompare: News",
      onClick: onCryptoComapre,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Messari: Blockchain News",
      onClick: onMessari,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "IEX Cloud: Stock Market News",
      onClick: onIex,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "FMP: Stock Market News",
      onClick: onFmp,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Search",
      onClick: onNewsApi,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "NewsApi: Top By",
      onClick: onNewsTop,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Tagged Questions",
      onClick: onStackTagged,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "StackOverflow: Search Questions",
      onClick: onStackSearch,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Webhose: Broadcast",
      onClick: onWebhoseBrodcast,
      onClose: onClose
    }), _react["default"].createElement(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: "Webhose: News, Blogs",
      onClick: onWebhose,
      onClose: onClose
    }));
  };

  return PanelQuery;
}(_react.Component);

var _default = PanelQuery;
exports["default"] = _default;
//# sourceMappingURL=PanelQuery.js.map