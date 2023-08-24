"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _isKeyEnter = _interopRequireDefault(require("../hooks/isKeyEnter"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _CL = require("../styles/CL");
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const _crItemHandlers = (onItem, itemConf) => {
  const onClick = (0, _uiApi.bindTo)(onItem, itemConf);
  return {
    onClick,
    onKeyDown: evt => {
      if ((0, _isKeyEnter.default)(evt)) {
        onClick();
      }
    }
  };
};
const _renderMenuItems = (TS, option) => {
  const {
    items,
    hmItems,
    onClick,
    ...restItemProps
  } = option;
  return (items || []).map((item, index) => {
    const _className = (0, _crStyle.crCn)(TS.CL_ROW, _CL.CL_SELECT_NONE),
      _itemConf = {
        ...(hmItems || {})[item.id],
        ...restItemProps
      },
      {
        menuTitle
      } = _itemConf;
    return (0, _preact.createElement)("div", {
      ..._crItemHandlers(onClick, _itemConf),
      role: "menuitem",
      tabIndex: "0",
      key: index,
      className: _className
    }, menuTitle);
  });
};
const MenuPart = _ref => {
  let {
    styleConfig: TS,
    caption,
    isInitClose,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    itemStyle: TS.ITEM,
    children: _renderMenuItems(TS, restProps)
  });
};

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/
var _default = MenuPart;
exports.default = _default;
//# sourceMappingURL=MenuPart.js.map