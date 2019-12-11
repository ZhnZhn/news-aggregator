"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));

var ModalDialogContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ModalDialogContainer, _Component);

  function ModalDialogContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          router = _this$props.router,
          showAction = _this$props.showAction;

      if (actionType === showAction) {
        var type = option.modalDialogType,
            _this$state = _this.state,
            inits = _this$state.inits,
            shows = _this$state.shows,
            data = _this$state.data,
            dialogs = _this$state.dialogs;
        data[type] = option;
        shows[type] = true;

        if (inits[type]) {
          _this.setState({
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data
          });
        } else {
          dialogs.push({
            type: type,
            comp: router[type]
          });
          inits[type] = true;

          _this.setState({
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data,
            dialogs: dialogs
          });
        }
      }
    };

    _this._handleClose = function (type) {
      _this.state.shows[type] = false;

      _this.setState({
        isShow: false,
        currentDialog: null,
        shows: _this.state.shows
      });
    };

    _this._renderDialogs = function () {
      var store = _this.props.store,
          _this$state2 = _this.state,
          shows = _this$state2.shows,
          data = _this$state2.data,
          dialogs = _this$state2.dialogs;
      return dialogs.map(function (dialog) {
        var type = dialog.type,
            comp = dialog.comp;
        return _react["default"].createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          store: store,
          onClose: _this._handleClose.bind(null, type)
        });
      });
    };

    return _this;
  }

  var _proto = ModalDialogContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$state3 = this.state,
        isShow = _this$state3.isShow,
        currentDialog = _this$state3.currentDialog;
    return _react["default"].createElement(_ModalContainer["default"], {
      isShow: isShow,
      onClose: this._handleClose.bind(null, currentDialog)
    }, this._renderDialogs());
  };

  return ModalDialogContainer;
}(_react.Component);

var _default = ModalDialogContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalDialogContainer.js.map