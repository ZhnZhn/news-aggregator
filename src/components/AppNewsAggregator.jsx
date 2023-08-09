import useHotKeys from './hotkeys/useHotKeys';

import { useUiTheme } from '../flux/storeAtoms';

import {
  useMsAbout,
  showAbout,

  useMsModalDialog,
  showSettingsDialog,

  useMsDialog,
  showAv,
  showWebz,
  showWebzCountry,
  showReddit,
  showDevTo,
  showStackTagged,
  showStackSearch,
  showCryptoCompare,
  showCoinStats,
  showMessari,
  showIex,
  showFmp,
  showNewsSearch,
  showNewsTop,
  showTheNewsSearch,
  showTheNewsTop,

  useMsBrowser,
  showNewsBrowser,

  useMsPane
} from '../flux/compStore';

import ThemeContext from './hooks/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const AppNewsAggregator = () => {
  const uiTheme = useUiTheme();
  useHotKeys()

  return (
    <ThemeContext.Provider value={uiTheme}>
      <div>
        <HeaderBar
          onNewsSources={showNewsBrowser}

          onWebz={showWebz}
          onWebzCountry={showWebzCountry}
          onReddit={showReddit}
          onDevTo={showDevTo}
          onStackTagged={showStackTagged}
          onStackSearch={showStackSearch}
          onCryptoCompare={showCryptoCompare}
          onCoinStats = {showCoinStats}
          onMessari={showMessari}
          onIex={showIex}
          onFmp={showFmp}
          onAv={showAv}
          onNewsSearch={showNewsSearch}
          onNewsTop={showNewsTop}
          onTheNewsSearch={showTheNewsSearch}
          onTheNewsTop={showTheNewsTop}

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
    </ThemeContext.Provider>
  );
};

export default AppNewsAggregator
