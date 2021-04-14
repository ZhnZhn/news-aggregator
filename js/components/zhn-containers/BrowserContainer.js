"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = _interopRequireWildcard(require("../../flux/actions/ComponentActions"));

var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));

var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));

var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));

var _jsxRuntime = require("react/jsx-runtime");

var onClick = _ComponentActions["default"].showNewsDialog;

var onError = _ComponentActions["default"].showModalDialog.bind(null, 'ALERT_DIALOG');

var onClickBadge = _ComponentActions["default"].toggleNewsPane;

var onRemoveBadges = _ComponentActions["default"].removeNewsBadges.bind(null, {
  browserId: _NewsMenu["default"].NEWS
});

var BrowserContainer = function BrowserContainer(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "hrz-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NewsBrowser["default"], {
      store: store,
      showAction: _ComponentActions.TYPES.SHOW_BROWSER,
      updateAction: _ComponentActions.TYPES.UPDATE_BROWSER,
      browserId: _NewsMenu["default"].NEWS,
      onClick: onClick,
      onError: onError,
      onClickBadge: onClickBadge,
      onRemoveBadges: onRemoveBadges
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContainer["default"], {
      maxDialog: 3,
      store: store,
      showAction: _ComponentActions.TYPES.SHOW_NEWS_DIALOG
    })]
  });
};

var _default = BrowserContainer;
exports["default"] = _default;
//# sourceMappingURL=BrowserContainer.js.map