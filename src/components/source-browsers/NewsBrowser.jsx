import React, { Component } from 'react'

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'
import PoweredBy from '../links/PoweredBy'
import { LinkNewsApi } from '../links/Links'
//import LinkNewsApi from '../links/LinkNewsApi'

class NewsBrowser extends Component {

  constructor(){
    super()
    this.state = {
      itemData: {}
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option) => {
      const { updateAction, browserId } = this.props;
      if (actionType === updateAction && option.id === browserId ){
        this.setState({ itemData: option.data })
      }
  }

  render(){
    const {
            rowClass, store, showAction, browserId,
            onClick, onError,
            onClickBadge
          } = this.props;
    const { itemData } = this.state;
    return (
      <DynamicMenuBrowser
         caption="News Sources"
         url="data/news-source-menu.json"
         rowClass={rowClass}
         store={store}
         browserId={browserId}
         itemData={itemData}
         showAction={showAction}
         onClick={onClick}
         onError={onError}
         onClickBadge={onClickBadge}
      >
         <PoweredBy>
           <LinkNewsApi />
         </PoweredBy>
      </DynamicMenuBrowser>
    );
  }
}

export default NewsBrowser
