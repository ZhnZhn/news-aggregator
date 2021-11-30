import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import A from '../Comp'
import PanelQuery from './PanelQuery'

const TITLE = "News Aggregator v0.4.0"

, CL_HEADER = "header"
, CL_PANEL_BROWSER = "header__panel-browser"
, CL_ICON_APP = "header__icon-app"
, CL_LABEL_APP = "header__label-app"
, CL_BROWSER_BTS = "header__browser-bts"
, CL_ARROW_DOWN = "arrow-down"
, CL_BTS = "header__bts"
, CL_BT_ABOUT = "header__bt-about"

, S_SVG_ICON = {
  position: 'relative',
  top: -1,
  verticalAlign: 'middle',
  margin: '0 8px'
};

const _ffClick = onClose => onClick => () => {
  onClick()
  onClose()
};

class HeaderBar extends Component {

  constructor(props){
    super(props)

    const {
      onWebz, onWebzCountry,
      onStackTagged, onStackSearch,
      onCryptoCompare, onCoinStats, onMessari,
      onIex, onFmp,
      onNewsSearch, onNewsTop
    } = props
    , _fClick = _ffClick(this._hCloseQuery);

    this._hWebz = _fClick(onWebz)
    this._hWebzCountry = _fClick(onWebzCountry)
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
    , TS = theme.createStyle(styleConfig)
    , { isQuery } = this.state;
    return (
      <div className={CL_HEADER} style={TS.HEADER}>
        <PanelQuery
          paneStyle={TS.PANE}
          className={CL_PANEL_BROWSER}
          isShow={isQuery}
          onClose={this._hToggleQuery}
          onWebz={this._hWebz}
          onWebzCountry={this._hWebzCountry}
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
           className={CL_ICON_APP}
           title={TITLE}
        />
        <AppLabel
           className={CL_LABEL_APP}
           caption={TITLE}
        />
        <span className={CL_BROWSER_BTS}>
          <A.FlatButton
            style={TS.BT.FLAT_ROOT}
            clDiv={TS.BT.CL_FLAT_DIV}
            caption="News"
            title="Open News Sources Browser"
            accessKey="n"
            onClick={onNewsSources}
          />
          <A.ModalButton
             style={TS.BT.FLAT_ROOT}
             clDiv={TS.BT.CL_FLAT_DIV}
             caption="Query"
             title="Panel Query Source"
             accessKey="q"
             onClick={this._hToggleQuery}
             onReg={this._onRegQuery}
          >
            <span className={CL_ARROW_DOWN} />
          </A.ModalButton>
        </span>
        <div className={CL_BTS}>
            <A.FlatButton
              className={CL_BT_ABOUT}
              style={TS.BT.FLAT_ROOT}
              clDiv={TS.BT.CL_FLAT_DIV}
              title="About News Aggregator"
              accessKey="a"
              onClick={onAbout}
            >
              <A.SvgInfo style={S_SVG_ICON} />
            </A.FlatButton>
            <A.FlatButton
              style={TS.BT.FLAT_ROOT}
              clDiv={TS.BT.CL_FLAT_DIV}
              title="Open Settings Dialog"
              accessKey="s"
              onClick={onSettings}
            >
              <A.SvgSettings style={S_SVG_ICON} />
            </A.FlatButton>
        </div>
      </div>
     );
   }
}


export default withTheme(HeaderBar)
