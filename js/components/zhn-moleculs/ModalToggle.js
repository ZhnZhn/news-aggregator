"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _ModalPopup = _interopRequireDefault(require("./ModalPopup"));
var _RowCheckBox = _interopRequireDefault(require("../dialogs/RowCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
var _isArr = Array.isArray;
var S_MODAL_POPUP = {
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
var _crCaption = function _crCaption(caption) {
  var _index = caption.indexOf('(');
  return _index === -1 ? caption : caption.slice(0, _index - 1);
};
var ModalToggle = function ModalToggle(_ref) {
  var isShow = _ref.isShow,
    className = _ref.className,
    style = _ref.style,
    chbStroke = _ref.chbStroke,
    configs = _ref.configs,
    _onToggle = _ref.onToggle,
    onClose = _ref.onClose;
  return _isArr(configs) ? (0, _jsxRuntime.jsx)(_ModalPopup["default"], {
    isShow: isShow,
    style: (0, _extends2["default"])({}, S_MODAL_POPUP, style),
    className: className,
    onClose: onClose,
    children: configs.map(function (item) {
      return (0, _jsxRuntime.jsx)(_RowCheckBox["default"], {
        initialValue: item.df,
        style: S_CHB_TOGGLE,
        stroke: chbStroke,
        caption: _crCaption(item.caption),
        captionStyle: S_CAPTION,
        onToggle: function onToggle() {
          return _onToggle(item.id);
        }
      }, item.id);
    })
  }) : null;
};
var _default = ModalToggle;
exports["default"] = _default;
//# sourceMappingURL=ModalToggle.js.map