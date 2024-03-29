"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const _crDialogItem = (_ref, index, _ref2) => {
  let {
    Comp,
    type
  } = _ref;
  let {
    currentDialog,
    data,
    onClose
  } = _ref2;
  return (0, _jsxRuntime.jsx)(Comp, {
    isShow: currentDialog === type,
    data: data[type],
    onClose: onClose
  }, type);
};
const _isStr = str => typeof str === 'string';
const _getModalDialogType = option => (option || {}).modalDialogType;
const ModalDialogContainer = _ref3 => {
  let {
    router,
    showAction,
    useMsModalDialog
  } = _ref3;
  const [state, setState] = (0, _uiApi.useState)({
      isShow: false,
      currentDialog: null,
      data: {},
      dialogs: []
    }),
    {
      isShow,
      data,
      dialogs,
      currentDialog
    } = state,
    _hClose = (0, _uiApi.useCallback)(() => setState(prevState => ({
      ...prevState,
      isShow: false,
      currentDialog: null
    })), []);
  useMsModalDialog(msModalDialog => {
    const {
      option
    } = msModalDialog || {};
    if (option) {
      const type = _getModalDialogType(option);
      if (_isStr(type)) {
        setState(prevState => {
          if (!prevState.data[type]) {
            prevState.dialogs.push({
              type,
              Comp: router[type]
            });
          }
          prevState.data[type] = option;
          return {
            ...prevState,
            isShow: true,
            currentDialog: type
          };
        });
      }
    }
  });
  return (0, _jsxRuntime.jsx)(_ModalContainer.default, {
    isShow: isShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: dialogs,
      crItem: _crDialogItem,
      currentDialog: currentDialog,
      data: data,
      onClose: _hClose
    })
  });
};
var _default = exports.default = ModalDialogContainer;
//# sourceMappingURL=ModalDialogContainer.js.map