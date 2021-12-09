import { StrictMode, useState, useMemo } from 'react'

import useListen from './hooks/useListen'
import Store from '../flux/stores/Store'
import Actions, {
  CAT_CHANGE_THEME,
  CAT_SHOW_ABOUT,
  CAT_SHOW_NEWS_PANE,
  CAT_SHOW_MODAL_DIALOG
} from '../flux/actions/ComponentActions'

import initTheme  from './styles/theme'
import ThemeContext from './hoc/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const AppNewsAggregator = () => {
  const [theme, setTheme] = useState(initTheme)
  , _showSettings = useMemo(() => Actions.showModalDialog.bind(
     null, 'SETTINGS_DIALOG', Store.exportSettingsFn()
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
    <StrictMode>
    <ThemeContext.Provider value={theme}>
      <div>
        <HeaderBar
          store={Store}
          onChangeTheme={Actions.changeTheme}
          onNewsSources={Actions.showNewsBrowser}

          onWebz={Actions.showWebz}
          onWebzCountry={Actions.showWebzCountry}
          onStackTagged={Actions.showStackTagged}
          onStackSearch={Actions.showStackSearch}
          onCryptoCompare={Actions.showCryptoCompare}
          onCoinStats = {Actions.showCoinStats}
          onMessari={Actions.showMessari}
          onIex={Actions.showIex}
          onFmp={Actions.showFmp}
          onNewsSearch={Actions.showNewsSearch}
          onNewsTop={Actions.showNewsTop}

          onSettings={_showSettings}
          onAbout={Actions.showAbout}
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
    </StrictMode>
  );
};

export default AppNewsAggregator
