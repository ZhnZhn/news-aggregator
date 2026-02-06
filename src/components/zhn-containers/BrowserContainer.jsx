import { CL_HRZ_CONTAINER } from '../crStyle';
import {
  showAlertDialog,
  showDialog
} from '../../flux/compStore';
import MENU from '../../conf/NewsMenu'

import NewsBrowser from '../source-browsers/NewsBrowser'
import DialogContainer from './DialogContainer'

const BrowserContainer = (props) => (
  <div className={CL_HRZ_CONTAINER}>
    <NewsBrowser
       browserId={MENU.NEWS}
       useMsBrowser={props.useMsBrowser}
       onClick={showDialog}
       onError={showAlertDialog}
    />
    <DialogContainer
       maxDialog={3}
       useMsDialog={props.useMsDialog}
       closeDialog={props.closeDialog}
    />
  </div>
);

export default BrowserContainer
