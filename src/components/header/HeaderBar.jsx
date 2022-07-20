import {
  useState,
  useCallback
} from '../uiApi';

import useTheme from '../hooks/useTheme';
import styleConfig from './HeaderBar.Style';

import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import A from '../Comp';
import PanelQuery from './PanelQuery';

const TITLE = "News Aggregator v0.4.0"

, CL_HEADER = "header"
, CL_PANEL_BROWSER = `${CL_HEADER}__panel-browser`
, CL_ICON_APP = `${CL_HEADER}__icon-app`
, CL_LABEL_APP = `${CL_HEADER}__label-app`
, CL_BROWSER_BTS = `${CL_HEADER}__browser-bts`
, CL_ARROW_DOWN = "arrow-down"
, CL_BTS = `${CL_HEADER}__bts`
, CL_BT_ABOUT = `${CL_HEADER}__bt-about`

, S_SVG_ICON = {
  position: 'relative',
  top: -1,
  verticalAlign: 'middle',
  margin: '0 8px'
};

/*eslint-disable react-hooks/exhaustive-deps */
const _useClickItem = (
  onClick,
  onClose
) =>
 useCallback(() => {
   onClick()
   onClose()
 }, [])
 // onClick, onClose
/*eslint-enable react-hooks/exhaustive-deps */

const HeaderBar = ({
  store,
  onNewsSources,
  onSettings,
  onAbout,
  onWebz,
  onWebzCountry,
  onStackTagged,
  onStackSearch,
  onCryptoCompare,
  onCoinStats,
  onMessari,
  onIex,
  onFmp,
  onNewsSearch,
  onNewsTop
}) => {
  const [isQuery, setIsQuery] = useState(false)
  , _hCloseQuery = useCallback(() => setIsQuery(false), [])
  , _hToggleQuery = useCallback(() => setIsQuery(is => !is), [])
  , _hWebz = _useClickItem(onWebz, _hCloseQuery)
  , _hWebzCountry = _useClickItem(onWebzCountry, _hCloseQuery)
  , _hStackTagged = _useClickItem(onStackTagged, _hCloseQuery)
  , _hStackSearch = _useClickItem(onStackSearch, _hCloseQuery)
  , _hCryptoCompare = _useClickItem(onCryptoCompare, _hCloseQuery)
  , _hCoinStats = _useClickItem(onCoinStats, _hCloseQuery)
  , _hMessari = _useClickItem(onMessari, _hCloseQuery)
  , _hIex = _useClickItem(onIex, _hCloseQuery)
  , _hFmp = _useClickItem(onFmp, _hCloseQuery)
  , _hNewsApi = _useClickItem(onNewsSearch, _hCloseQuery)
  , _hNewsTop = _useClickItem(onNewsTop, _hCloseQuery)
  , TS = useTheme(styleConfig)

  return (
    <div className={CL_HEADER} style={TS.HEADER}>
      <PanelQuery
        paneStyle={TS.PANE}
        className={CL_PANEL_BROWSER}
        isShow={isQuery}
        onClose={_hToggleQuery}
        onWebz={_hWebz}
        onWebzCountry={_hWebzCountry}
        onStackTagged={_hStackTagged}
        onStackSearch={_hStackSearch}
        onCryptoCompare={_hCryptoCompare}
        onCoinStats={_hCoinStats}
        onMessari={_hMessari}
        onIex={_hIex}
        onFmp={_hFmp}
        onNewsApi={_hNewsApi}
        onNewsTop={_hNewsTop}
      />
      <LoadingProgress
         store={store}
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
           onClick={_hToggleQuery}
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
};

export default HeaderBar
