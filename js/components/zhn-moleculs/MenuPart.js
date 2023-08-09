"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const _assign = Object.assign;
const _createOnKeyDown = onClick => evt => {
  if (evt.keyCode === 13) {
    onClick();
  }
};
const _renderMenuItems = (TS, option) => {
  const {
    items = [],
    hmItems = {},
    onClick,
    ...rest
  } = option;
  return items.map((item, index) => {
    const _className = TS.CL_ROW ? TS.CL_ROW + " " + _CL.CL_SELECT_NONE : _CL.CL_SELECT_NONE,
      _itemConf = hmItems[item.id],
      {
        menuTitle
      } = _itemConf;
    _assign(_itemConf, rest);
    const _onClick = onClick.bind(null, _itemConf);
    return (0, _jsxRuntime.jsx)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: _className,
      onClick: _onClick,
      onKeyDown: _createOnKeyDown(_onClick),
      children: menuTitle
    }, index);
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