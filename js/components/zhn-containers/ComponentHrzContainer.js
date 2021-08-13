"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _isInCont = _interopRequireDefault(require("./isInCont"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL = "hrz-container";

var ComponentHrzContainer = function ComponentHrzContainer(_ref) {
  var store = _ref.store,
      addAction = _ref.addAction;

  var _useState = (0, _react.useState)([]),
      containers = _useState[0],
      setContainers = _useState[1];

  (0, _useListen["default"])(store, function (actionType, option) {
    var _ref2 = option || {},
        Comp = _ref2.Comp;

    if (actionType === addAction && Comp) {
      setContainers(function (prevContainers) {
        return (0, _isInCont["default"])(prevContainers, Comp) ? prevContainers : [Comp].concat(prevContainers);
      });
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL,
    children: containers
  });
};
/*
ComponentHrzContainer.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  }),
  addAction: PropTypes.string
}
*/


var _default = ComponentHrzContainer;
exports["default"] = _default;
//# sourceMappingURL=ComponentHrzContainer.js.map