"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));

var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));

var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));

var _jsxRuntime = require("preact/jsx-runtime");

var onClick = _ComponentActions.ComponentActions.showNewsDialog;

var onError = _ComponentActions.ComponentActions.showModalDialog.bind(null, 'ALERT_DIALOG');

var onClickBadge = _ComponentActions.ComponentActions.toggleNewsPane;

var onRemoveBadges = _ComponentActions.ComponentActions.removeNewsBadges.bind(null, {
  browserId: _NewsMenu["default"].NEWS
});

var BrowserContainer = function BrowserContainer(_ref) {
  var store = _ref.store;
  return (0, _jsxRuntime.jsxs)("div", {
    className: "hrz-container",
    children: [(0, _jsxRuntime.jsx)(_NewsBrowser["default"], {
      store: store,
      showAction: _ComponentActions.CAT_SHOW_BROWSER,
      updateAction: _ComponentActions.CAT_UPDATE_BROWSER,
      browserId: _NewsMenu["default"].NEWS,
      onClick: onClick,
      onError: onError,
      onClickBadge: onClickBadge,
      onRemoveBadges: onRemoveBadges
    }), (0, _jsxRuntime.jsx)(_DialogContainer["default"], {
      maxDialog: 3,
      store: store,
      showAction: _ComponentActions.CAT_SHOW_NEWS_DIALOG
    })]
  });
};

var _default = BrowserContainer;
exports["default"] = _default;
//# sourceMappingURL=BrowserContainer.js.map