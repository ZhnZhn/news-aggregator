import useHotKeys from './hotkeys/useHotKeys';

import { useUiTheme } from '../flux/storeAtoms';

import Store from '../flux/stores/Store'
import {
  CAT_SHOW_NEWS_PANE,
  ComponentActions
} from '../flux/actions/ComponentActions'
import {
  useMsAbout,
  useMsModalDialog,
  showAbout,
  showSettingsDialog
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
          onNewsSources={ComponentActions.showNewsBrowser}

          onWebz={ComponentActions.showWebz}
          onWebzCountry={ComponentActions.showWebzCountry}
          onReddit={ComponentActions.showReddit}
          onDevTo={ComponentActions.showDevTo}
          onStackTagged={ComponentActions.showStackTagged}
          onStackSearch={ComponentActions.showStackSearch}
          onCryptoCompare={ComponentActions.showCryptoCompare}
          onCoinStats = {ComponentActions.showCoinStats}
          onMessari={ComponentActions.showMessari}
          onIex={ComponentActions.showIex}
          onFmp={ComponentActions.showFmp}
          onAv={ComponentActions.showAv}
          onNewsSearch={ComponentActions.showNewsSearch}
          onNewsTop={ComponentActions.showNewsTop}
          onTheNewsSearch={ComponentActions.showTheNewsSearch}
          onTheNewsTop={ComponentActions.showTheNewsTop}

          onSettings={showSettingsDialog}
          onAbout={showAbout}
        />
        <div className={CL_COMP}>
          <BrowserContainer
            store={Store}
          />
          <About
            isInitShow={true}
            store={Store}
            useMsAbout={useMsAbout}
            hideAction={CAT_SHOW_NEWS_PANE}
          />
          <ComponentHrzContainer
            store={Store}
            addAction={CAT_SHOW_NEWS_PANE}
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
