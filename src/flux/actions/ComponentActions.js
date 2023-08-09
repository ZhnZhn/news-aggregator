import Reflux from 'reflux-core'

import QUERY from '../../conf/NewsQuery';
import MENU from '../../conf/NewsMenu';

export const CAT_SHOW_NEWS_DIALOG = 'showNewsDialog'

export const CAT_SHOW_NEWS_PANE = 'showNewsPane'
export const CAT_TOGGLE_NEWS_PANE = 'toggleNewsPane'
const CAT_CLOSE_NEWS_PANE = 'closeNewsPane'
const CAT_REMOVE_NEWS_BADGES = 'removeNewsBadges'

export const CAT_SHOW_BROWSER = 'showBrowser'
export const CAT_UPDATE_BROWSER = 'updateBrowser'

const Actions = Reflux.createActions({
  [CAT_SHOW_NEWS_DIALOG]: {},

  [CAT_SHOW_NEWS_PANE]: {},
  [CAT_TOGGLE_NEWS_PANE]: {},
  [CAT_CLOSE_NEWS_PANE]: {},
  [CAT_REMOVE_NEWS_BADGES]: {},

  [CAT_SHOW_BROWSER]: {},
  [CAT_UPDATE_BROWSER]: {}
});

const _fShowDialog = id => Actions.showNewsDialog.bind(null, id);
Actions.showWebz = _fShowDialog(QUERY.WEBZ)
Actions.showWebzCountry = _fShowDialog(QUERY.WEBZ_COUNTRY)
Actions.showReddit = _fShowDialog(QUERY.REDDIT)
Actions.showDevTo = _fShowDialog(QUERY.DEV_TO)
Actions.showStackTagged = _fShowDialog(QUERY.STACK_TAGGED)
Actions.showStackSearch= _fShowDialog(QUERY.STACK_SEARCH)
Actions.showCryptoCompare = _fShowDialog(QUERY.CRYPTO_COMPARE)
Actions.showCoinStats = _fShowDialog(QUERY.COIN_STATS)
Actions.showMessari = _fShowDialog(QUERY.MESSARI)
Actions.showIex= _fShowDialog(QUERY.IEX)
Actions.showFmp= _fShowDialog(QUERY.FMP)
Actions.showAv= _fShowDialog(QUERY.AV)
Actions.showNewsSearch = _fShowDialog(QUERY.NEWS_SEARCH)
Actions.showNewsTop = _fShowDialog(QUERY.NEWS_TOP)
Actions.showTheNewsSearch = _fShowDialog(QUERY.THE_NEWS_SEARCH)
Actions.showTheNewsTop = _fShowDialog(QUERY.THE_NEWS_TOP)

const _fShowBrowser = id => Actions.showBrowser.bind(null, id);
Actions.showNewsBrowser = _fShowBrowser(MENU.NEWS)

export const ComponentActions = Actions
