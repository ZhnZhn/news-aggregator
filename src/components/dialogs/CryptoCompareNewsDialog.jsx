import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInputs from './hooks/useRefInputs';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import InputSelect from '../zhn-m-input/InputSelect';
import { getItemValue } from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import PoweredBy from '../links/PoweredBy';
import { CryptoCompareLink } from '../links/Links';
import {
  crDfInputs,
  getPaneCaption
} from './DialogFn';

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
, INITIAL_INPUTS = crDfInputs({
   feed: getItemValue(DF_FEED),
   category: getItemValue(DF_CATEGORY),
   sortOrder: getItemValue(DF_SORTBY)
});

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
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'CCN',
      ...getRefValue(_refInputs)
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
          id="category"
          caption="Category"
          initItem={DF_CATEGORY}
          options={CATEGORY_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectInput}
        />
        <InputSelect
          id="feed"
          caption="Feed"
          initItem={DF_FEED}
          options={FEED_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectInput}
        />
        <InputSelect
          id="sortOrder"
          caption="SortBy"
          initItem={DF_SORTBY}
          options={SORTBY_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={_selectInput}
        />
        <PoweredBy style={TS.POWERED_BY}>
          <CryptoCompareLink />
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
};

export default CryptoCompareNewsDialog
