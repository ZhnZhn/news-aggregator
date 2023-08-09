"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
  zIndex: 1030,
  position: 'absolute',
  top: 70,
  left: 10
};
const _isUndef = value => typeof value === 'undefined';
const _findCompIndex = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      return i;
    }
  }
  return;
};
const _doVisible = (arr, keyValue) => {
  const _index = _findCompIndex(arr, keyValue) || 0;
  return [...arr.slice(0, _index), ...arr.slice(_index + 1), arr[_index]];
};
const _updateVisible = (state, key, maxDialog) => {
  const {
      hmIs,
      visibleDialogs
    } = state,
    _keyIndex = visibleDialogs.indexOf(key);
  if (_keyIndex !== -1) {
    visibleDialogs.splice(_keyIndex, 1);
  }
  visibleDialogs.push(key);
  hmIs[key] = true;
  if (visibleDialogs.length > maxDialog) {
    hmIs[visibleDialogs[0]] = false;
    visibleDialogs.splice(0, 1);
  }
};
const DialogContainer = _ref => {
  let {
    maxDialog = 3,
    useMsDialog
  } = _ref;
  const [state, setState] = (0, _uiApi.useState)({
      hmIs: {},
      compDialogs: [],
      visibleDialogs: []
    }),
    {
      hmIs,
      compDialogs
    } = state,
    _hToggleDialog = key => {
      setState(prevState => {
        const {
          hmIs,
          visibleDialogs
        } = prevState;
        hmIs[key] = false;
        prevState.visibleDialogs = visibleDialogs.filter(value => value !== key);
        return {
          ...prevState
        };
      });
    };
  useMsDialog(msDialog => {
    const option = msDialog || {};
    if (option) {
      setState(prevState => {
        const {
          key,
          Comp
        } = option;
        if (Comp && !_isUndef(_findCompIndex(prevState.compDialogs, key))) {
          return prevState;
        }
        _updateVisible(prevState, key, maxDialog);
        if (!Comp) {
          prevState.compDialogs = _doVisible(prevState.compDialogs, key);
        } else {
          prevState.compDialogs.push(Comp);
        }
        return {
          ...prevState
        };
      });
    }
  });
  return (0, _jsxRuntime.jsx)("div", {
    style: S_ROOT,
    children: compDialogs.map(Comp => {
      const key = Comp.key;
      return (0, _uiApi.cloneElement)(Comp, {
        key,
        isShow: hmIs[key],
        onClose: () => _hToggleDialog(key)
      });
    })
  });
};
var _default = DialogContainer;
exports.default = _default;
//# sourceMappingURL=DialogContainer.js.map