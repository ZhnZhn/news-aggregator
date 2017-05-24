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
      slice[type] = true;
      var Comp = _Factory2.default.createDialog(itemConf);
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
      slice[type] = true;
      var Comp = _Factory2.default.createNewsPane(itemConf, store);
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
  updateBrowser: function updateBrowser(slice, itemConf) {
    var browserId = itemConf.browserId,
        type = itemConf.type;

    if (!slice[browserId]) {
      slice[browserId] = {};
    }
    slice[browserId][type] = { isLoaded: true };
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
    var resalt = NewsDialogLogic.showNewsDialog(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.TYPES.SHOW_NEWS_DIALOG, resalt);
  },
  onShowModalDialog: function onShowModalDialog(type) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    option.modalDialogType = type;
    this.trigger(_ComponentActions.TYPES.SHOW_MODAL_DIALOG, option);
  },
  onShowNewsPane: function onShowNewsPane(itemConf) {
    var resalt = NewsPaneLogic.showNewsPane(this.newsPaneInit, itemConf, this);
    this.trigger(_ComponentActions.TYPES.SHOW_NEWS_PANE, resalt);
  },
  onToggleNewsPane: function onToggleNewsPane(itemConf) {
    var result = NewsPaneLogic.toggleNewsPane(itemConf);
    this.trigger(_ComponentActions.TYPES.TOGGLE_NEWS_PANE, result);
  },
  onShowAbout: function onShowAbout() {
    this.trigger(_ComponentActions.TYPES.SHOW_ABOUT);
  },
  onShowBrowser: function onShowBrowser(browserId) {
    this.trigger(_ComponentActions.TYPES.SHOW_BROWSER, browserId);
  },
  onUpdateBrowser: function onUpdateBrowser(itemConf) {
    var result = BrowserLogic.updateBrowser(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.TYPES.UPDATE_BROWSER, result);
  }
};

exports.default = ComponentSlice;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\stores\ComponentSlice.js.map