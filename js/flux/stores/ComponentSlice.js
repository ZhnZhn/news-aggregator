"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ComponentActions = require("../actions/ComponentActions");

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var NewsDialogLogic = {
  showNewsDialog: function showNewsDialog(slice, itemConf) {
    var type = itemConf.type;

    if (slice[type]) {
      return {
        key: type
      };
    } else {
      var Comp = _Factory["default"].createDialog(itemConf);

      slice[type] = true;
      return {
        key: type,
        Comp: Comp
      };
    }
  }
};
var NewsPaneLogic = {
  showNewsPane: function showNewsPane(slice, itemConf, store) {
    var type = itemConf.type;

    if (slice[type]) {
      return {
        id: itemConf.paneId
      };
    } else {
      var Comp = _Factory["default"].createNewsPane(itemConf, store);

      slice[type] = true;
      return {
        Comp: Comp
      };
    }
  },
  toggleNewsPane: function toggleNewsPane(itemConf) {
    return {
      id: itemConf.paneId
    };
  }
};
var BrowserLogic = {
  createResult: function createResult(slice, itemConf) {
    var browserId = itemConf.browserId;
    return {
      id: browserId,
      data: slice[browserId]
    };
  },
  updateBadge: function updateBadge(slice, itemConf, option) {
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

    slice[browserId][type] = (0, _extends2["default"])({}, slice[browserId][type], {}, option);
    return {
      id: browserId,
      data: slice[browserId]
    };
  },
  toggleBadge: function toggleBadge(slice, itemConf) {
    var browserId = itemConf.browserId,
        type = itemConf.type;
    slice[browserId][type].isOpen = !slice[browserId][type].isOpen;
    return {
      id: browserId,
      data: slice[browserId]
    };
  },
  removeBadges: function removeBadges(slice, itemConf) {
    var browserId = itemConf.browserId;
    slice[browserId] = {};
    return {
      id: browserId,
      data: slice[browserId]
    };
  }
};
var ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},
  onShowNewsDialog: function onShowNewsDialog(itemConf, event) {
    var r = NewsDialogLogic.showNewsDialog(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.TYPES.SHOW_NEWS_DIALOG, r);
  },
  onShowModalDialog: function onShowModalDialog(type, option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = type;
    this.trigger(_ComponentActions.TYPES.SHOW_MODAL_DIALOG, option);
  },
  onShowNewsPane: function onShowNewsPane(itemConf) {
    var pane = NewsPaneLogic.showNewsPane(this.newsPaneInit, itemConf, this);
    var browser = BrowserLogic.updateBadge(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.TYPES.SHOW_NEWS_PANE, pane);
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, browser);
  },
  onToggleNewsPane: function onToggleNewsPane(itemConf) {
    var browser = BrowserLogic.toggleBadge(this.hmBrowser, itemConf);
    var pane = NewsPaneLogic.toggleNewsPane(itemConf);
    this.trigger(_ComponentActions.TYPES.TOGGLE_NEWS_PANE, pane);
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, browser);
  },
  onCloseNewsPane: function onCloseNewsPane(itemConf) {
    var r = BrowserLogic.updateBadge(this.hmBrowser, itemConf, {
      isOpen: false
    });
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, r);
  },
  onRemoveNewsBadges: function onRemoveNewsBadges(itemConf) {
    var r = BrowserLogic.removeBadges(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, r);
  },
  onShowAbout: function onShowAbout() {
    this.trigger(_ComponentActions.TYPES.SHOW_ABOUT);
  },
  onShowBrowser: function onShowBrowser(browserId) {
    this.trigger(_ComponentActions.TYPES.SHOW_BROWSER, browserId);
  },
  onUpdateBrowser: function onUpdateBrowser(itemConf, option) {
    var r = BrowserLogic.createResult(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, r);
  },
  onChangeTheme: function onChangeTheme(themeName) {
    this.trigger(_ComponentActions.TYPES.CHANGE_THEME, themeName);
  }
};
var _default = ComponentSlice;
exports["default"] = _default;
//# sourceMappingURL=ComponentSlice.js.map