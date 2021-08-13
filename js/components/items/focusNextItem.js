"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var focusNextItem = function focusNextItem(nodeItem, className) {
  var _ref = nodeItem || {},
      nextElementSibling = _ref.nextElementSibling,
      _ref2 = nextElementSibling || {},
      firstElementChild = _ref2.firstElementChild;

  if (firstElementChild) {
    var _node = className ? firstElementChild.getElementsByClassName(className)[0] : firstElementChild;

    console.log(className);
    console.log(firstElementChild.getElementsByClassName(className));
    console.dir(_node);

    if (_node) {
      _node.focus();
    }
  }
};

var _default = focusNextItem;
exports["default"] = _default;
//# sourceMappingURL=focusNextItem.js.map