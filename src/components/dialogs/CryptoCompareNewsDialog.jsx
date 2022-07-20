import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const FEED_OPTIONS = [
  { caption: 'All', value: 'ALL_NEWS_FEEDS' },
  { caption: 'Decrypt', value: 'decrypt' },
  { caption: 'CoinDesk', value: 'coindesk' },
  { caption: 'CoinTelegraph', value: 'cointelegraph' },
  { caption: 'CryptoCompare', value: 'cryptocompare' },
]
, DF_FEED = FEED_OPTIONS[0]
, CATEGORY_OPTIONS = [
  { caption: 'All', value: 'ALL_NEWS_CATEGORIES' },
  { caption: 'Altcoin', value: 'Altcoin' },
  { caption: 'Asia', value: 'Asia' },
  { caption: 'Blockchain', value: 'Blockchain' },
  { caption: 'Business', value: 'Business' },
  { caption: 'Commodity', value: 'Commodity' },
  { caption: 'Exchange', value: 'Exchange' },
  { caption: 'Fiat', value: 'Fiat' },
  { caption: 'ICO', value: 'ICO' },
  { caption: 'Market', value: 'Market' },
  { caption: 'Mining', value: 'Mining' },
  { caption: 'Regulation', value: 'Regulation' },
  { caption: 'Trading', value: 'Trading' },
  { caption: 'Technology', value: 'Technology' },
  { caption: 'Sponsored', value: 'Sponsored' },
  { caption: 'Wallet', value: 'Wallet' },
]
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, SORTBY_OPTIONS = [
  {caption: 'Latest', value: 'latest'},
  {caption: 'Popular', value: 'popular'},
], DF_SORTBY = SORTBY_OPTIONS[0]

const _getRefValue = ref => ref.current;

const CryptoCompareNewsDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refFeed, _selectFeed] = useRefSelectOption(DF_FEED.value)
  , [_refCategory, _selectCategory] = useRefSelectOption(DF_CATEGORY.value)
  , [_refSortBy, _selectSortBy] = useRefSelectOption(DF_SORTBY.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type, source, itemConf,
      loadId: 'CCN',
      feed: _getRefValue(_refFeed),
      category: _getRefValue(_refCategory),
      sortOrder: _getRefValue(_refSortBy)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="CryptoCompare News"
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <div>
        <A.InputSelect
          caption="Feed"
          initItem={DF_FEED}
          options={FEED_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectFeed}
        />
      </div>
      <div>
        <A.InputSelect
          caption="Category"
          initItem={DF_CATEGORY}
          options={CATEGORY_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectCategory}
        />
      </div>
      <div>
       <A.InputSelect
         caption="SortBy"
         initItem={DF_SORTBY}
         options={SORTBY_OPTIONS}
         styleConfig={TS.SELECT}
         onSelect={_selectSortBy}
       />
      </div>
      <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
        <A.Link.CryptoCompare />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default CryptoCompareNewsDialog
