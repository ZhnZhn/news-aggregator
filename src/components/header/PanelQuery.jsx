import React, { Component } from 'react'

import A from '../Comp'

const CL_ITEM = 'row__topic';

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
     onIex,
     onNewsApi, onNewsTop,
     onStackTagged, onStackSearch,
     onWebhose, onWebhoseBrodcast,
     onClose
   } = this.props;
    return (
      <A.ModalPopup
        isShow={isShow}
        className={className}
        style={paneStyle}
        onClose={onClose}
      >
          <A.MenuItem
            ref={this._refFirstItem}
            className={CL_ITEM}
            caption="IEX Cloud: Stock News"
            onClick={onIex}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="NewsApi: Search"
            onClick={onNewsApi}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="NewsApi: Top By"
            onClick={onNewsTop}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="StackOverflow: Tagged Questions"
            onClick={onStackTagged}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="StackOverflow: Search Questions"
            onClick={onStackSearch}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="Webhose: Broadcast"
            onClick={onWebhoseBrodcast}
            onClose={onClose}
          />
          <A.MenuItem
            className={CL_ITEM}
            caption="Webhose: News, Blogs"
            onClick={onWebhose}
            onClose={onClose}
          />
       </A.ModalPopup>
    );
  }
}

export default PanelQuery
