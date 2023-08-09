import {
  CAT_SHOW_NEWS_PANE,
  CAT_TOGGLE_NEWS_PANE
} from '../actions/ComponentActions';

import {
  showNewsPane,
  toggleNewsPane
} from './ComponentSliceFn';

const ComponentSlice = {
  newsPaneInit: {},

  onShowNewsPane(itemConf){
    const pane = showNewsPane(this.newsPaneInit, itemConf, this);
    this.trigger(CAT_SHOW_NEWS_PANE, pane)
  },
  onToggleNewsPane(itemConf){
    const pane = toggleNewsPane(itemConf);
    this.trigger(CAT_TOGGLE_NEWS_PANE, pane)
  }
}

export default ComponentSlice
