"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ComponentActions = _interopRequireWildcard(require("../../flux/actions/ComponentActions"));

var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser"));

var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));

//const CL_MENU_ITEM = "row__news-source";
var onClick = _ComponentActions["default"].showNewsDialog;

var onError = _ComponentActions["default"].showModalDialog.bind(null, 'ALERT_DIALOG');

var onClickBadge = _ComponentActions["default"].toggleNewsPane;

var BrowserContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(BrowserContainer, _Component);

  function BrowserContainer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BrowserContainer.prototype;

  _proto.render = function render() {
    var store = this.props.store;
    return _react["default"].createElement("div", {
      className: "hrz-container"
    }, _react["default"].createElement(_NewsBrowser["default"], {
      store: store,
      showAction: _ComponentActions.TYPES.SHOW_BROWSER,
      updateAction: _ComponentActions.TYPES.UPDATE_BROWSER,
      browserId: "NEWS_API_ORG" //rowClass={CL_MENU_ITEM}
      ,
      onClick: onClick,
      onError: onError,
      onClickBadge: onClickBadge
    }), _react["default"].createElement(_DialogContainer["default"], {
      maxDialog: 3,
      store: store,
      showAction: _ComponentActions.TYPES.SHOW_NEWS_DIALOG
    }));
  };

  return BrowserContainer;
}(_react.Component);

var _default = BrowserContainer;
exports["default"] = _default;
//# sourceMappingURL=BrowserContainer.js.map