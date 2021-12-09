import ComponentActions, {
  CAT_SHOW_BROWSER,
  CAT_UPDATE_BROWSER,
  CAT_SHOW_NEWS_DIALOG
} from '../../flux/actions/ComponentActions'
import MENU from '../../conf/NewsMenu'

import NewsBrowser from '../source-browsers/NewsBrowser'
import DialogContainer from './DialogContainer'

const onClick = ComponentActions.showNewsDialog;
const onError = ComponentActions.showModalDialog.bind(null, 'ALERT_DIALOG');
const onClickBadge = ComponentActions.toggleNewsPane
const onRemoveBadges = ComponentActions.removeNewsBadges.bind(null, { browserId: MENU.NEWS });

const BrowserContainer = ({ store }) => (
  <div className="hrz-container">
    <NewsBrowser
       store={store}
       showAction={CAT_SHOW_BROWSER}
       updateAction={CAT_UPDATE_BROWSER}
       browserId={MENU.NEWS}
       onClick={onClick}
       onError={onError}
       onClickBadge={onClickBadge}
       onRemoveBadges={onRemoveBadges}
    />
    <DialogContainer
       maxDialog={3}
       store={store}
       showAction={CAT_SHOW_NEWS_DIALOG}
    />
  </div>
);


export default BrowserContainer
