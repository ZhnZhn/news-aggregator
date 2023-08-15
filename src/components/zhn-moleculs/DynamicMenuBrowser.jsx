import {
  useState,
  useEffect
} from '../uiApi';

import useBool from '../hooks/useBool';

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
, S_BROWSER_CAPTION = {
  textAlign: 'left'
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
  browserId,
  useMsBrowser,
  url,
  onError=FN_NOOP,
  children,
  onClick
}) => {
  const [
    isShow,
    setIsShowTrue,
    setIsShowFalse
  ] = useBool(true)
  , [
    isMore,
    setIsMoreTrue,
    setIsMoreFalse
  ] = useBool(false)
  , [
    isLoading,
    setIsLoading
  ] = useState(true)
  , [
    isLoadingFailed,
    setIsLoadingFailed
  ] = useState(false)
  , [
    menuModel,
    setMenuModel
  ] = useState();

  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === browserId) {
      setIsShowTrue()
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

  const {
    menu,
    items
  } = menuModel || {}
  , _onMore = menuMore
     ? setIsMoreTrue
     : void 0
  , TS = styleConfig
  , _styleBrowserCaption = {
    paddingLeft: menuMore ? 30 : 10
  };

  return (
    <Browser
      isShow={isShow}
      style={{...S_BROWSER, ...TS.BROWSER}}
    >
      {
        menuMore && <ModalSlider
          isShow={isMore}
          className={CL_MENU_MORE}
          style={TS.EL_BORDER}
          model={menuMore}
          onClose={setIsMoreFalse}
        />
      }
      <BrowserCaption
        style={{
          ...S_BROWSER_CAPTION,
          ..._styleBrowserCaption,
          ...TS.BROWSER_CAPTION
        }}
        caption={caption}
        onMore={_onMore}
        onClose={setIsShowFalse}
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
          browserId={browserId}
          hmItems={items}
          onClick={onClick}
        />
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default DynamicMenuBrowser
