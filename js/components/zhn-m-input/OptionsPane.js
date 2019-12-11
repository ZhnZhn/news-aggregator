"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = _interopRequireDefault(require("../hoc/ThemeContext"));

var _ScrollStyle = _interopRequireDefault(require("../styles/ScrollStyle"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var CL = "with-scroll";
var S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: 'greenyellow'
  }
};

var _renderOptions = function _renderOptions(options, currentItem, clItem, onSelect, isShow) {
  return options.map(function (item) {
    var value = item.value,
        caption = item.caption,
        _style = value === currentItem.value ? S.ITEM : void 0;

    return _react["default"].createElement("div", {
      key: value,
      style: _style,
      className: clItem,
      onClick: onSelect.bind(null, item)
    }, caption);
  });
};

var OptionsPane = function OptionsPane(_ref) {
  var isShow = _ref.isShow,
      options = _ref.options,
      item = _ref.item,
      rootStyle = _ref.rootStyle,
      clItem = _ref.clItem,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose;

  var _theme = (0, _react.useContext)(_ThemeContext["default"]),
      TS = _theme.createStyle(_ScrollStyle["default"]),
      TS_D = _theme.createStyle(_Dialog["default"]);

  return _react["default"].createElement(_ModalPane["default"] //style={rootStyle}
  , {
    style: TS_D.SELECT.MODAL_PANE,
    isShow: isShow,
    onClose: onClose
  }, _react["default"].createElement(_ShowHide["default"], {
    isShow: isShow,
    className: CL + " " + TS.CL_SCROLL //style={{ ...S.PANE, ...rootStyle }}
    ,
    style: (0, _extends2["default"])({}, S.PANE, {}, TS_D.SELECT.MODAL_PANE)
  },
  /*_renderOptions(options, item, clItem, onSelect, isShow)*/
  _renderOptions(options, item, TS_D.SELECT.CL_ITEM, onSelect, isShow)));
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map