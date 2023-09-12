import useHotKeys from './hotkeys/useHotKeys';

import {
  useMsAbout,
  showAbout,
  useMsModalDialog,
  showSettingsDialog,
  useMsDialog,
  useMsBrowser,
  showNewsBrowser,
  useMsPane
} from '../flux/compStore';

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const AppNewsAggregator = () => {
  useHotKeys()
  return (
    <div>
      <HeaderBar
        onNewsSources={showNewsBrowser}
        onSettings={showSettingsDialog}
        onAbout={showAbout}
      />
      <div className={CL_COMP}>
        <BrowserContainer
          useMsBrowser={useMsBrowser}
          useMsDialog={useMsDialog}
        />
        <About
          isInitShow={true}
          useMsAbout={useMsAbout}
        />
        <ComponentHrzContainer
          useMsPane={useMsPane}
        />
      </div>
      <ModalDialogContainer
        router={RouterModalDialog}
        useMsModalDialog={useMsModalDialog}
      />
    </div>
  );
};

export default AppNewsAggregator
