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
const PanelQuery = _ref => {
  let {
    menuModel,
    refFocusItem,
    className,
    isShow,
    onClose
  } = _ref;
  const _refFirstItem = (0, _useFocusRefElementIf.default)(isShow && _has.HAS_KEYBOARD_FOCUS, refFocusItem),
    _refLastItem = (0, _uiApi.useRef)(),
    _getFocusRef = (0, _useItemsFocusTrap.default)(menuModel, _refFirstItem, _refLastItem)[0];
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    className: className,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: (0, _jsxRuntime.jsx)(_MenuAccordion.default, {
        menuModel: menuModel,
        getFocusRef: _getFocusRef
      })
    })
  });
};
var _default = exports.default = PanelQuery;
//# sourceMappingURL=PanelQuery.js.map