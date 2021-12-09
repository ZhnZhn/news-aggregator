"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var _crDialogItem = function _crDialogItem(dialog, index, _ref) {
  var store = _ref.store,
      currentDialog = _ref.currentDialog,
      data = _ref.data,
      onClose = _ref.onClose;
  var comp = dialog.comp,
      type = dialog.type;
  return /*#__PURE__*/(0, _react.createElement)(comp, {
    store: store,
    key: type,
    isShow: currentDialog === type,
    data: data[type],
    onClose: onClose
  });
};

var ModalDialogContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ModalDialogContainer, _Component);

  function ModalDialogContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inits = {};
    _this.state = {
      isShow: false,
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
            data = _this$state.data,
            dialogs = _this$state.dialogs;
        data[type] = option;

        if (!_this.inits[type]) {
          dialogs.push({
            type: type,
            comp: router[type]
          });
          _this.inits[type] = true;
        }

        _this.setState({
          isShow: true,
          currentDialog: type,
          data: data,
          dialogs: dialogs
        });
      }
    };

    _this._hClose = function () {
      _this.setState(function (prevState) {
        return {
          isShow: false,
          currentDialog: null
        };
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
    var store = this.props.store,
        _this$state2 = this.state,
        isShow = _this$state2.isShow,
        currentDialog = _this$state2.currentDialog,
        dialogs = _this$state2.dialogs,
        data = _this$state2.data;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContainer["default"], {
      isShow: isShow,
      onClose: this._hClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
        items: dialogs,
        crItem: _crDialogItem,
        store: store,
        currentDialog: currentDialog,
        data: data,
        onClose: this._hClose
      })
    });
  };

  return ModalDialogContainer;
}(_react.Component);

var _default = ModalDialogContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalDialogContainer.js.map