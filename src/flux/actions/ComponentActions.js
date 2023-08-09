import Reflux from 'reflux-core'

import MENU from '../../conf/NewsMenu';

export const CAT_SHOW_NEWS_PANE = 'showNewsPane'
export const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane'
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane'
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges'

export const CAT_SHOW_BROWSER = 'showBrowser'
export const CAT_UPDATE_BROWSER = 'updateBrowser'

const Actions = Reflux.createActions({
  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {},

  [CAT_SHOW_BROWSER]: {},
  [CAT_UPDATE_BROWSER]: {}
});

const _fShowBrowser = id => Actions.showBrowser.bind(null, id);
Actions.showNewsBrowser = _fShowBrowser(MENU.NEWS)

export const ComponentActions = Actions
