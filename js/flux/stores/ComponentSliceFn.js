"use strict";

exports.__esModule = true;
exports.showPaneImpl = exports.showDialogImpl = void 0;
var _Factory = require("../logic/Factory");
//NewsDialogFn
const showDialogImpl = (slice, itemConf) => {
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
exports.showDialogImpl = showDialogImpl;
const showPaneImpl = (slice, itemConf, useMsPane) => {
  const {
    type
  } = itemConf;
  if (slice[type]) {
    return {
      id: itemConf.paneId
    };
  } else {
    const Comp = (0, _Factory.createNewsPane)(itemConf, useMsPane);
    slice[type] = true;
    return {
      Comp
    };
  }
};
exports.showPaneImpl = showPaneImpl;
//# sourceMappingURL=ComponentSliceFn.js.map