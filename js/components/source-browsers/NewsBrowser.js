"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _NewsBrowser = _interopRequireDefault(require("./NewsBrowser.Style"));

var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));

var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));

var _Links = _interopRequireDefault(require("../links/Links"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _jsxRuntime = require("react/jsx-runtime");

var NewsBrowser = function NewsBrowser(_ref) {
  var store = _ref.store,
      browserId = _ref.browserId,
      showAction = _ref.showAction,
      updateAction = _ref.updateAction,
      onClick = _ref.onClick,
      onError = _ref.onError,
      onClickBadge = _ref.onClickBadge,
      onRemoveBadges = _ref.onRemoveBadges;

  var TS = (0, _useTheme["default"])(_NewsBrowser["default"]),
      _useState = (0, _react.useState)({}),
      itemData = _useState[0],
      setItemData = _useState[1],
      _menuMore = (0, _react.useMemo)(function () {
    return (0, _crModelMore["default"])({
      onRemoveBadges: onRemoveBadges
    });
  }, []); //onRemoveBadges

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _useListen["default"])(store, function (actionType, option) {
    if (actionType === updateAction && option.id === browserId) {
      setItemData((0, _extends2["default"])({}, option.data));
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicMenuBrowser["default"], {
    styleConfig: TS,
    caption: "News Sources",
    url: "data/news-source-menu.json",
    store: store,
    browserId: browserId,
    itemData: itemData,
    showAction: showAction,
    menuMore: _menuMore,
    onClick: onClick,
    onError: onError,
    onClickBadge: onClickBadge,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PoweredBy["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Links["default"].NewsApi, {})
    })
  });
};

var _default = NewsBrowser;
exports["default"] = _default;
//# sourceMappingURL=NewsBrowser.js.map