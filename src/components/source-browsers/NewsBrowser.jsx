import React, { Component } from 'react'

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'
import LinkNewsApi from '../links/LinkNewsApi'

const S = {
  BOTTOM: {
    marginTop: '16px',
    marginLeft: '8px'
  },
  TEXT: {
    color: 'black'
  }
}

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
         <div style={S.BOTTOM}>
           <span style={S.TEXT}>Powered by&nbsp;&nbsp;</span>
           <LinkNewsApi />
         </div>
      </DynamicMenuBrowser>
    );
  }
}

/*
const NewsBrowser = ({
  menuModel, rowClass, store, showAction, onClick, onError
}) => {
  return (
    <DynamicMenuBrowser
       caption="News Sources"
       url="data/news-source-menu.json"
       rowClass={rowClass}
       store={store}
       browserId="NEWS-API-ORG"
       showAction={showAction}
       onClick={onClick}
       onError={onError}
    >
       <div style={S.BOTTOM}>
         <span style={S.TEXT}>Powered by&nbsp;&nbsp;</span>
         <LinkNewsApi />
       </div>
    </DynamicMenuBrowser>
  );
}
*/

export default NewsBrowser
