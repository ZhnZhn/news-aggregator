import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'
import A from '../zhn-atoms/Atoms'
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

const STYLE = {
  SVG_ICON: {
    position: 'relative',
    top: -1,
    verticalAlign: 'middle',
    marginLeft: 8,
    marginRight: 8
  }
};

class HeaderBar extends Component {

  constructor(props){
    super(props)

    this._hWebhose= this._hClickSource.bind(null, 'Webhose')
    this._hStackTagged=this._hClickSource.bind(null, 'StackTagged')
    this._hStackSearch=this._hClickSource.bind(null, 'StackSearch')
    this._hIex=this._hClickSource.bind(null, 'Iex')
    this._hNewsApi=this._hClickSource.bind(null, 'NewsSearch')

    this.state = {
      isQuery: false
    }
  }

  _onRegQuery = (node) => {
    this.btQueryNode = node
  }
  _hClickQuery = () => {
    this.setState({ isQuery: !this.state.isQuery })
  }
  _hCloseQuery = (event) => {
    if (!this.btQueryNode.contains(event.target)){
      this.setState({ isQuery: false })
    }
  }

  _hClickSource = (id) => {
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
    this._hClickQuery()
  }

  _hChangeTheme = () => {
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
          isShow={isQuery}
          onClose={this._hCloseQuery}
          onWebhose={this._hWebhose}
          onWebhoseBrodcast={this.props.onWebhoseBrodcast}
          onStackTagged={this._hStackTagged}
          onStackSearch={this._hStackSearch}
          onIex={this._hIex}
          onNewsApi={this._hNewsApi}
        />
        <LoadingProgress
           store={store}
           ACTIONS={LOADING_ACTIONS}
        />
        <IconAppLogo
           className={CL.ICON_APP}
           title={TITLE}
           onClick={this._hChangeTheme}
        />
        <AppLabel
           className={CL.LABEL_APP}
           caption={TITLE}
           title="Click to Change UI Theme"
           onClick={this._hChangeTheme}
        />
        <span className={CL.BROWSER_BTS}>
          <A.FlatButton
            rootStyle={S.BT.FLAT_ROOT}
            clDiv={S.BT.CL_FLAT_DIV}
            caption="News"
            title="Open News Sources Browser"
            accessKey="n"
            onClick={onNewsSources}
          />
          <A.ModalButton
             rootStyle={S.BT.FLAT_ROOT}
             clDiv={S.BT.CL_FLAT_DIV}
             caption="Query"
             title="Panel Query Source"
             accessKey="q"
             onClick={this._hClickQuery}
             onReg={this._onRegQuery}
          >
            <span className={CL.ARROW_DOWN} />
          </A.ModalButton>
        </span>
        <GitHubLink
          className={CL.GITHUB_LINK}
          title="GitHub Repository"
          href="https://github.com/zhnzhn/news-aggregator"
        />
        <div className={CL.BTS}>
            <A.FlatButton
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              title="Open Settings Dialog"
              accessKey="s"
              onClick={onSettings}
            >
              <A.SvgSettings style={STYLE.SVG_ICON} />
            </A.FlatButton>
            <A.FlatButton
              className={CL.BT_ABOUT}
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              title="About web app News Aggregator"
              accessKey="a"
              onClick={onAbout}
            >
              <A.SvgInfo style={STYLE.SVG_ICON} />
            </A.FlatButton>
        </div>
      </div>
     );
   }
}


export default withTheme(HeaderBar)
