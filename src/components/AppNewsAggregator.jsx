import React from 'react'

import Store from '../flux/stores/Store'
import Actions, { TYPES } from '../flux/actions/ComponentActions'
import { TYPES as LOADING_ACTIONS } from '../flux/actions/LoadingProgressActions'

import HeaderBar from './header/HeaderBar'
import BrowserContainer from './zhn-containers/BrowserContainer'
import About from './about/About'
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer'
import ModalDialogContainer from './zhn-containers/ModalDialogContainer'
import RouterModalDialog from './dialogs/RouterModalDialog'

const CL_COMP = "component-container";

const _webhose = {
    "type": "W_WEBHOSE",
    "dialogType": "WebhoseQuery",
    "paneCaption": "Webhose Query",
    "paneId": "webhose",
    "dialogProps": {
      "caption": "Webhose Query",
      "source": "webhose"
    }
}

const AppNewsAggregator = () => (
  <div>
    <HeaderBar
      store={Store}
      LOADING_ACTIONS={LOADING_ACTIONS}
      onNewsSources={Actions.showBrowser.bind(Actions, 'NEWS_API_ORG')}
      onQuery={Actions.showNewsDialog.bind(null, _webhose )}
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
);

export default AppNewsAggregator
