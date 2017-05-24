'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsPane = require('./NewsPane');

var _NewsPane2 = _interopRequireDefault(_NewsPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DEFAULT: _NewsPane2.default
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
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\panes\RouterPane.js.map