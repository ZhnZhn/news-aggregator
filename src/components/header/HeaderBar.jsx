import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'
import FlatButton from '../zhn-atoms/FlatButton'
import ModalButton from '../zhn-atoms/ModalButton'
import PanelQuery from './PanelQuery'

const TITLE = "News Aggregator v0.3.0";

class HeaderBar extends Component {
  constructor(props){
    super()
    this.state = {
      isQuery: false
    }
  }

  _onRegQuery = (node) => {
    this.btQueryNode = node
  }
  _handleClickQuery = () => {
    this.setState({ isQuery: !this.state.isQuery })
  }
  _handleCloseQuery = (event) => {
    if (!this.btQueryNode.contains(event.target)){
      this.setState({ isQuery: false })
    }
  }

  _handleClickSource = (id) => {
    switch(id){
      case 'Webhose':
        this.props.onQuery()
        break;
      case 'StackTagged':
        this.props.onStackTagged()
        break;
      default:
    }
    this._handleClickQuery()
  }

  _handleChangeTheme = () => {
    const { theme, onChangeTheme } = this.props;
    if (theme.themeName === 'GREY'){
      theme.setThemeName('WHITE')
    } else {
      theme.setThemeName('GREY')
    }
    onChangeTheme()
  }

  render() {
    const {
            store, LOADING_ACTIONS,
            onNewsSources,
            onSettings, onAbout,
            theme
          } = this.props
        , S = theme.createStyle(styleConfig)
        , { isQuery } = this.state;
    return (
      <div className="header" style={S.HEADER}>
        <PanelQuery
          paneStyle={S.PANE}
          className="header__panel-browser"
          clItem={S.CL_QUERY_ITEM}
          isShow={isQuery}
          onClose={this._handleCloseQuery}
          onWebhose={this._handleClickSource.bind(null, 'Webhose')}
          onStackTagged={this._handleClickSource.bind(null, 'StackTagged')}
        />
        <LoadingProgress
           store={store}
           ACTIONS={LOADING_ACTIONS}
        />
        <IconAppLogo
           className="header__icon-app"
           title={TITLE}
           onClick={this._handleChangeTheme}
        />
        <AppLabel
           className="header__label-app"
           caption={TITLE}
           title="Click to Change UI Theme"
           onClick={this._handleChangeTheme}
        />
        <span className="header__browser-bts">
          <FlatButton
            rootStyle={S.BT.FLAT_ROOT}
            clDiv={S.BT.CL_FLAT_DIV}
            caption="News"
            title="Open News Sources Browser"
            onClick={onNewsSources}
          />
          <ModalButton
             //type="TypeA"
             rootStyle={S.BT.FLAT_ROOT}
             clDiv={S.BT.CL_FLAT_DIV}
             caption="Query"
             title="Panel Query Source"
             onClick={this._handleClickQuery}
             onReg={this._onRegQuery}
          >
            <span className="arrow-down"></span>
          </ModalButton>
        </span>
        <GitHubLink
          className="header__github-link"
          title="GitHub Repository"
          href="https://github.com/zhnzhn/news-aggregator"
        />
        <div className="header__bts">
            <FlatButton
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              //type="TypeA"
              caption="Settings"
              title="Open Settings Dialog"
              onClick={onSettings}
            />
            <FlatButton
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              //type="TypeA"
              caption="About"
              title="About"
              onClick={onAbout}
            />
        </div>
      </div>
     );
   }
}


export default withTheme(HeaderBar)
