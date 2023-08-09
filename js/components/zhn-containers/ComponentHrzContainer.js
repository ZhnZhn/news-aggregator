"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isInCont = _interopRequireDefault(require("./isInCont"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL = "hrz-container";
const ComponentHrzContainer = _ref => {
  let {
    useMsPane
  } = _ref;
  const [containers, setContainers] = (0, _uiApi.useState)([]);
  useMsPane(msPane => {
    const {
      Comp
    } = msPane || {};
    if (Comp) {
      setContainers(prevContainers => (0, _isInCont.default)(prevContainers, Comp) ? prevContainers : [Comp, ...prevContainers]);
    }
  });
  return (0, _jsxRuntime.jsx)("div", {
    className: CL,
    children: containers
  });
};
var _default = ComponentHrzContainer;
exports.default = _default;
//# sourceMappingURL=ComponentHrzContainer.js.map