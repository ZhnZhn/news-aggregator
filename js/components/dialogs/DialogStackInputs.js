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
var _FlexToken = require("../zhn/FlexToken");
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const _hasMenuToggle = menuToggle => _isArr(menuToggle) && menuToggle.length > 1;
const DialogStackInputs = props => {
  const [isInputs, toggleInput] = (0, _useToggleState.default)(props.IS_INPUTS),
    [refInputs, selectInput] = (0, _useRefInputs.default)(props.INITIAL_INPUTS),
    [refDialog, hLoad, hClose] = (0, _useDialog.default)(props, props.loadId, refInputs),
    hKeyDown = (0, _useKeyDown.default)(hLoad, hClose),
    [captionStyle, menuToggle] = _hasMenuToggle(props.TOGGLES) ? [_Dialog.S_DIALOG_CAPTION, props.TOGGLES] : [_Dialog.S_BROWSER_CAPTION];
  return (0, _jsxRuntime.jsx)(_DraggableDialog.default, {
    refEl: refDialog,
    isShow: props.isShow,
    captionStyle: captionStyle,
    caption: props.caption,
    menuToggle: menuToggle,
    toggleItem: toggleInput,
    onKeyDown: hKeyDown,
    onLoad: hLoad,
    onShow: props.onShow,
    onClose: hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexToken.FlexColumn, {
      children: [(0, _jsxRuntime.jsx)(_StackInputs.default, {
        isInputs: isInputs,
        configs: props.INPUT_CONFIGS,
        onSelect: selectInput,
        onEnter: hLoad
      }), (0, _jsxRuntime.jsx)(_PoweredBy.default, {
        style: _Dialog.S_POWERED_BY,
        children: props.children
      })]
    })
  });
};
var _default = exports.default = DialogStackInputs;
//# sourceMappingURL=DialogStackInputs.js.map