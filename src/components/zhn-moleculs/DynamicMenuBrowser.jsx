import { useState } from '../uiApi';
import { HAS_WIDE_SCREEN } from '../has';
import { crPopupMenuCn } from '../crStyle'

import useBool from '../hooks/useBool';
import useLoadIf from '../hooks/useLoadIf';

import Comp from '../Comp';
import MenuPart from './MenuPart';

const {
  Browser,
  BrowserCaption,
  ModalSlider,
  ScrollPane,
  ItemStack
} = Comp;


const CL_MENU_MORE = crPopupMenuCn("items__menu-more")
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
  ] = useBool(HAS_WIDE_SCREEN)
  , [
    isMore,
    setIsMoreTrue,
    setIsMoreFalse
  ] = useBool(false)
  , [
    menuModel,
    setMenuModel
  ] = useState()
  , loadingSpinner = useLoadIf(
     isShow,
     url,
     setMenuModel,
     onError
   );

  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === browserId) {
      setIsShowTrue()
    }
  })

  const {
    menu,
    items
  } = menuModel || {}
  , _onMore = menuMore
     ? setIsMoreTrue
     : void 0
  , _styleBrowserCaption = {
    paddingLeft: menuMore ? 30 : 10
  };

  return (
    <Browser
      isShow={isShow}
      style={S_BROWSER}
    >
      {
        menuMore && <ModalSlider
          isShow={isMore}
          className={CL_MENU_MORE}
          model={menuMore}
          onClose={setIsMoreFalse}
        />
      }
      <BrowserCaption
        style={{
          ...S_BROWSER_CAPTION,
          ..._styleBrowserCaption
        }}
        caption={caption}
        onMore={_onMore}
        onClose={setIsShowFalse}
      />
      {loadingSpinner}
      <ScrollPane
         style={S_SCROLL_PANE}
      >
        <ItemStack
          items={menu}
          crItem={_crItemMenuPart}
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
