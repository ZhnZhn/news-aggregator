import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import A from '../Comp'
import PanelQuery from './PanelQuery'

const TITLE = "News Aggregator v0.4.0";

const CL = {
  HEADER: "header",
    PANEL_BROWSER: "header__panel-browser",
    ICON_APP: "header__icon-app",
    LABEL_APP: "header__label-app",
    BROWSER_BTS: "header__browser-bts",
    ARROW_DOWN: "arrow-down",
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

const _ffClick = onClose => onClick => () => {
  onClick()
  onClose()
};

class HeaderBar extends Component {

  constructor(props){
    super(props)

    const {
      onWebhose,
      onStackTagged, onStackSearch,
      onCryptoCompare, onCoinStats, onMessari,
      onIex, onFmp,
      onNewsSearch, onNewsTop
    } = props
    , _fClick = _ffClick(this._hCloseQuery);

    this._hWebhose = _fClick(onWebhose)
    this._hStackTagged = _fClick(onStackTagged)
    this._hStackSearch = _fClick(onStackSearch)
    this._hCryptoCompare = _fClick(onCryptoCompare)
    this._hCoinStats = _fClick(onCoinStats)
    this._hMessari = _fClick(onMessari)
    this._hIex = _fClick(onIex)
    this._hFmp = _fClick(onFmp)
    this._hNewsApi = _fClick(onNewsSearch)
    this._hNewsTop = _fClick(onNewsTop)

    this.state = {
      isQuery: false
    }
  }

  _onRegQuery = (node) => {
    this.btQueryNode = node
  }
  _hToggleQuery = () => {
    this.setState(prevState => ({
      isQuery: !prevState.isQuery
    }))
  }
  _hCloseQuery = (event) => {
    this.setState({ isQuery: false })
  }

  render() {
    const {
            store, LOADING_ACTIONS,
            theme,
            onNewsSources,
            onSettings, onAbout
          } = this.props
        , S = theme.createStyle(styleConfig)
        , { isQuery } = this.state;
    return (
      <div className={CL.HEADER} style={S.HEADER}>
        <PanelQuery
          paneStyle={S.PANE}
          className={CL.PANEL_BROWSER}
          isShow={isQuery}
          onClose={this._hToggleQuery}
          onWebhose={this._hWebhose}
          onWebhoseBrodcast={this._hWebhoseBrodcast}
          onStackTagged={this._hStackTagged}
          onStackSearch={this._hStackSearch}
          onCryptoCompare={this._hCryptoCompare}
          onCoinStats={this._hCoinStats}
          onMessari={this._hMessari}
          onIex={this._hIex}
          onFmp={this._hFmp}
          onNewsApi={this._hNewsApi}
          onNewsTop={this._hNewsTop}
        />
        <LoadingProgress
           store={store}
           ACTIONS={LOADING_ACTIONS}
        />
        <IconAppLogo
           className={CL.ICON_APP}
           title={TITLE}
        />
        <AppLabel
           className={CL.LABEL_APP}
           caption={TITLE}
        />
        <span className={CL.BROWSER_BTS}>
          <A.FlatButton
            style={S.BT.FLAT_ROOT}
            clDiv={S.BT.CL_FLAT_DIV}
            caption="News"
            title="Open News Sources Browser"
            accessKey="n"
            onClick={onNewsSources}
          />
          <A.ModalButton
             style={S.BT.FLAT_ROOT}
             clDiv={S.BT.CL_FLAT_DIV}
             caption="Query"
             title="Panel Query Source"
             accessKey="q"
             onClick={this._hToggleQuery}
             onReg={this._onRegQuery}
          >
            <span className={CL.ARROW_DOWN} />
          </A.ModalButton>
        </span>
        <div className={CL.BTS}>
            <A.FlatButton
              style={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              title="Open Settings Dialog"
              accessKey="s"
              onClick={onSettings}
            >
              <A.SvgSettings style={STYLE.SVG_ICON} />
            </A.FlatButton>
            <A.FlatButton
              className={CL.BT_ABOUT}
              style={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              title="About News Aggregator"
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
