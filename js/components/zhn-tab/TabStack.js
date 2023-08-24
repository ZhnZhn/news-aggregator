"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_TABS = "tabs";
const _crItemTab = (tabEl, index, _ref) => {
  let {
    selectedTabIndex,
    hClick,
    hKeyDown
  } = _ref;
  return (0, _uiApi.cloneElement)(tabEl, {
    key: index,
    id: index,
    isSelected: index === selectedTabIndex,
    onClick: (0, _uiApi.bindTo)(hClick, index, tabEl),
    onKeyDown: (0, _uiApi.bindTo)(hKeyDown, index, tabEl)
  });
};
const _crNextId = (id, childrenLength) => id === -1 ? childrenLength - 1 : id === childrenLength ? 0 : id;
const TabStack = _ref2 => {
  let {
    style,
    selectedTabIndex,
    setTabIndex,
    children
  } = _ref2;
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hClick = (0, _uiApi.useCallback)((index, tabEl) => {
      setTabIndex(index);
      if ((0, _uiApi.isFn)(tabEl.props.onClick)) {
        tabEl.props.onClick();
      }
    }, [])
    //setTabIndex
    /*eslint-enable react-hooks/exhaustive-deps */,
    _childrenLength = children.length
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)((index, tabEl, evt) => {
      const _focusTabByIndex = tabIndex => {
        const _nextIndex = _crNextId(tabIndex, _childrenLength);
        (0, _uiApi.focusElementById)("tab-" + _nextIndex);
        _hClick(_nextIndex, tabEl);
      };
      const {
        keyCode
      } = evt;
      if (keyCode === 39) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusTabByIndex(index + 1);
      }
      if (keyCode === 37) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusTabByIndex(index - 1);
      }
    }, [_childrenLength]);
  //_hClick
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsx)("div", {
    className: CL_TABS,
    style: style,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: children,
      crItem: _crItemTab,
      selectedTabIndex: selectedTabIndex,
      hClick: _hClick,
      hKeyDown: _hKeyDown
    })
  });
};
var _default = TabStack;
exports.default = _default;
//# sourceMappingURL=TabStack.js.map