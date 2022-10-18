"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateBadge = exports.toggleNewsPane = exports.toggleBadge = exports.showNewsPane = exports.showNewsDialog = exports.removeBadges = exports.createResult = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Factory = require("../logic/Factory");

//NewsDialogFn
var showNewsDialog = function showNewsDialog(slice, itemConf) {
  var type = itemConf.type;

  if (slice[type]) {
    return {
      key: type
    };
  } else {
    var Comp = (0, _Factory.createDialog)(itemConf);
    slice[type] = true;
    return {
      key: type,
      Comp: Comp
    };
  }
}; //NewsPaneFn


exports.showNewsDialog = showNewsDialog;

var showNewsPane = function showNewsPane(slice, itemConf, store) {
  var type = itemConf.type;

  if (slice[type]) {
    return {
      id: itemConf.paneId
    };
  } else {
    var Comp = (0, _Factory.createNewsPane)(itemConf, store);
    slice[type] = true;
    return {
      Comp: Comp
    };
  }
};

exports.showNewsPane = showNewsPane;

var toggleNewsPane = function toggleNewsPane(itemConf) {
  return {
    id: itemConf.paneId
  };
}; //BrowserFn


exports.toggleNewsPane = toggleNewsPane;

var createResult = function createResult(slice, itemConf) {
  var browserId = itemConf.browserId;
  return {
    id: browserId,
    data: slice[browserId]
  };
};

exports.createResult = createResult;

var updateBadge = function updateBadge(slice, itemConf, option) {
  if (option === void 0) {
    option = {
      isOpen: true
    };
  }

  var browserId = itemConf.browserId,
      type = itemConf.type;

  if (!slice[browserId]) {
    slice[browserId] = {};
  }

  slice[browserId][type] = (0, _extends2["default"])({}, slice[browserId][type], option);
  return {
    id: browserId,
    data: slice[browserId]
  };
};

exports.updateBadge = updateBadge;

var toggleBadge = function toggleBadge(slice, itemConf) {
  var browserId = itemConf.browserId,
      type = itemConf.type;
  slice[browserId][type].isOpen = !slice[browserId][type].isOpen;
  return {
    id: browserId,
    data: slice[browserId]
  };
};

exports.toggleBadge = toggleBadge;

var removeBadges = function removeBadges(slice, itemConf) {
  var browserId = itemConf.browserId;
  slice[browserId] = {};
  return {
    id: browserId,
    data: slice[browserId]
  };
};

exports.removeBadges = removeBadges;
//# sourceMappingURL=ComponentSliceFn.js.map