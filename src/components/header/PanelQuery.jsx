import { HAS_TOUCH_EVENTS } from '../has';
import useTheme from '../hooks/useTheme';
import useFocusRefElementIf from '../hooks/useFocusRefElementIf';

import styleConfig from '../source-browsers/NewsBrowser.Style';

import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP_LONG,
  ALPHA_VANTAGE,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';

import ModalPopup from '../zhn-moleculs/ModalPopup';
import MenuItem from '../zhn-atoms/MenuItem';
import OpenClose from '../zhn-atoms/OpenClose';

const HAS_NOT_TOUCH_EVENTS = !HAS_TOUCH_EVENTS;
const CL_ITEM = 'row__topic';

const S_HORIZONTAL_LINE = {
  margin: '0 16px',
  borderBottom: '1px solid black'
};

const PanelQuery = ({
  refFocusItem,
  className,
  paneStyle,
  isShow,
  onCryptoCompare,
  onCoinStats,
  onMessari,
  onIex,
  onFmp,
  onAv,
  onNewsApi,
  onNewsTop,
  onTheNewsSearch,
  onTheNewsTop,
  onStackTagged,
  onStackSearch,
  onWebz,
  onWebzCountry,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _refFirstItem = useFocusRefElementIf(
      isShow && HAS_NOT_TOUCH_EVENTS,
      refFocusItem
    );

  return (
    <ModalPopup
      isShow={isShow}
      className={className}
      style={paneStyle}
      onClose={onClose}
    >
        <OpenClose
          refBt={_refFirstItem}
          style={TS.OPEN_CLOSE}
          itemStyle={TS.ITEM}
          caption="Blockchain"
        >
          <MenuItem
            className={CL_ITEM}
            caption={CRYPTO_COMPARE}
            onClick={onCryptoCompare}
          />
          <MenuItem
            className={CL_ITEM}
            caption={COIN_STATS}
            onClick={onCoinStats}
          />
          <MenuItem
            className={CL_ITEM}
            caption={MESSARI}
            onClick={onMessari}
          />
        </OpenClose>
        <OpenClose
           caption="Stock Market"
           style={TS.OPEN_CLOSE}
           itemStyle={TS.ITEM}
        >
          <MenuItem
             className={CL_ITEM}
             caption={`${ALPHA_VANTAGE}: Sentiment`}
             onClick={onAv}
           />
           <MenuItem
             className={CL_ITEM}
             caption={IEX_CLOUD}
             onClick={onIex}
           />
           <MenuItem
             className={CL_ITEM}
             caption={FMP_LONG}
             onClick={onFmp}
           />
        </OpenClose>
        <OpenClose
           caption="General News"
           style={TS.OPEN_CLOSE}
           itemStyle={TS.ITEM}
        >
           <MenuItem
             className={CL_ITEM}
             caption={`${NEWS_API_LONG}: Search`}
             onClick={onNewsApi}
           />
           <MenuItem
             className={CL_ITEM}
             caption={`${NEWS_API_LONG}: Top By`}
             onClick={onNewsTop}
           />
           <div style={S_HORIZONTAL_LINE} />
           <MenuItem
             className={CL_ITEM}
             caption={`${THE_NEWS_API}: Search`}
             onClick={onTheNewsSearch}
           />
           <MenuItem
             className={CL_ITEM}
             caption={`${THE_NEWS_API}: Top By`}
             onClick={onTheNewsTop}
           />
           <div style={S_HORIZONTAL_LINE} />
           <MenuItem
             className={CL_ITEM}
             caption={`${WEBZ_IO}: News, Blogs`}
             onClick={onWebz}
           />
           <MenuItem
             className={CL_ITEM}
             caption={`${WEBZ_IO}: By Country, Topic`}
             onClick={onWebzCountry}
           />
        </OpenClose>
        <OpenClose
           caption={STACK_OVERFLOW}
           style={TS.OPEN_CLOSE}
           itemStyle={TS.ITEM}
        >
           <MenuItem
             className={CL_ITEM}
             caption="Tagged Questions"
             onClick={onStackTagged}
           />
           <MenuItem
             className={CL_ITEM}
             caption="Search Questions"
             onClick={onStackSearch}
           />
        </OpenClose>
     </ModalPopup>
  );
};

export default PanelQuery
