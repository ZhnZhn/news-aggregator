"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useModalFocus = _interopRequireDefault(require("../hooks/useModalFocus"));
var _useItemsFocusTrap = _interopRequireDefault(require("../hooks/useItemsFocusTrap"));
var _ModalPopup = _interopRequireDefault(require("./ModalPopup"));
var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_MODAL_POPUP = {
    color: 'var(--black)',
    left: 8,
    zIndex: 100,
    padding: '4px 12px 12px',
    lineHeight: 2.2,
    fontSize: '1rem',
    fontWeight: '700'
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
    [_getFocusRef, _refLast] = (0, _useItemsFocusTrap.default)(configs, _refFirst);
  return _getFocusRef ? (0, _jsxRuntime.jsx)(_ModalPopup.default, {
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
      children: configs.map((item, index) => (0, _jsxRuntime.jsx)(_InputSwitch.default, {
        refChb: _getFocusRef(index),
        initialValue: item.df,
        style: S_CHB_TOGGLE,
        caption: _crCaption(item.caption),
        onToggle: () => onToggle(item.id)
      }, item.id))
    })
  }) : null;
};
var _default = exports.default = ModalToggle;
//# sourceMappingURL=ModalToggle.js.map