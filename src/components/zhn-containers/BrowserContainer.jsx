import {
  CAT_SHOW_BROWSER,
  CAT_UPDATE_BROWSER,
  ComponentActions
} from '../../flux/actions/ComponentActions'
import {
  showAlertDialog,
  showDialog
} from '../../flux/compStore';
import MENU from '../../conf/NewsMenu'

import NewsBrowser from '../source-browsers/NewsBrowser'
import DialogContainer from './DialogContainer'

const onClickBadge = ComponentActions.toggleNewsPane
const onRemoveBadges = ComponentActions.removeNewsBadges.bind(null, { browserId: MENU.NEWS });

const BrowserContainer = ({
  store,
  useMsDialog
}) => (
  <div className="hrz-container">
    <NewsBrowser
       store={store}
       showAction={CAT_SHOW_BROWSER}
       updateAction={CAT_UPDATE_BROWSER}
       browserId={MENU.NEWS}
       onClick={showDialog}
       onError={showAlertDialog}
       onClickBadge={onClickBadge}
       onRemoveBadges={onRemoveBadges}
    />
    <DialogContainer
       maxDialog={3}
       useMsDialog={useMsDialog}
    />
  </div>
);


export default BrowserContainer
