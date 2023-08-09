"use strict";

exports.__esModule = true;
exports.toggleNewsPane = exports.showNewsPane = exports.showNewsDialog = void 0;
var _Factory = require("../logic/Factory");
//NewsDialogFn
const showNewsDialog = (slice, itemConf) => {
  const {
    type
  } = itemConf;
  if (slice[type]) {
    return {
      key: type
    };
  } else {
    const Comp = (0, _Factory.createDialog)(itemConf);
    slice[type] = true;
    return {
      key: type,
      Comp
    };
  }
};

//NewsPaneFn
exports.showNewsDialog = showNewsDialog;
const showNewsPane = (slice, itemConf, store) => {
  const {
    type
  } = itemConf;
  if (slice[type]) {
    return {
      id: itemConf.paneId
    };
  } else {
    const Comp = (0, _Factory.createNewsPane)(itemConf, store);
    slice[type] = true;
    return {
      Comp
    };
  }
};
exports.showNewsPane = showNewsPane;
const toggleNewsPane = itemConf => ({
  id: itemConf.paneId
});
exports.toggleNewsPane = toggleNewsPane;
//# sourceMappingURL=ComponentSliceFn.js.map