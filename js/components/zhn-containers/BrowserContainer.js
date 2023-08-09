"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../../flux/actions/ComponentActions");
var _compStore = require("../../flux/compStore");
var _NewsMenu = _interopRequireDefault(require("../../conf/NewsMenu"));
var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));
var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const onClick = _ComponentActions.ComponentActions.showNewsDialog;
const onClickBadge = _ComponentActions.ComponentActions.toggleNewsPane;
const onRemoveBadges = _ComponentActions.ComponentActions.removeNewsBadges.bind(null, {
  browserId: _NewsMenu.default.NEWS
});
const BrowserContainer = _ref => {
  let {
    store
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    className: "hrz-container",
    children: [(0, _jsxRuntime.jsx)(_NewsBrowser.default, {
      store: store,
      showAction: _ComponentActions.CAT_SHOW_BROWSER,
      updateAction: _ComponentActions.CAT_UPDATE_BROWSER,
      browserId: _NewsMenu.default.NEWS,
      onClick: onClick,
      onError: _compStore.showAlertDialog,
      onClickBadge: onClickBadge,
      onRemoveBadges: onRemoveBadges
    }), (0, _jsxRuntime.jsx)(_DialogContainer.default, {
      maxDialog: 3,
      store: store,
      showAction: _ComponentActions.CAT_SHOW_NEWS_DIALOG
    })]
  });
};
var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=BrowserContainer.js.map