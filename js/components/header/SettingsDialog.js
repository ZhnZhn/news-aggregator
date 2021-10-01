"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));

var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S = {
  MODAL: {
    position: 'static',
    width: 340,
    height: 410,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  },
  TABS: {
    marginLeft: 24,
    textAlign: 'left'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 315
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  SELECT_WIDTH: {
    width: 300
  },
  INPUT_WIDTH: {
    width: 315,
    marginLeft: 8
  }
};
var MIN_FS = 15;
var MAX_FS = 18;

var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};

var _inRange = function _inRange(min, max, v) {
  return _isNumber(v) && v >= min && v <= max;
};

var SettingsDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SettingsDialog, _Component);

  function SettingsDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this.props.onClose();
      }
    };

    _this._selectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        theme.setThemeName(item.value);

        _ComponentActions["default"].changeTheme(item.value);

        _this.forceUpdate();
      }
    };

    _this._selectFontSize = function (item) {
      var _ref = item || {},
          value = _ref.value;

      if (_inRange(MIN_FS, MAX_FS, value)) {
        document.documentElement.style.fontSize = value + "px";
      }
    };

    return _this;
  }

  var _proto = SettingsDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      setNewsKey: PropTypes.func,
      setWebhoseKey: PropTypes.func,
    }),
    onClose: PropTypes.func
  }
  */
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
        TS = theme.createStyle(_Dialog["default"]),
        _TS = JSON.parse(JSON.stringify(TS));

    Object.assign(_TS.SELECT.ROOT, S.SELECT_WIDTH);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
      style: (0, _extends2["default"])({}, S.MODAL, TS.R_DIALOG),
      divBtStyle: S.DIV_BT,
      styleCaption: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "User Settings",
      isWithButton: false,
      isShow: isShow,
      onKeyDown: this._handleKeyDown,
      onClose: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].TabPane, {
        width: "100%",
        tabsStyle: S.TABS,
        isShow: isShow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
          title: "API Keys",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardApiKeys["default"], {
            ref: this._refInput,
            style: S.CARD_ROOT,
            fieldStyle: (0, _extends2["default"])({}, TS.INPUT_ROOT, S.INPUT_WIDTH),
            buttonsStyle: S.CARD_BUTTONS,
            TS: TS,
            data: data,
            onClose: onClose
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
          title: "UI Theme",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardUiTheme["default"], {
            style: S.CARD_ROOT,
            buttonsStyle: S.CARD_BUTTONS,
            TS: _TS,
            onSetTheme: this._selectTheme,
            onSetFontSize: this._selectFontSize,
            onClose: onClose
          })
        })]
      })
    });
  };

  return SettingsDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(SettingsDialog);

exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map