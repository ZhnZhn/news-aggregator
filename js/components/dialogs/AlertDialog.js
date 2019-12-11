"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var S = {
  DIALOG: {
    position: 'static',
    width: 350,
    height: 160,
    margin: '70px auto 0px'
  },
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width: '100%',
    paddingTop: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line'
  }
};

var _toMsg = function _toMsg(data) {
  if (data instanceof TypeError) {
    return data.message;
  }

  var status = data.status,
      url = data.url,
      msg = data.msg;

  if (status) {
    return url + "\ncode:" + status + "\nNetwork exception";
  } else if (msg) {
    return msg;
  }

  return 'Exception Message';
};

var AlertDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(AlertDialog, _Component);

  function AlertDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 27 || event.keyCode === 13) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  var _proto = AlertDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        data = _this$props.data,
        theme = _this$props.theme,
        onClose = _this$props.onClose,
        TS = theme.createStyle(_Dialog["default"]),
        _msg = _toMsg(data);

    return _react["default"].createElement(_ModalDialog["default"], {
      style: (0, _extends2["default"])({}, TS.R_DIALOG, {}, S.DIALOG),
      styleCaption: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "Exception",
      isShow: isShow,
      isClosePrimary: true,
      onKeyDown: this._handleKeyDown,
      onClose: onClose
    }, _react["default"].createElement("div", null, _react["default"].createElement("p", {
      style: S.MSG
    }, _msg)));
  };

  return AlertDialog;
}(_react.Component);

AlertDialog.defaultProps = {
  data: {}
};

var _default = (0, _withTheme["default"])(AlertDialog);

exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map