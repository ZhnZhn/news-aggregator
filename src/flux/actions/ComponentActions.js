import Reflux from 'reflux-core'

export const CAT_SHOW_NEWS_DIALOG = 'showNewsDialog'
export const CAT_SHOW_MODAL_DIALOG = 'showModalDialog'

export const CAT_SHOW_NEWS_PANE = 'showNewsPane'
export const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane'
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane'
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges'

export const CAT_SHOW_ABOUT = 'showAbout'

export const CAT_SHOW_BROWSER = 'showBrowser'
export const CAT_UPDATE_BROWSER = 'updateBrowser'

export const CAT_CHANGE_THEME = 'changeTheme'


const Actions = Reflux.createActions({
  [CAT_SHOW_NEWS_DIALOG]: {},
  [CAT_SHOW_MODAL_DIALOG]: {},

  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {},

  [CAT_SHOW_ABOUT]: {},
  [CAT_SHOW_BROWSER]: {},
  [CAT_UPDATE_BROWSER]: {},

  [CAT_CHANGE_THEME]: {}
});

export default Actions
