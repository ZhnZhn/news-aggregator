"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useModalFocus = _interopRequireDefault(require("../hooks/useModalFocus"));
var _ModalPopup = _interopRequireDefault(require("./ModalPopup"));
var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));
var _RowCheckBox = _interopRequireDefault(require("../dialogs/RowCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const S_MODAL_POPUP = {
    left: 8,
    zIndex: 100,
    padding: '4px 12px 12px'
  },
  S_CAPTION = {
    maxWidth: 150,
    paddingBottom: 2,
    textAlign: 'left',
    verticalAlign: 'middle'
  },
  S_CHB_TOGGLE = {
    padding: '6px 0 6px',
    lineHeight: 'normal'
  };
const _crCaption = caption => {
  const _index = caption.indexOf('(');
  return _index === -1 ? caption : caption.slice(0, _index - 1);
};
const ModalToggle = _ref => {
  let {
    isShow,
    className,
    style,
    chbStroke,
    configs,
    onToggle,
    onClose
  } = _ref;
  const _refFirst = (0, _useModalFocus.default)(isShow),
    _refLast = (0, _uiApi.useRef)();
  if (!_isArr(configs)) {
    return null;
  }
  const _lastIndex = configs.length - 1;
  return (0, _jsxRuntime.jsx)(_ModalPopup.default, {
    isShow: isShow,
    style: {
      ...S_MODAL_POPUP,
      ...style
    },
    className: className,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
      refFirst: _refFirst,
      refLast: _refLast,
      children: configs.map((item, index) => (0, _jsxRuntime.jsx)(_RowCheckBox.default, {
        refChb: (0, _uiApi.getFocusRef)(_refFirst, _refLast, _lastIndex, index),
        initialValue: item.df,
        style: S_CHB_TOGGLE,
        stroke: chbStroke,
        caption: _crCaption(item.caption),
        captionStyle: S_CAPTION,
        onToggle: () => onToggle(item.id)
      }, item.id))
    })
  });
};
var _default = ModalToggle;
exports.default = _default;
//# sourceMappingURL=ModalToggle.js.map