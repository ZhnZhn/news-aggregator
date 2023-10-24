import {
  showAlertDialog,
  showDialog
} from '../../flux/compStore';
import MENU from '../../conf/NewsMenu'

import NewsBrowser from '../source-browsers/NewsBrowser'
import DialogContainer from './DialogContainer'

const BrowserContainer = ({
  useMsBrowser,
  useMsDialog,
  closeDialog
}) => (
  <div className="hrz-container">
    <NewsBrowser
       browserId={MENU.NEWS}
       useMsBrowser={useMsBrowser}
       onClick={showDialog}
       onError={showAlertDialog}
    />
    <DialogContainer
       maxDialog={3}
       useMsDialog={useMsDialog}
       closeDialog={closeDialog}
    />
  </div>
);

export default BrowserContainer
