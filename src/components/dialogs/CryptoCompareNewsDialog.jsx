import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import InputSelect from '../zhn-m-input/InputSelect';
import { getItemValue } from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import PoweredBy from '../links/PoweredBy';
import { CryptoCompareLink } from '../links/Links';
import { getPaneCaption } from './DialogFn';

const FEED_OPTIONS = [
  ['All', 'ALL_NEWS_FEEDS'],
  ['Decrypt', 'decrypt'],
  ['CoinDesk', 'coindesk'],
  ['CoinTelegraph', 'cointelegraph'],
  ['CryptoCompare', 'cryptocompare']
]
, DF_FEED = FEED_OPTIONS[0]
, CATEGORY_OPTIONS = [
  ['All', 'ALL_NEWS_CATEGORIES'],
  ['Altcoin'],
  ['Asia'],
  ['Blockchain'],
  ['Business'],
  ['Commodity'],
  ['Exchange'],
  ['Fiat'],
  ['ICO'],
  ['Market'],
  ['Mining'],
  ['Regulation'],
  ['Trading'],
  ['Technology'],
  ['Sponsored'],
  ['Wallet']
]
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, SORTBY_OPTIONS = [
  ['Latest', 'latest'],
  ['Popular', 'popular']
], DF_SORTBY = SORTBY_OPTIONS[0]
, INITIAL_FEED_VALUE = getItemValue(DF_FEED)
, INITIAL_CATEGORY_VALUE = getItemValue(DF_CATEGORY)
, INITIAL_SORTBY_VALUE = getItemValue(DF_SORTBY);

const CryptoCompareNewsDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [
    _refDialog,
    _hClose
  ] = useRefClose(onClose)
  , [
    _refFeed,
    _selectFeed
  ] = useRefSelectOption(INITIAL_FEED_VALUE)
  , [
    _refCategory,
    _selectCategory
  ] = useRefSelectOption(INITIAL_CATEGORY_VALUE)
  , [
    _refSortBy,
    _selectSortBy
  ] = useRefSelectOption(INITIAL_SORTBY_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'CCN',
      feed: getRefValue(_refFeed),
      category: getRefValue(_refCategory),
      sortOrder: getRefValue(_refSortBy)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , paneCaption = getPaneCaption(itemConf);

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption={paneCaption}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <FlexColumn>
        <InputSelect
          caption="Category"
          initItem={DF_CATEGORY}
          options={CATEGORY_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectCategory}
        />
        <InputSelect
          caption="Feed"
          initItem={DF_FEED}
          options={FEED_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectFeed}
        />
        <InputSelect
          caption="SortBy"
          initItem={DF_SORTBY}
          options={SORTBY_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectSortBy}
        />
        <PoweredBy style={TS.POWERED_BY}>
          <CryptoCompareLink />
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
};

export default CryptoCompareNewsDialog
