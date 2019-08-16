'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsPane = require('./NewsPane');

var _NewsPane2 = _interopRequireDefault(_NewsPane);

var _Article = require('../items/Article');

var _Article2 = _interopRequireDefault(_Article);

var _StackItem = require('../items/StackItem');

var _StackItem2 = _interopRequireDefault(_StackItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DEFAULT: {
    Pane: _NewsPane2.default,
    Item: _Article2.default
  },
  SO_TAGGED: {
    Pane: _NewsPane2.default,
    Item: _StackItem2.default
  },
  SO_SEARCH: {
    Pane: _NewsPane2.default,
    Item: _StackItem2.default
  },
  IEX: {
    Pane: _NewsPane2.default,
    Item: _Article2.default
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

exports.default = RouterPane;
//# sourceMappingURL=RouterPane.js.map