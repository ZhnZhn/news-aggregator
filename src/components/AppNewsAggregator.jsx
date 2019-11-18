import React, { Component } from 'react'

import Store from '../flux/stores/Store'
import Actions, { TYPES } from '../flux/actions/ComponentActions'
import { TYPES as LOADING_ACTIONS } from '../flux/actions/LoadingProgressActions'

import initTheme  from './styles/theme'
import ThemeContext from './hoc/ThemeContext'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

import QUERY from '../conf/NewsQuery'

const CL_COMP = "component-container";

const _fShowBrowser = id => Actions.showBrowser.bind(Actions, id);
const _fShowDialog = id => Actions.showNewsDialog.bind(null, id);
const _fSettings = () => Actions.showModalDialog.bind(
   Actions, 'SETTINGS_DIALOG', Store.exportSettingsFn()
 );

class AppNewsAggregator extends Component {
  constructor(props){
    super(props)
    this.showNewsBrowser = _fShowBrowser('NEWS_API_ORG')

    this.showWebhoseWeb = _fShowDialog(QUERY.WEBHOSE_WEB)
    this.showWebhoseBrodcast = _fShowDialog(QUERY.WEBHOSE_BRODCAST)
    this.showStackTagged = _fShowDialog(QUERY.STACK_TAGGED)
    this.showStackSearch= _fShowDialog(QUERY.STACK_SEARCH)
    this.showCryptoCompare = _fShowDialog(QUERY.CRYPTO_COMPARE)
    this.showIex= _fShowDialog(QUERY.IEX)
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
      <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <HeaderBar
            store={Store}
            LOADING_ACTIONS={LOADING_ACTIONS}
            onChangeTheme={Actions.changeTheme}
            onNewsSources={this.showNewsBrowser}
            onQuery={this.showWebhoseWeb}
            onWebhoseBrodcast={this.showWebhoseBrodcast}
            onStackTagged={this.showStackTagged}
            onStackSearch={this.showStackSearch}
            onCryptoComapre={this.showCryptoCompare}
            onIex={this.showIex}
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
      </React.StrictMode>
    );
  }
}

export default AppNewsAggregator
