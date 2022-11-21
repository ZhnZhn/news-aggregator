import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';

import {
  useRef,
  useEffect,
  focusRefElement
} from '../uiApi';

import A from '../Comp';

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
  const _refFirstItem = useRef()
  , _refPrevEl = useRef();

  useEffect(()=>{
    if (isShow && !_refPrevEl.current) {
      _refPrevEl.current = document.activeElement
      focusRefElement(_refFirstItem)
    } else if (!isShow) {
      focusRefElement(_refPrevEl)
      _refPrevEl.current = null
    }
  }, [isShow])

  return (
    <A.ModalPopup
      isShow={isShow}
      className={className}
      style={paneStyle}
      onClose={onClose}
    >
        <A.MenuItem
          ref={_refFirstItem}
          className={CL_ITEM}
          caption={`${CRYPTO_COMPARE}: News`}
          onClick={onCryptoCompare}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${COIN_STATS}: News`}
          onClick={onCoinStats}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${MESSARI}: Blockchain News`}
          onClick={onMessari}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${IEX_CLOUD}: Stock Market News`}
          onClick={onIex}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${FMP}: Stock Market News`}
          onClick={onFmp}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${NEWS_API_LONG}: Search`}
          onClick={onNewsApi}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${NEWS_API_LONG}: Top By`}
          onClick={onNewsTop}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${THE_NEWS_API}: Search`}
          onClick={onTheNewsSearch}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${THE_NEWS_API}: Top By`}
          onClick={onTheNewsTop}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${STACK_OVERFLOW}: Tagged Questions`}
          onClick={onStackTagged}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${STACK_OVERFLOW}: Search Questions`}
          onClick={onStackSearch}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${WEBZ_IO}: News, Blogs`}
          onClick={onWebz}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption={`${WEBZ_IO}: By Country, Topic`}
          onClick={onWebzCountry}
          onClose={onClose}
        />
     </A.ModalPopup>
  );
};

export default PanelQuery
