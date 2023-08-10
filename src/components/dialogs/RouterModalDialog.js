import {
  SETTINGS_DIALOG,
  ALERT_DIALOG
} from '../../conf/MdType';

import SettingsDialog from '../header/SettingsDialog';
import AlertDialog from './AlertDialog';

const RouterModalDialog = {
  [SETTINGS_DIALOG]: SettingsDialog,
  [ALERT_DIALOG]: AlertDialog,
};

export default RouterModalDialog
