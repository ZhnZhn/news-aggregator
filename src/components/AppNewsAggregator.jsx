import useHotKeys from './hotkeys/useHotKeys';

import { useUiTheme } from '../flux/storeAtoms';
import settingStore from '../flux/settingStore';

import Store from '../flux/stores/Store'
import {
  CAT_SHOW_NEWS_PANE,
  CAT_SHOW_MODAL_DIALOG,
  ComponentActions
} from '../flux/actions/ComponentActions'
import {
  useMsAbout,
  showAbout
} from '../flux/compStore';

import ThemeContext from './hooks/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const _showSettings = ComponentActions
 .showModalDialog.bind(
   null,
   'SETTINGS_DIALOG',
   settingStore.exportSettingsFn()
);

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

          onSettings={_showSettings}
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
            //showAction={CAT_SHOW_ABOUT}
            hideAction={CAT_SHOW_NEWS_PANE}
          />
          <ComponentHrzContainer
            store={Store}
            addAction={CAT_SHOW_NEWS_PANE}
          />
        </div>
        <ModalDialogContainer
          store={Store}
          router={RouterModalDialog}
          showAction={CAT_SHOW_MODAL_DIALOG}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default AppNewsAggregator
