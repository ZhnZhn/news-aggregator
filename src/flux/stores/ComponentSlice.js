import {
  CAT_SHOW_NEWS_DIALOG,
  CAT_SHOW_MODAL_DIALOG,

  CAT_SHOW_NEWS_PANE,
  CAT_TOGGLE_NEWS_PANE,

  CAT_SHOW_BROWSER,
  CAT_UPDATE_BROWSER
} from '../actions/ComponentActions';

import {
  showNewsDialog,

  showNewsPane,
  toggleNewsPane,

  createResult,
  updateBadge,
  toggleBadge,
  removeBadges
} from './ComponentSliceFn';

const ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},

  onShowNewsDialog(itemConf, event){
    const r = showNewsDialog(this.dialogInit, itemConf);
    this.trigger(CAT_SHOW_NEWS_DIALOG, r)
  },

  onShowModalDialog(type, option={}){
    option.modalDialogType = type
    this.trigger(CAT_SHOW_MODAL_DIALOG, option)
  },

  onShowNewsPane(itemConf){
    const pane = showNewsPane(this.newsPaneInit, itemConf, this);
    const browser = updateBadge(this.hmBrowser, itemConf);
    this.trigger(CAT_SHOW_NEWS_PANE, pane)
    this.trigger(CAT_UPDATE_BROWSER, browser)
  },
  onToggleNewsPane(itemConf){
    const browser = toggleBadge(this.hmBrowser, itemConf);
    const pane = toggleNewsPane(itemConf);
    this.trigger(CAT_TOGGLE_NEWS_PANE, pane)
    this.trigger(CAT_UPDATE_BROWSER, browser)
  },
  onCloseNewsPane(itemConf){
    const r = updateBadge(this.hmBrowser, itemConf, {isOpen:false});
    this.trigger(CAT_UPDATE_BROWSER, r)
  },
  onRemoveNewsBadges(itemConf){
    const r = removeBadges(this.hmBrowser, itemConf)
    this.trigger(CAT_UPDATE_BROWSER, r)
  },  

  onShowBrowser(browserId){
    this.trigger(CAT_SHOW_BROWSER, browserId)
  },
  onUpdateBrowser(itemConf, option){
    const r = createResult(this.hmBrowser, itemConf);
    this.trigger(CAT_UPDATE_BROWSER, r)
  }
}

export default ComponentSlice
