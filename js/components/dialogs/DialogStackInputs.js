"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Dialog = require("./Dialog.Style");
var _useToggleState = _interopRequireDefault(require("../hooks/useToggleState"));
var _useRefInputs = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog = _interopRequireDefault(require("./hooks/useDialog"));
var _useKeyDown = _interopRequireDefault(require("./hooks/useKeyDown"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexToken = require("../zhn-atoms/FlexToken");
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const _hasMenuToggle = menuToggle => _isArr(menuToggle) && menuToggle.length > 1;
const DialogStackInputs = props => {
  const {
      isShow,
      caption,
      loadId,
      INPUT_CONFIGS,
      INITIAL_INPUTS,
      TOGGLES,
      IS_INPUTS,
      children,
      onShow
    } = props,
    [isInputs, toggleInput] = (0, _useToggleState.default)(IS_INPUTS),
    [_refInputs, _selectInput] = (0, _useRefInputs.default)(INITIAL_INPUTS),
    [_refDialog, _hLoad, _hClose] = (0, _useDialog.default)(props, loadId, _refInputs),
    _hKeyDown = (0, _useKeyDown.default)(_hLoad, _hClose),
    [_captionStyle, _menuToggle] = _hasMenuToggle(TOGGLES) ? [_Dialog.S_DIALOG_CAPTION, TOGGLES] : [_Dialog.S_BROWSER_CAPTION];
  return (0, _jsxRuntime.jsx)(_DraggableDialog.default, {
    ref: _refDialog,
    isShow: isShow,
    captionStyle: _captionStyle,
    caption: caption,
    menuToggle: _menuToggle,
    toggleItem: toggleInput,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexToken.FlexColumn, {
      children: [(0, _jsxRuntime.jsx)(_StackInputs.default, {
        isInputs: isInputs,
        configs: INPUT_CONFIGS,
        onSelect: _selectInput,
        onEnter: _hLoad
      }), (0, _jsxRuntime.jsx)(_PoweredBy.default, {
        style: _Dialog.S_POWERED_BY,
        children: children
      })]
    })
  });
};
var _default = exports.default = DialogStackInputs;
//# sourceMappingURL=DialogStackInputs.js.map