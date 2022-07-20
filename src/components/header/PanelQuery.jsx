import {
  useRef,
  useEffect
} from '../uiApi';

import A from '../Comp';

const CL_ITEM = 'row__topic';

const _isFn = fn => typeof fn === 'function';

const _focusRefElement = ref => {
  const _el = ref.current;
  if (_el && _isFn(_el.focus)) {
    _el.focus()
  }
};

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
      _focusRefElement(_refFirstItem)
    } else if (!isShow) {
      _focusRefElement(_refPrevEl)
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
          caption="CryptoCompare: News"
          onClick={onCryptoCompare}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="CoinStats: News"
          onClick={onCoinStats}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="Messari: Blockchain News"
          onClick={onMessari}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="IEX Cloud: Stock Market News"
          onClick={onIex}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="FMP: Stock Market News"
          onClick={onFmp}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="NewsApi: Search"
          onClick={onNewsApi}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="NewsApi: Top By"
          onClick={onNewsTop}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="StackOverflow: Tagged Questions"
          onClick={onStackTagged}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="StackOverflow: Search Questions"
          onClick={onStackSearch}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="Webz.io: News, Blogs"
          onClick={onWebz}
          onClose={onClose}
        />
        <A.MenuItem
          className={CL_ITEM}
          caption="Webz.io: By Country, Topic"
          onClick={onWebzCountry}
          onClose={onClose}
        />
     </A.ModalPopup>
  );
};

export default PanelQuery
