import {
  useState,
  useMemo
} from '../uiApi';

import useListen from '../hooks/useListen';
import useTheme from '../hooks/useTheme';

import styleConfig from './NewsBrowser.Style';

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser';
import PoweredBy from '../links/PoweredBy';
import Link from '../links/Links';
import crModelMore from './crModelMore';

const NewsBrowser = ({
  store,
  browserId,
  showAction,
  updateAction,
  onClick,
  onError,
  onClickBadge,
  onRemoveBadges
}) => {
  const TS = useTheme(styleConfig)
  , [
    itemData,
    setItemData
  ] = useState({})
  /*eslint-disable react-hooks/exhaustive-deps */
  , _menuMore = useMemo(
      () => crModelMore({ onRemoveBadges }),
      []);
  //onRemoveBadges
  /*eslint-enable react-hooks/exhaustive-deps */


  useListen(store, (actionType, option) => {
    if (actionType === updateAction && option.id === browserId ){
      setItemData({...option.data})
    }
  })

  return (
    <DynamicMenuBrowser
       styleConfig={TS}
       caption="News Sources"
       url="data/news-source-menu.json"
       store={store}
       browserId={browserId}
       itemData={itemData}
       showAction={showAction}
       menuMore={_menuMore}
       onClick={onClick}
       onError={onError}
       onClickBadge={onClickBadge}
    >
       <PoweredBy>
         <Link.NewsApi />
       </PoweredBy>
    </DynamicMenuBrowser>
  );
}

export default NewsBrowser
