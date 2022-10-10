import {
  useState,
  useCallback,
  useEffect
} from '../uiApi';

import useListen from '../hooks/useListen';

import Comp from '../Comp';
import MenuPart from './MenuPart';

const {
  Browser,
  BrowserCaption,
  ModalSlider,
  ScrollPane,
  SpinnerLoading,
  ItemStack
} = Comp;

const CL_MENU_MORE = "popup-menu items__menu-more";

const S_BROWSER = {
  paddingRight: 0
}
, S_SCROLL_PANE = {
  height: '92%',
  paddingRight: 10,
  overflowY: 'auto'
}
, S_SPINNER_LOADING = {
  position: 'relative',
  display: 'block',
  width: 32,
  height: 32,
  margin: '0 auto',
  marginTop: 32,
  textAlign: 'middle'
};

const FN_NOOP = () => {};
/*
const INITIAL_MENU_MODEL = {
  menu: [],
  items: {}
};
*/

const _crItemMenuPart = (
  menuPart,
  index,
  propOptions
) => (
  <MenuPart
    {...menuPart}
    {...propOptions}
    key={index}
  />
);

const DynamicMenuBrowser = ({
  styleConfig,
  caption,
  menuMore,
  store,
  showAction,
  browserId,
  url,
  onError=FN_NOOP,
  children,
  itemData,
  onClick,
  onClickBadge
}) => {
  const [isShow, setIsShow] = useState(true)
  , [isMore, setIsMore] = useState(false)
  , [isLoading, setIsLoading] = useState(true)
  , [isLoadingFailed, setIsLoadingFailed] = useState(false)
  , [menuModel, setMenuModel] = useState()
  , _hHide = useCallback(()=>setIsShow(false), [])
  , _hShowMore = useCallback(() => setIsMore(true), [])
  , _hCloseMore = useCallback(()=> setIsMore(false), []);

  useListen(store, (actionType, id)=>{
     if (actionType === showAction && id === browserId) {
       setIsShow(true)
     }
  })

  /*eslint-disable react-hooks/exhaustive-deps*/
  useEffect(()=>{
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
         setIsLoading(false)
         setMenuModel(json)
      })
      .catch(err => {
         setIsLoading(false)
         setIsLoadingFailed(true)
         onError(err)
      })
  }, [])
  //url, onError
  /*eslint-enable react-hooks/exhaustive-deps*/

  const {menu, items} = menuModel || {}
  , _onMore = menuMore ? _hShowMore : void 0
  , TS = styleConfig;

  return (
    <Browser isShow={isShow} style={{...S_BROWSER, ...TS.BROWSER}}>
      {
        menuMore && <ModalSlider
          isShow={isMore}
          className={CL_MENU_MORE}
          style={TS.EL_BORDER}
          model={menuMore}
          onClose={_hCloseMore}
        />
      }
      <BrowserCaption
        style={TS.BROWSER_CAPTION}
        caption={caption}
        onMore={_onMore}
        onClose={_hHide}
      />
      { isLoading && <SpinnerLoading style={S_SPINNER_LOADING} />}
      { isLoadingFailed && <SpinnerLoading style={S_SPINNER_LOADING} isFailed={true} />}
      <ScrollPane
         style={S_SCROLL_PANE}
      >
        <ItemStack
          items={menu}
          crItem={_crItemMenuPart}
          styleConfig={styleConfig}
          itemData={itemData}
          browserId={browserId}
          hmItems={items}
          onClick={onClick}
          onClickBadge={onClickBadge}
        />
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default DynamicMenuBrowser
