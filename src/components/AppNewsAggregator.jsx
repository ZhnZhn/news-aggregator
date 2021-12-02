import { StrictMode, Component } from 'react'

import Store from '../flux/stores/Store'
import Actions, { TYPES } from '../flux/actions/ComponentActions'

import initTheme  from './styles/theme'
import ThemeContext from './hoc/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

import QUERY from '../conf/NewsQuery'
import MENU from '../conf/NewsMenu'

const CL_COMP = "component-container";

const _fShowBrowser = id => Actions.showBrowser.bind(Actions, id);
const _fShowDialog = id => Actions.showNewsDialog.bind(null, id);
const _fSettings = () => Actions.showModalDialog.bind(
   Actions, 'SETTINGS_DIALOG', Store.exportSettingsFn()
 );

class AppNewsAggregator extends Component {
  constructor(props){
    super(props)
    this.showNewsBrowser = _fShowBrowser(MENU.NEWS)

    this.showWebz = _fShowDialog(QUERY.WEBZ)
    this.showWebzCountry = _fShowDialog(QUERY.WEBZ_COUNTRY)
    this.showStackTagged = _fShowDialog(QUERY.STACK_TAGGED)
    this.showStackSearch= _fShowDialog(QUERY.STACK_SEARCH)
    this.showCryptoCompare = _fShowDialog(QUERY.CRYPTO_COMPARE)
    this.showCoinStats = _fShowDialog(QUERY.COIN_STATS)
    this.showMessari = _fShowDialog(QUERY.MESSARI)
    this.showIex= _fShowDialog(QUERY.IEX)
    this.showFmp= _fShowDialog(QUERY.FMP)
    this.showNewsSearch = _fShowDialog(QUERY.NEWS_SEARCH)
    this.showNewsTop = _fShowDialog(QUERY.NEWS_TOP)

    this.showSettings = _fSettings()
    this.state = {
      theme: initTheme
    }
  }

  componentDidMount(){
    this.unsubscribe = Store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, themeName) => {
    if (actionType === TYPES.CHANGE_THEME){
      this.setState(({ theme }) => {
          theme.setThemeName(themeName)
          return {
            theme: {...theme}
          };
      })
    }
  }

  render(){
    const { theme } = this.state;
    return (
      <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <HeaderBar
            store={Store}
            onChangeTheme={Actions.changeTheme}
            onNewsSources={this.showNewsBrowser}
            onWebz={this.showWebz}
            onWebzCountry={this.showWebzCountry}
            onStackTagged={this.showStackTagged}
            onStackSearch={this.showStackSearch}
            onCryptoCompare={this.showCryptoCompare}
            onCoinStats = {this.showCoinStats}
            onMessari={this.showMessari}
            onIex={this.showIex}
            onFmp={this.showFmp}
            onNewsSearch={this.showNewsSearch}
            onNewsTop={this.showNewsTop}
            onSettings={this.showSettings}
            onAbout={Actions.showAbout}
          />
          <div className={CL_COMP}>
            <BrowserContainer
              store={Store}
            />
            <About
              isInitShow={true}
              store={Store}
              showAction={TYPES.SHOW_ABOUT}
              hideAction={TYPES.SHOW_NEWS_PANE}
            />
            <ComponentHrzContainer
              store={Store}
              addAction={TYPES.SHOW_NEWS_PANE}
            />
          </div>
          <ModalDialogContainer
            store={Store}
            router={RouterModalDialog}
            showAction={TYPES.SHOW_MODAL_DIALOG}
          />
        </div>
      </ThemeContext.Provider>
      </StrictMode>
    );
  }
}

export default AppNewsAggregator
