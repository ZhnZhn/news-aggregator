import {
  useState,
  useMemo
} from './uiApi';

import useListen from './hooks/useListen'
import Store from '../flux/stores/Store'
import {
  CAT_CHANGE_THEME,
  CAT_SHOW_ABOUT,
  CAT_SHOW_NEWS_PANE,
  CAT_SHOW_MODAL_DIALOG,
  ComponentActions
} from '../flux/actions/ComponentActions'

import { initialTheme } from './styles/theme'
import ThemeContext from './hooks/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const AppNewsAggregator = () => {
  const [
    theme,
    setTheme
  ] = useState(initialTheme)
  , _showSettings = useMemo(() => ComponentActions
     .showModalDialog.bind(
       null,
       'SETTINGS_DIALOG',
       Store.exportSettingsFn()
  ), []);

  useListen(Store, (actionType, themeName)=>{
    if (actionType === CAT_CHANGE_THEME){
      setTheme(prevTheme => {
        prevTheme.setThemeName(themeName)
        return {...prevTheme};
      })
    }
  })

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <HeaderBar
          store={Store}
          onChangeTheme={ComponentActions.changeTheme}
          onNewsSources={ComponentActions.showNewsBrowser}

          onWebz={ComponentActions.showWebz}
          onWebzCountry={ComponentActions.showWebzCountry}
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
          onAbout={ComponentActions.showAbout}
        />
        <div className={CL_COMP}>
          <BrowserContainer
            store={Store}
          />
          <About
            isInitShow={true}
            store={Store}
            showAction={CAT_SHOW_ABOUT}
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
