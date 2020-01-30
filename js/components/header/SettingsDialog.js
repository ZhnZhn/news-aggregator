"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));

var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));

var S = {
  MODAL: {
    position: 'static',
    width: 320,
    height: 370,
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
  TAB_SELECTED: {
    color: 'black'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 280
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  INPUT_WIDTH: {
    width: 280
  }
};

var SettingsDialog =
/*#__PURE__*/
function (_Component) {
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

    Object.assign(_TS.SELECT.ROOT, S.INPUT_WIDTH);
    return _react["default"].createElement(_Comp["default"].ModalDialog, {
      style: (0, _extends2["default"])({}, S.MODAL, {}, TS.R_DIALOG),
      divBtStyle: S.DIV_BT,
      styleCaption: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "User Settings",
      isWithButton: false,
      isShow: isShow,
      onKeyDown: this._handleKeyDown,
      onClose: onClose
    }, _react["default"].createElement(_Comp["default"].TabPane, {
      width: "100%",
      tabsStyle: S.TABS,
      selectedStyle: S.TAB_SELECTED,
      isShow: isShow
    }, _react["default"].createElement(_Comp["default"].Tab, {
      title: "API Keys"
    }, _react["default"].createElement(_CardApiKeys["default"], {
      ref: this._refInput,
      style: S.CARD_ROOT,
      fieldStyle: (0, _extends2["default"])({}, TS.INPUT_ROOT, {}, S.INPUT_WIDTH),
      buttonsStyle: S.CARD_BUTTONS,
      TS: TS,
      data: data,
      onClose: onClose
    })), _react["default"].createElement(_Comp["default"].Tab, {
      title: "UI Theme"
    }, _react["default"].createElement(_CardUiTheme["default"], {
      style: S.CARD_ROOT,
      buttonsStyle: S.CARD_BUTTONS,
      TS: _TS,
      onSetTheme: this._selectTheme,
      onClose: onClose
    }))));
  };

  return SettingsDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(SettingsDialog);

exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map