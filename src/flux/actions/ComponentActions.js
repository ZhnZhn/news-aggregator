import Reflux from 'reflux-core'

export const CAT_SHOW_NEWS_PANE = 'showNewsPane'
export const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane'
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane'
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges'

const Actions = Reflux.createActions({
  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {}
});


export const ComponentActions = Actions
