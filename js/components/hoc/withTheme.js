"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

var withTheme = function withTheme(Wrapper) {
  return (
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2["default"])(_class, _Component);

      function _class() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = _class.prototype;

      _proto.render = function render() {
        var _this = this;

        return _react["default"].createElement(_ThemeContext["default"].Consumer, null, function (theme) {
          return _react["default"].createElement(Wrapper, (0, _extends2["default"])({}, _this.props, {
            theme: theme
          }));
        });
      };

      return _class;
    }(_react.Component)
  );
};

var _default = withTheme;
exports["default"] = _default;
//# sourceMappingURL=withTheme.js.map