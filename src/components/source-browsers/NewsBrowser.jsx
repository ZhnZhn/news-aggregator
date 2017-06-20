import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './NewsBrowser.Style'

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'
import PoweredBy from '../links/PoweredBy'
import { LinkNewsApi } from '../links/Links'

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
            store, showAction, browserId,
            theme,
            onClick, onError,
            onClickBadge
          } = this.props
        , S = theme.createStyle(styleConfig)
    const { itemData } = this.state;
    return (
      <DynamicMenuBrowser
         clScrollPane={S.CL_SCROLL_PANE}
         browserStyle={S.ROOT}
         browserCaptionStyle={S.BROWSER_CAPTION}
         openCloseStyle={S.OPEN_CLOSE}
         itemStyle={S.ITEM}
         badgeStyle={S.BADGE}
         caption="News Sources"
         url="data/news-source-menu.json"
         rowClass={S.CL_MENU_ITEM}
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

export default withTheme(NewsBrowser)
