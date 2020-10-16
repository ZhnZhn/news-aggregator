import { Component } from 'react'

import Comp from '../Comp'
import MenuPart from './MenuPart'

const {
   Browser, BrowserCaption, ModalSlider,
   ScrollPane, SpinnerLoading
} = Comp;

const CL = {
  MENU_MORE: "popup-menu items__menu-more"
};

const S = {
  BROWSER: {
    paddingRight: 0
  },
  SCROLL_PANE: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  SPINNER_LOADING: {
    position: 'relative',
    display: 'block',
    width: 32,
    height: 32,
    margin: '0 auto',
    marginTop: 32,
    textAlign: 'middle'
  },
  ROOT_MENU: {
    paddingLeft: 4
  }
}

class DynamicMenuBrowser extends Component {

  static defaultProps = {
    onError: ()=>{}
  }

  state = {
    isShow: true,
    isLoading: true,
    isLoadingFailed: false,
    isMore: false,
    menuModel: {}
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
         this.setState({
           isLoading: false,
           menuModel: json
         })
      })
      .catch(err => {
          this.setState({
            isLoadingFailed: true,
            isLoading: false
          })
          onError(err)
      })
  }

  _handleHide = () => {
    this.setState({ isShow: false })
  }

  _showMore = () => {
    this.setState({ isMore: true })
  }
  _closeMore = () => {
    this.setState({ isMore: false })
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
    const {
      styleConfig:TS,
      caption,
      menuMore,
      children, ...restProps
    } = this.props
    , {
      isShow, isLoading, isLoadingFailed,
      isMore,
      menuModel
    } = this.state
    , _onMore = menuMore ? this._showMore : void 0;
    return (
      <Browser isShow={isShow} style={{...S.BROWSER, ...TS.BROWSER}}>
        {
          menuMore && <ModalSlider
            isShow={isMore}
            className={CL.MENU_MORE}
            style={TS.EL_BORDER}
            model={menuMore}
            onClose={this._closeMore}
          />
        }
        <BrowserCaption
          rootStyle={TS.BROWSER_CAPTION}
          caption={caption}
          onMore={_onMore}
          onClose={this._handleHide}
        />
        { isLoading && <SpinnerLoading style={S.SPINNER_LOADING} />}
        { isLoadingFailed && <SpinnerLoading style={S.SPINNER_LOADING} isFailed={true} />}
        <ScrollPane
           className={TS.CL_SCROLL_PANE}
           style={S.SCROLL_PANE}
        >
          {this._renderMenuParts({ styleConfig: TS, menuModel, restProps })}
          {children}
        </ScrollPane>
      </Browser>
    );
  }
}

export default DynamicMenuBrowser
