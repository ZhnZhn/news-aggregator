"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _isInCont = _interopRequireDefault(require("./isInCont"));
var _jsxRuntime = require("preact/jsx-runtime");
const ComponentHrzContainer = props => {
  const [containers, setContainers] = (0, _uiApi.useState)([]);
  props.useMsPane(msPane => {
    const {
      Comp
    } = msPane || {};
    if (Comp) {
      setContainers(prevContainers => (0, _isInCont.default)(prevContainers, Comp) ? prevContainers : [Comp, ...prevContainers]);
    }
  });
  return (0, _jsxRuntime.jsx)("div", {
    className: _crStyle.CL_HRZ_CONTAINER,
    children: containers
  });
};
var _default = exports.default = ComponentHrzContainer;
//# sourceMappingURL=ComponentHrzContainer.js.map