"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _Dialog = require("../dialogs/Dialog.Style");
var _Comp = _interopRequireDefault(require("../Comp"));
var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));
var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const S_MODAL = {
    position: 'static',
    width: 340,
    maxHeight: 460,
    margin: '70px auto 0px'
  },
  S_DIV_BT = {
    margin: '26px 0 4px 0'
  },
  S_TABS = {
    marginLeft: 24,
    textAlign: 'left'
  },
  S_CARD_ROOT = {
    position: 'relative',
    maxHeight: 370
  },
  S_CARD_API = {
    ...S_CARD_ROOT,
    overflowY: 'auto'
  },
  S_CARD_BUTTONS = {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    margin: '10px 12px 10px 0'
  },
  S_INPUT_WIDTH = {
    width: 315,
    marginLeft: 8
  },
  S_TEXT_FIELD = {
    ..._Dialog.S_INPUT_ROOT,
    ...S_INPUT_WIDTH
  },
  INPUT_SELECT_WIDTH = 306;
const INPUT_SELECT_STYLE = (0, _Dialog.crInputSelectStyle)(INPUT_SELECT_WIDTH);
const SettingsDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const _refFocusLast = (0, _uiApi.useRef)(),
    _setFocusLastRef = (0, _uiApi.useCallback)(el => {
      _refFocusLast.current = el;
    }, []);
  return (0, _jsxRuntime.jsx)(_Comp.default.ModalDialog, {
    caption: "User Settings",
    style: S_MODAL,
    divBtStyle: S_DIV_BT,
    captionStyle: _Dialog.S_BROWSER_CAPTION,
    refFocusLast: _refFocusLast,
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_Comp.default.TabPane, {
      id: "sd",
      width: "100%",
      tabsStyle: S_TABS,
      isShow: isShow,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.Tab, {
        title: "API Keys",
        children: (0, _jsxRuntime.jsx)(_CardApiKeys.default, {
          style: S_CARD_API,
          fieldStyle: S_TEXT_FIELD,
          buttonsStyle: S_CARD_BUTTONS,
          btStyle: _Dialog.S_BT_RAISED,
          data: data,
          setRefLast: _setFocusLastRef
        })
      }), (0, _jsxRuntime.jsx)(_Comp.default.Tab, {
        title: "UI Theme",
        children: (0, _jsxRuntime.jsx)(_CardUiTheme.default, {
          style: S_CARD_ROOT,
          selectStyle: INPUT_SELECT_STYLE,
          buttonsStyle: S_CARD_BUTTONS,
          btStyle: _Dialog.S_BT_RAISED,
          setRefLast: _setFocusLastRef,
          onClose: onClose
        })
      })]
    })
  });
});

/*
SettingsDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    setNewsKey: PropTypes.func,
    setWebzKey: PropTypes.func,
  }),
  onClose: PropTypes.func
}
*/
var _default = SettingsDialog;
exports.default = _default;
//# sourceMappingURL=SettingsDialog.js.map