import React, { Component } from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import MenuItem from '../zhn-atoms/MenuItem'
import ShowHide from '../zhn-atoms/ShowHide'

class PanelQuery extends Component {
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps){
      if (this.props.isShow && !prevProps.isShow) {
        this.prevFocused = document.activeElement
        this.firstItem.focus()
      } else if ( !this.props.isShow && prevProps.isShow) {
        if (this.prevFocused) {
          this.prevFocused.focus()
        }
      }
    }
  }

  _refFirstItem = comp => this.firstItem = comp

  render(){
    const {
           className, paneStyle, isShow,
           clItem,
           onWebhose, onWebhoseBrodcast,
           onStackTagged, onStackSearch,
           onIex,
           onNewsApi,
           onClose
         } = this.props;

    return (
      <ModalPane
        isShow={isShow}
        onClose={onClose}
      >
        <ShowHide
          className={className}
          style={paneStyle}
          isShow={isShow}
        >
          <MenuItem
            ref={this._refFirstItem}
            className={clItem}
            caption="Webhose: News, Blogs"
            onClick={onWebhose}
            onClose={onClose}
          />
          <MenuItem
            className={clItem}
            caption="Webhose: Broadcast"
            onClick={onWebhoseBrodcast}
            onClose={onClose}
          />
          <MenuItem
            className={clItem}
            caption="StackOverflow: Tagged Questions"
            onClick={onStackTagged}
            onClose={onClose}
          />
          <MenuItem
            className={clItem}
            caption="StackOverflow: Search Questions"
            onClick={onStackSearch}
            onClose={onClose}
          />
          <MenuItem
            className={clItem}
            caption="IEX Stock News"
            onClick={onIex}
            onClose={onClose}
          />
          <MenuItem
            className={clItem}
            caption="NewsApi Headlines"
            onClick={onNewsApi}
            onClose={onClose}
          />
        </ShowHide>
     </ModalPane>
    );
  }
}

export default PanelQuery
