"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var S = {
  MODAL: {
    position: 'static',
    width: 320,
    height: 180,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  }
};

var ApiKeyDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ApiKeyDialog, _Component);

  function ApiKeyDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13 || keyCode === 27) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  var _proto = ApiKeyDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        theme = _this$props.theme,
        data = _this$props.data,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
      style: (0, _extends2["default"])({}, S.MODAL, TS.R_DIALOG),
      divBtStyle: S.DIV_BT,
      styleCaption: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "API Key Required",
      isShow: isShow,
      isClosePrimary: true //commandButtons={_commandButtons}
      ,
      onKeyDown: this._hKeyDown,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SecretField, {
          rootStyle: TS.INPUT_ROOT //ref={this._refInputIex}
          ,
          caption: "API Key (35 Symbols)",
          maxLength: 35,
          errorMsg: "35 symbols must be" //onTest={_onTestIexApi}
          //onEnter={setIexKey}

        })
      })
    });
  };

  return ApiKeyDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(ApiKeyDialog);

exports["default"] = _default;
//# sourceMappingURL=ApiKeyDialog.js.map