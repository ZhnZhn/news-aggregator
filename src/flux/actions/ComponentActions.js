import Reflux from 'reflux-core'

export const TYPES = {
  SHOW_NEWS_DIALOG: 'showNewsDialog',
  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_NEWS_PANE: 'showNewsPane',
  TOGGLE_NEWS_PANE: 'toggleNewsPane',
  CLOSE_NEWS_PANE: 'closeNewsPane',
  REMOVE_NEWS_BADGES: 'removeNewsBadges',

  SHOW_ABOUT: 'showAbout',

  SHOW_BROWSER: 'showBrowser',
  UPDATE_BROWSER: 'updateBrowser',

  CHANGE_THEME: 'changeTheme'
}

const Actions = Reflux.createActions({
  [TYPES.SHOW_NEWS_DIALOG]: {},
  [TYPES.SHOW_MODAL_DIALOG]: {},

  [TYPES.SHOW_NEWS_PANE]: {},
  [TYPES.TOGGLE_NEWS_PANE]: {},
  [TYPES.CLOSE_NEWS_PANE]: {},
  [TYPES.REMOVE_NEWS_BADGES]: {},

  [TYPES.SHOW_ABOUT]: {},
  [TYPES.SHOW_BROWSER]: {},
  [TYPES.UPDATE_BROWSER]: {},

  [TYPES.CHANGE_THEME]: {}
})

export default Actions
