import useFocusRefElementIf from '../hooks/useFocusRefElementIf';

import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP,
  ALPHA_VANTAGE,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';

import ModalPopup from '../zhn-moleculs/ModalPopup';
import MenuItem from '../zhn-atoms/MenuItem';
import OpenClose from '../zhn-atoms/OpenClose';

const CL_ITEM = 'row__topic';

const PanelQuery = ({
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
  const _refFirstItem = useFocusRefElementIf(isShow);

  return (
    <ModalPopup
      isShow={isShow}
      className={className}
      style={paneStyle}
      onClose={onClose}
    >
        <OpenClose
          refBt={_refFirstItem}
          caption="Blockchain"
        >
        <MenuItem
          className={CL_ITEM}
          caption={`${CRYPTO_COMPARE}: News`}
          onClick={onCryptoCompare}
        />
        <MenuItem
          className={CL_ITEM}
          caption={`${COIN_STATS}: News`}
          onClick={onCoinStats}
        />
        <MenuItem
          className={CL_ITEM}
          caption={`${MESSARI}: Blockchain News`}
          onClick={onMessari}
        />
        </OpenClose>
        <MenuItem
          className={CL_ITEM}
          caption={`${IEX_CLOUD}: Stock Market News`}
          onClick={onIex}
        />
        <MenuItem
          className={CL_ITEM}
          caption={`${FMP}: Stock Market News`}
          onClick={onFmp}
        />
        <MenuItem
          className={CL_ITEM}
          caption={`${ALPHA_VANTAGE}: Sentiment`}
          onClick={onAv}
        />
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
        <MenuItem
          className={CL_ITEM}
          caption={`${STACK_OVERFLOW}: Tagged Questions`}
          onClick={onStackTagged}
        />
        <MenuItem
          className={CL_ITEM}
          caption={`${STACK_OVERFLOW}: Search Questions`}
          onClick={onStackSearch}
        />
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
     </ModalPopup>
  );
};

export default PanelQuery
