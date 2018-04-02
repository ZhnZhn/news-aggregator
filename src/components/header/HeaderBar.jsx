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

const TITLE = "News Aggregator v0.4.0";

const CL = {
  HEADER: "header",
    PANEL_BROWSER: "header__panel-browser",
    ICON_APP: "header__icon-app",
    LABEL_APP: "header__label-app",
    BROWSER_BTS: "header__browser-bts",
    ARROW_DOWN: "arrow-down",
    GITHUB_LINK: "header__github-link",
    BTS: "header__bts",
    BT_ABOUT: "header__bt-about"
};

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
      case 'StackSearch':
        this.props.onStackSearch()
        break;
      case 'Iex':
        this.props.onIex()
        break;
      case 'NewsSearch':
        this.props.onNewsSearch()
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
      <div className={CL.HEADER} style={S.HEADER}>
        <PanelQuery
          paneStyle={S.PANE}
          className={CL.PANEL_BROWSER}
          clItem={S.CL_QUERY_ITEM}
          isShow={isQuery}
          onClose={this._handleCloseQuery}
          onWebhose={this._handleClickSource.bind(null, 'Webhose')}
          onWebhoseBrodcast={this.props.onWebhoseBrodcast}
          onStackTagged={this._handleClickSource.bind(null, 'StackTagged')}
          onStackSearch={this._handleClickSource.bind(null, 'StackSearch')}
          onIex={this._handleClickSource.bind(null, 'Iex')}
          onNewsApi={this._handleClickSource.bind(null, 'NewsSearch')}
        />
        <LoadingProgress
           store={store}
           ACTIONS={LOADING_ACTIONS}
        />
        <IconAppLogo
           className={CL.ICON_APP}
           title={TITLE}
           onClick={this._handleChangeTheme}
        />
        <AppLabel
           className={CL.LABEL_APP}
           caption={TITLE}
           title="Click to Change UI Theme"
           onClick={this._handleChangeTheme}
        />
        <span className={CL.BROWSER_BTS}>
          <FlatButton
            rootStyle={S.BT.FLAT_ROOT}
            clDiv={S.BT.CL_FLAT_DIV}
            caption="News"
            title="Open News Sources Browser"
            accessKey="n"
            onClick={onNewsSources}
          />
          <ModalButton
             rootStyle={S.BT.FLAT_ROOT}
             clDiv={S.BT.CL_FLAT_DIV}
             caption="Query"
             title="Panel Query Source"
             accessKey="q"
             onClick={this._handleClickQuery}
             onReg={this._onRegQuery}
          >
            <span className={CL.ARROW_DOWN}></span>
          </ModalButton>
        </span>
        <GitHubLink
          className={CL.GITHUB_LINK}
          title="GitHub Repository"
          href="https://github.com/zhnzhn/news-aggregator"
        />
        <div className={CL.BTS}>
            <FlatButton
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              caption="Settings"
              title="Open Settings Dialog"
              accessKey="s"
              onClick={onSettings}
            />
            <FlatButton
              className={CL.BT_ABOUT}
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              caption="About"
              title="About"
              accessKey="a"
              onClick={onAbout}
            />
        </div>
      </div>
     );
   }
}


export default withTheme(HeaderBar)
