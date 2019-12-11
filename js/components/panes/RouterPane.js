"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _NewsPane = _interopRequireDefault(require("./NewsPane"));

var _Article = _interopRequireDefault(require("../items/Article"));

var _StackItem = _interopRequireDefault(require("../items/StackItem"));

var R = {
  DEFAULT: {
    Pane: _NewsPane["default"],
    Item: _Article["default"]
  },
  SO_TAGGED: {
    Pane: _NewsPane["default"],
    Item: _StackItem["default"]
  },
  SO_SEARCH: {
    Pane: _NewsPane["default"],
    Item: _StackItem["default"]
  },
  IEX: {
    Pane: _NewsPane["default"],
    Item: _Article["default"]
  }
};
var RouterPane = {
  getElement: function getElement(type) {
    var El = R[type];

    if (El) {
      return R[type];
    } else {
      return R.DEFAULT;
    }
  }
};
var _default = RouterPane;
exports["default"] = _default;
//# sourceMappingURL=RouterPane.js.map