"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsBrowser = function NewsBrowser(_ref) {
   var menuModel = _ref.menuModel,
       rowClass = _ref.rowClass,
       onClick = _ref.onClick;

   return _react2.default.createElement(
      DynamicMenuBrowser,
      {
         caption: "News Providers",
         url: "data/news-source-menu.json",
         menuModel: menuModel,
         rowClass: rowClass,
         onClick: onClick
      },
      _react2.default.createElement(
         "div",
         null,
         "Powered by NewsApi.org"
      )
   );
};

exports.default = NewsBrowser;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\source-browsers\NewsOrgBrowser.js.map