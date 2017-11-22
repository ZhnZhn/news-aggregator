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

  render(){
    const {
           className, paneStyle, isShow,
           clItem,
           onWebhose,
           onStackTagged, onStackSearch,
           onIex,
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
            ref={comp => this.firstItem = comp}
            className={clItem}
            caption="Webhose"
            onClick={onWebhose}
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
        </ShowHide>
     </ModalPane>
    );
  }
}

export default PanelQuery
