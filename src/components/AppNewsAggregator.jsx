import React, { Component } from 'react'

import Store from '../flux/stores/Store'
import Actions, { TYPES } from '../flux/actions/ComponentActions'
import { TYPES as LOADING_ACTIONS } from '../flux/actions/LoadingProgressActions'

import ThemeProvider from './hoc/ThemeProvider'
import theme  from './styles/theme'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

import QUERY from '../conf/NewsQuery'

const CL_COMP = "component-container";

class AppNewsAggregator extends Component {
  componentDidMount(){
    this.unsubscribe = Store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType) => {
    if (actionType === TYPES.CHANGE_THEME){
      this.forceUpdate()
    }
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <div>
          <HeaderBar
            store={Store}
            LOADING_ACTIONS={LOADING_ACTIONS}
            onChangeTheme={Actions.changeTheme}
            onNewsSources={Actions.showBrowser.bind(Actions, 'NEWS_API_ORG')}
            onQuery={Actions.showNewsDialog.bind(null, QUERY.WEBHOSE )}
            onStackTagged={Actions.showNewsDialog.bind(null, QUERY.STACK_TAGGED )}
            onStackSearch={Actions.showNewsDialog.bind(null, QUERY.STACK_SEARCH)}
            onIex={Actions.showNewsDialog.bind(null, QUERY.IEX)}
            onSettings={Actions.showModalDialog.bind(Actions, 'SETTINGS_DIALOG', Store.exportSettingsFn())}
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
      </ThemeProvider>
    );
  }
}

export default AppNewsAggregator
