"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));

var _jsxRuntime = require("react/jsx-runtime");

var _crDialogItem = function _crDialogItem(_ref, index, _ref2) {
  var Comp = _ref.Comp,
      type = _ref.type;
  var store = _ref2.store,
      currentDialog = _ref2.currentDialog,
      data = _ref2.data,
      onClose = _ref2.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    isShow: currentDialog === type,
    data: data[type],
    store: store,
    onClose: onClose
  }, type);
};

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};

var _getModalDialogType = function _getModalDialogType(option) {
  return (option || {}).modalDialogType;
};

var ModalDialogContainer = function ModalDialogContainer(_ref3) {
  var store = _ref3.store,
      router = _ref3.router,
      showAction = _ref3.showAction;

  var _useState = (0, _react.useState)({
    isShow: false,
    currentDialog: null,
    data: {},
    dialogs: []
  }),
      state = _useState[0],
      setState = _useState[1],
      isShow = state.isShow,
      data = state.data,
      dialogs = state.dialogs,
      currentDialog = state.currentDialog,
      _hClose = (0, _react.useCallback)(function () {
    return setState(function (prevState) {
      return (0, _extends2["default"])({}, prevState, {
        isShow: false,
        currentDialog: null
      });
    });
  }, []);

  (0, _useListen["default"])(store, function (actionType, option) {
    if (actionType === showAction) {
      var type = _getModalDialogType(option);

      if (_isStr(type)) {
        setState(function (prevState) {
          if (!prevState.data[type]) {
            prevState.dialogs.push({
              type: type,
              Comp: router[type]
            });
          }

          prevState.data[type] = option;
          return (0, _extends2["default"])({}, prevState, {
            isShow: true,
            currentDialog: type
          });
        });
      }
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContainer["default"], {
    isShow: isShow,
    onClose: _hClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
      items: dialogs,
      crItem: _crDialogItem,
      currentDialog: currentDialog,
      data: data,
      store: store,
      onClose: _hClose
    })
  });
};

var _default = ModalDialogContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalDialogContainer.js.map