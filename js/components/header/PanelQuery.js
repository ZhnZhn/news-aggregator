"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useFocusRefElementIf = _interopRequireDefault(require("../hooks/useFocusRefElementIf"));
var _useItemsFocusTrap = _interopRequireDefault(require("../hooks/useItemsFocusTrap"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuAccordion = _interopRequireDefault(require("./MenuAccordion"));
var _jsxRuntime = require("preact/jsx-runtime");
const PanelQuery = props => {
  const _refFirstItem = (0, _useFocusRefElementIf.default)(props.isShow && _has.HAS_KEYBOARD_FOCUS, props.refFocusItem),
    _refLastItem = (0, _uiApi.useRef)(),
    _getFocusRef = (0, _useItemsFocusTrap.default)(props.menuModel, _refFirstItem, _refLastItem)[0];
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: props.isShow,
    className: props.className,
    onClose: props.onClose,
    children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: (0, _jsxRuntime.jsx)(_MenuAccordion.default, {
        menuModel: props.menuModel,
        getFocusRef: _getFocusRef
      })
    })
  });
};
var _default = exports.default = PanelQuery;
//# sourceMappingURL=PanelQuery.js.map