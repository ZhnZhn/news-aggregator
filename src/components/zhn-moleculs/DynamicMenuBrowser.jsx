import React, { Component } from 'react'

import Browser from '../zhn-atoms/Browser'
import BrowserCaption from '../zhn-atoms/BrowserCaption'
import ScrollPane from '../zhn-atoms/ScrollPane'
import SpinnerLoading from '../zhn-atoms/SpinnerLoading'
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
  SPINNER_LOADING: {
    position: 'relative',
    display: 'block',
    textAlign: 'middle',
    margin: '0 auto',
    marginTop: '32px',
    width: '32px',
    height: '32px'
  },
  ROOT_MENU: {
    paddingLeft: '4px'
  }
}

class DynamicMenuBrowser extends Component {

  static defaultProps = {
    onError: ()=>{}
  }

  constructor(props){
    super()
    this.state = {
      isShow: true,
      isLoading: true,
      isLoadingFailed: false,
      menuModel: {}
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
    this._loadMenu()
  }
  componetWillUnmaount(){
    this.unsubscribe()
  }

  _onStore = (actionType, id) => {
    const { showAction, browserId } = this.props;
     if (actionType === showAction && id === browserId ){
       this.setState({ isShow: true })
     }
  }

  _loadMenu = () => {
    const { url, onError } = this.props;
    fetch(url)
      .then(response => {
          const { status } = response;
          if (status>=200 && status<400){
            return response.json();
          } else {
            throw ({ status, url });
          }
      })
      .then(json => {
         this.setState({ isLoading: false, menuModel: json })
      })
      .catch(err => {
          this.setState({ isLoadingFailed: true, isLoading: false })
          onError(err)
      })
  }

  _handleHide = () => {
    this.setState({ isShow: false })
  }

  _renderMenuParts({ styleConfig, menuModel, restProps }){
    const { menu=[], items={} } = menuModel;
    return menu.map((menuPart, index) => {
      return (
        <MenuPart
          {...menuPart}
          key={index}
          hmItems={items}
          styleConfig={styleConfig}
          {...restProps}
        />
      );
    })
  }

  render(){
    const { styleConfig:TS,
            caption,
            children, ...restProps } = this.props
        , { isShow, isLoading, isLoadingFailed, menuModel } = this.state;
    return (
      <Browser isShow={isShow} style={{...S.BROWSER, ...TS.BROWSER}}>
        <BrowserCaption
          rootStyle={TS.BROWSER_CAPTION}
          caption={caption}
          onClose={this._handleHide}
        />
        { isLoading && <SpinnerLoading style={S.SPINNER_LOADING} />}
        { isLoadingFailed && <SpinnerLoading style={S.SPINNER_LOADING} isFailed={true} />}
        <ScrollPane
           className={TS.CL_SCROLL_PANE}
           style={S.SCROLL_PANE}
        >
          {this._renderMenuParts({ styleConfig: TS, menuModel, restProps})}
          {children}
        </ScrollPane>
      </Browser>
    );
  }
}

export default DynamicMenuBrowser
