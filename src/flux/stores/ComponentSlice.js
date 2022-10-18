import {
  CAT_SHOW_NEWS_DIALOG,
  CAT_SHOW_MODAL_DIALOG,

  CAT_SHOW_NEWS_PANE,
  CAT_TOGGLE_NEWS_PANE,

  CAT_SHOW_BROWSER,
  CAT_UPDATE_BROWSER,

  CAT_SHOW_ABOUT,
  CAT_CHANGE_THEME
} from '../actions/ComponentActions';

import {
  createDialog,
  createNewsPane
} from '../logic/Factory';

const NewsDialogLogic = {
  showNewsDialog(slice, itemConf){
    const { type } = itemConf;
    if (slice[type]){
      return { key:type };
    } else {
      const Comp = createDialog(itemConf);
      slice[type] = true
      return { key:type, Comp };
    }
  }
}

const NewsPaneLogic = {
  showNewsPane(slice, itemConf, store){
    const { type } = itemConf;
    if (slice[type]){
      return { id: itemConf.paneId };
    } else {
      const Comp = createNewsPane(itemConf, store)
      slice[type] = true;
      return { Comp };
    }
  },

  toggleNewsPane(itemConf){
    return {
      id: itemConf.paneId
    };
  }

}

const BrowserLogic = {
  createResult(slice, itemConf){
    const { browserId } = itemConf;
    return {
      id: browserId,
      data: slice[browserId]
    };
  },

  updateBadge(slice, itemConf, option={ isOpen: true }){
    const { browserId, type } = itemConf;
    if (!slice[browserId]){
      slice[browserId] = {}
    }
    slice[browserId][type] = {
      ...slice[browserId][type],
      ...option
    }
    return {
      id: browserId,
      data: slice[browserId]
    };
  },

  toggleBadge(slice, itemConf){
     const { browserId, type } = itemConf;
     slice[browserId][type].isOpen = !slice[browserId][type].isOpen
     return {
       id: browserId,
       data: slice[browserId]
     };
  },

  removeBadges(slice, itemConf){
    const { browserId } = itemConf;
    slice[browserId] = {}
    return {
      id: browserId,
      data: slice[browserId]
    };
  }
}

const ComponentSlice = {
  dialogInit: {},
  newsPaneInit: {},
  hmBrowser: {},

  onShowNewsDialog(itemConf, event){
    const r = NewsDialogLogic.showNewsDialog(this.dialogInit, itemConf);
    this.trigger(CAT_SHOW_NEWS_DIALOG, r)
  },

  onShowModalDialog(type, option={}){
    option.modalDialogType = type
    this.trigger(CAT_SHOW_MODAL_DIALOG, option)
  },

  onShowNewsPane(itemConf){
    const pane = NewsPaneLogic.showNewsPane(this.newsPaneInit, itemConf, this);
    const browser = BrowserLogic.updateBadge(this.hmBrowser, itemConf);
    this.trigger(CAT_SHOW_NEWS_PANE, pane)
    this.trigger(CAT_UPDATE_BROWSER, browser)
  },
  onToggleNewsPane(itemConf){
    const browser = BrowserLogic.toggleBadge(this.hmBrowser, itemConf);
    const pane = NewsPaneLogic.toggleNewsPane(itemConf);
    this.trigger(CAT_TOGGLE_NEWS_PANE, pane)
    this.trigger(CAT_UPDATE_BROWSER, browser)
  },
  onCloseNewsPane(itemConf){
    const r = BrowserLogic.updateBadge(this.hmBrowser, itemConf, {isOpen:false});
    this.trigger(CAT_UPDATE_BROWSER, r)
  },
  onRemoveNewsBadges(itemConf){
    const r = BrowserLogic.removeBadges(this.hmBrowser, itemConf)
    this.trigger(CAT_UPDATE_BROWSER, r)
  },

  onShowAbout(){
    this.trigger(CAT_SHOW_ABOUT)
  },

  onShowBrowser(browserId){
    this.trigger(CAT_SHOW_BROWSER, browserId)
  },
  onUpdateBrowser(itemConf, option){
    const r = BrowserLogic.createResult(this.hmBrowser, itemConf);
    this.trigger(CAT_UPDATE_BROWSER, r)
  },

  onChangeTheme(themeName){
    this.trigger(CAT_CHANGE_THEME, themeName)
  }
}

export default ComponentSlice
