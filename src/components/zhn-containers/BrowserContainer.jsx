import React, { Component } from 'react'

import ComponentActions, { TYPES } from '../../flux/actions/ComponentActions'

import NewsBrowser from '../source-browsers/NewsBrowser'
import DialogContainer from './DialogContainer'

//const CL_MENU_ITEM = "row__news-source";

const onClick = ComponentActions.showNewsDialog;
const onError = ComponentActions.showModalDialog.bind(null, 'ALERT_DIALOG');
const onClickBadge = ComponentActions.toggleNewsPane;

class BrowserContainer extends Component {
  render(){
    const { store } = this.props;
    return (
      <div className="hrz-container">
        <NewsBrowser
           store={store}
           showAction={TYPES.SHOW_BROWSER}
           updateAction={TYPES.UPDATE_BROWSER}
           browserId="NEWS_API_ORG"
           //rowClass={CL_MENU_ITEM}
           onClick={onClick}
           onError={onError}
           onClickBadge={onClickBadge}
        />
        <DialogContainer
           maxDialog={3}
           store={store}
           showAction={TYPES.SHOW_NEWS_DIALOG}
        />
      </div>
    );
  }
}

export default BrowserContainer
