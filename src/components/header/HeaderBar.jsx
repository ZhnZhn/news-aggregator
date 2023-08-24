import {
  useRef,
  useCallback,
  setRefValue
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useTheme from '../hooks/useTheme';
import useHotKey from '../hotkeys/useHotKey';
import styleConfig from './HeaderBar.Style';

import {
  HK_NEWS_BROWSER,
  HK_QUERY_SOURCES,
  HK_SETTINGS,
  HK_ABOUT
} from '../hotkeys/hotkeys';

import {
  DP_BOTTOM_LEFT,
  DP_BOTTOM_RIGHT
} from '../DP';

import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import A from '../Comp';
import PanelQuery from './PanelQuery';

import crMenuQuery from './crMenuQuery';

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

const HeaderBar = ({
  onNewsSources,
  onSettings,
  onAbout
}) => {
  const _refFocusItem = useRef()
  , [
    isQuery,
    toggleIsQuery
  ] = useToggle()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCloseQuery = useCallback(evt => {
     const _menuItemElement = evt && evt.target;
     setRefValue(
       _refFocusItem,
       _menuItemElement && _menuItemElement.role === 'menuitem'
         ? _menuItemElement
         : null
     )
     toggleIsQuery(false)
  }, [])
  // toggleIsQuery
  /*eslint-enable react-hooks/exhaustive-deps */
  , TS = useTheme(styleConfig)
  , _menuQuery = crMenuQuery(_hCloseQuery);

  useHotKey(HK_QUERY_SOURCES, toggleIsQuery)

  return (
    <div className={CL_HEADER} style={TS.HEADER}>
      <PanelQuery
        menuModel={_menuQuery}
        refFocusItem={_refFocusItem}
        paneStyle={TS.PANE}
        className={CL_PANEL_BROWSER}
        isShow={isQuery}
        onClose={_hCloseQuery}
      />
      <LoadingProgress />
      <IconAppLogo
         ariaLabel={TITLE}
         dataPos={DP_BOTTOM_LEFT}
         className={CL_ICON_APP}
      />
      <AppLabel
         className={CL_LABEL_APP}
         caption={TITLE}
      />
      <span className={CL_BROWSER_BTS}>
        <A.FlatButton
          ariaLabel="News Sources Browser"
          dataPos={DP_BOTTOM_LEFT}
          clDiv={TS.BT.CL_FLAT_DIV}
          caption="News"
          hotKey={HK_NEWS_BROWSER}
          onClick={onNewsSources}
        />
        <A.ModalButton
           ariaLabel="Query Sources Menu"
           dataPos={DP_BOTTOM_RIGHT}
           clDiv={TS.BT.CL_FLAT_DIV}
           caption="Query"
           hotKey={HK_QUERY_SOURCES}
           onClick={toggleIsQuery}
           //onClick={_hToggleQuery}
        >
          <span className={CL_ARROW_DOWN} />
        </A.ModalButton>
      </span>
      <div className={CL_BTS}>
          <A.FlatButton
            ariaLabel="About News Aggregator"
            dataPos={DP_BOTTOM_RIGHT}
            className={CL_BT_ABOUT}
            clDiv={TS.BT.CL_FLAT_DIV}
            hotKey={HK_ABOUT}
            onClick={onAbout}
          >
            <A.SvgInfo style={S_SVG_ICON} />
          </A.FlatButton>
          <A.FlatButton
            ariaLabel="Settings Dialog"
            dataPos={DP_BOTTOM_RIGHT}
            clDiv={TS.BT.CL_FLAT_DIV}
            hotKey={HK_SETTINGS}
            onClick={onSettings}
          >
            <A.SvgSettings style={S_SVG_ICON} />
          </A.FlatButton>
      </div>
    </div>
  );
};

export default HeaderBar
