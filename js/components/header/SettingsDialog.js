"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));
var _storeAtoms = require("../../flux/storeAtoms");
var _Comp = _interopRequireDefault(require("../Comp"));
var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));
var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const _assign = Object.assign,
  S_MODAL = {
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
  S_SELECT_WIDTH = {
    width: 306
  },
  S_INPUT_WIDTH = {
    width: 315,
    marginLeft: 8
  };
const SettingsDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const _selectTheme = (0, _uiApi.useCallback)(item => {
      (0, _storeAtoms.setUiTheme)((item || [])[1]);
    }, []),
    TS = (0, _useTheme.default)(_Dialog.default),
    _TS = JSON.parse(JSON.stringify(TS));
  _assign(_TS.SELECT.ROOT, S_SELECT_WIDTH);
  return (0, _jsxRuntime.jsx)(_Comp.default.ModalDialog, {
    style: {
      ...S_MODAL,
      ...TS.R_DIALOG
    },
    divBtStyle: S_DIV_BT,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "User Settings",
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_Comp.default.TabPane, {
      width: "100%",
      tabsStyle: S_TABS,
      isShow: isShow,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.Tab, {
        title: "API Keys",
        children: (0, _jsxRuntime.jsx)(_CardApiKeys.default, {
          style: S_CARD_API,
          fieldStyle: {
            ...TS.INPUT_ROOT,
            ...S_INPUT_WIDTH
          },
          buttonsStyle: S_CARD_BUTTONS,
          TS: TS,
          data: data
        })
      }), (0, _jsxRuntime.jsx)(_Comp.default.Tab, {
        title: "UI Theme",
        children: (0, _jsxRuntime.jsx)(_CardUiTheme.default, {
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          TS: _TS,
          onSetTheme: _selectTheme,
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