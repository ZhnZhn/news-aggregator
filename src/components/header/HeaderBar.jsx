import {
  useRef,
  useCallback,
  setRefValue
} from '../uiApi';

import {
  crContainerBgCn,
  crPanelShadowCn
} from '../crStyle';

import useToggle from '../hooks/useToggle';
import useHotKey from '../hotkeys/useHotKey';

import {
  HK_QUERY_SOURCES,
  HK_SETTINGS,
  HK_ABOUT
} from '../hotkeys/hotkeys';

import {
  DP_BOTTOM_LEFT,
  DP_BOTTOM_RIGHT
} from '../DP';

import { APP_TITLE } from '../styles/tokens';

import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import A from '../Comp';
import PanelQuery from './PanelQuery';

import crMenuQuery from './crMenuQuery';

const HEADER = "header"
, CL_HEADER = crContainerBgCn(HEADER)
, CL_PANEL_BROWSER = crPanelShadowCn(
   crContainerBgCn(`${HEADER}__panel-browser`)
 )
, CL_ICON_APP = `${HEADER}__icon-app`
, CL_LABEL_APP = `${HEADER}__label-app`
, CL_BROWSER_BTS = `${HEADER}__browser-bts`
, CL_ARROW_DOWN = "arrow-down"
, CL_BTS = `${HEADER}__bts`
, CL_BT_ABOUT = `${HEADER}__bt-about`

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
  , _menuQuery = crMenuQuery(
    APP_TITLE,
    onNewsSources,
    onAbout,
    _hCloseQuery
  );

  useHotKey(HK_QUERY_SOURCES, toggleIsQuery)

  return (
    <div className={CL_HEADER}>
      <PanelQuery
        isShow={isQuery}
        menuModel={_menuQuery}
        refFocusItem={_refFocusItem}
        className={CL_PANEL_BROWSER}
        onClose={_hCloseQuery}
      />
      <LoadingProgress />
      <IconAppLogo
         ariaLabel={APP_TITLE}
         dataPos={DP_BOTTOM_LEFT}
         className={CL_ICON_APP}
      />
      <AppLabel
         className={CL_LABEL_APP}
         caption={APP_TITLE}
      />
      <span className={CL_BROWSER_BTS}>
        <A.ModalButton
           ariaLabel="Query Sources Menu"
           dataPos={DP_BOTTOM_RIGHT}
           caption="Query"
           hotKey={HK_QUERY_SOURCES}
           onClick={toggleIsQuery}
        >
          <span className={CL_ARROW_DOWN} />
        </A.ModalButton>
      </span>
      <div className={CL_BTS}>
          <A.FlatButton
            ariaLabel="About News Aggregator"
            dataPos={DP_BOTTOM_RIGHT}
            className={CL_BT_ABOUT}
            hotKey={HK_ABOUT}
            onClick={onAbout}
          >
            <A.SvgInfo style={S_SVG_ICON} />
          </A.FlatButton>
          <A.FlatButton
            ariaLabel="Settings Dialog"
            dataPos={DP_BOTTOM_RIGHT}
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
