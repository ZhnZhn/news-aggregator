import { TYPES } from '../actions/ComponentActions'

import Factory from '../logic/Factory'

const NewsDialogLogic = {
  showNewsDialog(slice, itemConf){
    const { type } = itemConf;
    if (slice[type]){
      return { key:type };
    } else {
      slice[type] = true;
      const Comp = Factory.createDialog(itemConf);
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
      slice[type] = true;
      const Comp = Factory.createNewsPane(itemConf, store)
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
  updateBrowser(slice, itemConf){
    const { browserId, type } = itemConf;
    if (!slice[browserId]){
      slice[browserId] = {}
    }
    slice[browserId][type] = { isLoaded: true }
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

  onShowNewsDialog(itemConf){
    const resalt = NewsDialogLogic.showNewsDialog(this.dialogInit, itemConf);
    this.trigger(TYPES.SHOW_NEWS_DIALOG, resalt)
  },

  onShowModalDialog(type, option={}){
    option.modalDialogType = type
    this.trigger(TYPES.SHOW_MODAL_DIALOG, option)
  },

  onShowNewsPane(itemConf){
    const resalt = NewsPaneLogic.showNewsPane(this.newsPaneInit, itemConf, this);
    this.trigger(TYPES.SHOW_NEWS_PANE, resalt)
  },
  onToggleNewsPane(itemConf){
    const result = NewsPaneLogic.toggleNewsPane(itemConf)
    this.trigger(TYPES.TOGGLE_NEWS_PANE, result)
  },

  onShowAbout(){
    this.trigger(TYPES.SHOW_ABOUT)
  },

  onShowBrowser(browserId){
    this.trigger(TYPES.SHOW_BROWSER, browserId)
  },
  onUpdateBrowser(itemConf){
    const result = BrowserLogic.updateBrowser(this.hmBrowser, itemConf);
    this.trigger(TYPES.UPDATE_BROWSER, result)
  }
}

export default ComponentSlice
