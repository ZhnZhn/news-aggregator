import ComponentActions, { TYPES } from '../../flux/actions/ComponentActions'
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
       showAction={TYPES.SHOW_BROWSER}
       updateAction={TYPES.UPDATE_BROWSER}
       browserId={MENU.NEWS}
       onClick={onClick}
       onError={onError}
       onClickBadge={onClickBadge}
       onRemoveBadges={onRemoveBadges}
    />
    <DialogContainer
       maxDialog={3}
       store={store}
       showAction={TYPES.SHOW_NEWS_DIALOG}
    />
  </div>
);


export default BrowserContainer
