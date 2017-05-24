import React, { Component } from 'react'

import Browser from '../zhn-atoms/Browser'
import BrowserCaption from '../zhn-atoms/BrowserCaption'
import ScrollPane from '../zhn-atoms/ScrollPane'
import MenuPart from './MenuPart'

const S = {
  BROWSER: {
    paddingRight: '0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px',
    //paddingLeft: '4px'
  },
  ROOT_MENU: {
    paddingLeft: '4px'
  }
}

class MenuBrowser extends Component {

  _renderMenuParts({ menuModel, rowClass, onClick }){
    const { menu=[], items={} } = menuModel
    return menu.map((menuPart, index) => {
      return (
        <MenuPart
          {...menuPart}
          key={index}
          rowClass={rowClass}
          hmItems={items}
          onClick={onClick}
        />
      );
    })
  }

  render(){
    const { caption, ...restProps } = this.props;
    return (
      <Browser isShow={true} style={S.BROWSER}>
        <BrowserCaption
          caption={caption}
        />
        <ScrollPane style={S.SCROLL_PANE}>
          {this._renderMenuParts(restProps)}
        </ScrollPane>
      </Browser>
    );
  }
}

export default MenuBrowser
