'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ComponentActions = require('../actions/ComponentActions');

var _Factory = require('../logic/Factory');

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsDialogLogic = {
  showNewsDialog: function showNewsDialog(slice, itemConf) {
    var type = itemConf.type;

    if (slice[type]) {
      return { key: type };
    } else {
      var Comp = _Factory2.default.createDialog(itemConf);
      slice[type] = true;
      return { key: type, Comp: Comp };
    }
  }
};

var NewsPaneLogic = {
  showNewsPane: function showNewsPane(slice, itemConf, store) {
    var type = itemConf.type;

    if (slice[type]) {
      return { id: itemConf.paneId };
    } else {
      var Comp = _Factory2.default.createNewsPane(itemConf, store);
      slice[type] = true;
      return { Comp: Comp };
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
  updateBadge: function updateBadge(slice, itemConf) {
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { isOpen: true };
    var browserId = itemConf.browserId,
        type = itemConf.type;

    if (!slice[browserId]) {
      slice[browserId] = {};
    }
    slice[browserId][type] = Object.assign({}, slice[browserId][type], option);
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
  }
};

var ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},

  onShowNewsDialog: function onShowNewsDialog(itemConf) {
    var r = NewsDialogLogic.showNewsDialog(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.TYPES.SHOW_NEWS_DIALOG, r);
  },
  onShowModalDialog: function onShowModalDialog(type) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
    var r = BrowserLogic.updateBadge(this.hmBrowser, itemConf, { isOpen: false });
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
  }
};

exports.default = ComponentSlice;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\stores\ComponentSlice.js.map