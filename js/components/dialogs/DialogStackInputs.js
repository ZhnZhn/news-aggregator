"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useToggleState2 = _interopRequireDefault(require("../hooks/useToggleState"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _jsxRuntime = require("preact/jsx-runtime");
var DialogStackInputs = function DialogStackInputs(props) {
  var isShow = props.isShow,
    caption = props.caption,
    loadId = props.loadId,
    INPUT_CONFIGS = props.INPUT_CONFIGS,
    INITIAL_INPUTS = props.INITIAL_INPUTS,
    TOGGLES = props.TOGGLES,
    IS_INPUTS = props.IS_INPUTS,
    children = props.children,
    onShow = props.onShow,
    _useToggleState = (0, _useToggleState2["default"])(IS_INPUTS),
    isInputs = _useToggleState[0],
    toggleInput = _useToggleState[1],
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, loadId, _refInputs),
    _refDialog = _useDialog[0],
    _hLoad = _useDialog[1],
    _hClose = _useDialog[2],
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1];
  return (0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.DIALOG_CAPTION,
    buttonStyle: TS.BT,
    chbStroke: TS.R_DIALOG.backgroundColor,
    caption: caption,
    menuToggle: TOGGLES,
    toggleItem: toggleInput,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
        TS: TS,
        isInputs: isInputs,
        configs: INPUT_CONFIGS,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
        style: TS.POWERED_BY,
        children: children
      })]
    })
  });
};
var _default = DialogStackInputs;
exports["default"] = _default;
//# sourceMappingURL=DialogStackInputs.js.map