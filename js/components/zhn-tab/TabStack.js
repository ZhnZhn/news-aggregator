"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _tabPaneFn = require("./tabPaneFn");
var _jsxRuntime = require("preact/jsx-runtime");
const _crItemTab = (tabEl, index, _ref) => {
  let {
    id,
    selectedTabIndex,
    hClick,
    hKeyDown
  } = _ref;
  return (0, _uiApi.cloneElement)(tabEl, {
    key: index,
    id,
    index: index,
    isSelected: index === selectedTabIndex,
    onClick: (0, _uiApi.bindTo)(hClick, index, tabEl),
    onKeyDown: (0, _uiApi.bindTo)(hKeyDown, index, tabEl)
  });
};
const _crNextId = (id, childrenLength) => id === -1 ? childrenLength - 1 : id === childrenLength ? 0 : id;
const TabStack = _ref2 => {
  let {
    ariaLabel,
    id,
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
          (0, _uiApi.focusElementById)((0, _tabPaneFn.crTabId)(id, _nextIndex));
          _hClick(_nextIndex, tabEl);
        },
        {
          keyCode
        } = evt,
        increaseIndexBy = keyCode === 39 ? 1 : keyCode === 37 ? -1 : 0;
      if (increaseIndexBy) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusTabByIndex(index + increaseIndexBy);
      }
    }, [_childrenLength]);
  //_hClick
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsx)("div", {
    role: "tablist",
    "aria-label": ariaLabel,
    "aria-orientation": "horizontal",
    className: _tabPaneFn.CL_TABS,
    style: style,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: children,
      crItem: _crItemTab,
      id: id,
      selectedTabIndex: selectedTabIndex,
      hClick: _hClick,
      hKeyDown: _hKeyDown
    })
  });
};
var _default = exports.default = TabStack;
//# sourceMappingURL=TabStack.js.map