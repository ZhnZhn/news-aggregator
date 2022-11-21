import {
  THE_NEWS_API
} from '../../conf/ProviderNames';

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
import {
  getItemValue
} from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import {
  PoweredByNewsApi
} from '../links/PoweredByLink';
import {
  CATEGORY_OPTIONS,
  DF_CATEGORY,
  INITIAL_CAREGORY_VALUE
} from './TheNewsApiDialogFn';

const LOCALE_OPTIONS = [
  ["All", "all"],
  ["Argentina", "ar"],
  ["Armenia", "am"],
  ["Australia", "au"],
  ["Austria", "at"],
  ["Belarus", "by"],
  ["Belgium", "be"],
  ["Bolivia", "bo"],
  ["Brazil", "br"],
  ["Bulgaria", "bg"],
  ["Canada", "ca"],
  ["Chile", "cl"],
  ["China", "cn"],
  ["Colombia", "co"],
  ["Croatia", "hr"],
  ["Czechia", "cz"],
  ["Ecuador", "ec"],
  ["Egypt", "eg"],
  ["France", "fr"],
  ["Germany", "de"],
  ["Greece", "gr"],
  ["Honduras", "hn"],
  ["Hong Kong", "hk"],
  ["India", "in"],
  ["Indonesia", "id"],
  ["Iran", "ir"],
  ["Ireland", "ie"],
  ["Israel", "il"],
  ["Italy", "it"],
  ["Japan", "jp"],
  ["Korea", "kr"],
  ["Mexico", "mx"],
  ["Netherlands", "nl"],
  ["New Zealand", "nz"],
  ["Nicaragua", "ni"],
  ["Pakistan", "pk"],
  ["Panama", "pa"],
  ["Peru", "pe"],
  ["Poland", "pl"],
  ["Portugal", "pt"],
  ["Qatar", "qa"],
  ["Romania", "ro"],
  ["Russia", "ru"],
  ["Saudi Arabia", "sa"],
  ["South Africa", "za"],
  ["Spain", "es"],
  ["Switzerland", "ch"],
  ["Syria", "sy"],
  ["Taiwan", "tw"],
  ["Thailand", "th"],
  ["Türkiye", "tr"],
  ["Ukraine", "ua"],
  ["United Kingdom", "gb"],
  ["United States Of America", "us"],
  ["Uruguay", "uy"],
  ["Venezuela", "ve"]
]
, DF_LOCALE = LOCALE_OPTIONS[0]
, INITIAL_LOCALE_VALUE = getItemValue(DF_LOCALE)
, DOMAIN_OPTIONS = [
  ["All", "all"],
  ["Business Insider", "businessinsider.com"],
  ["CNBC", "cnbc.com"],
  ["CNET", "cnet.com"],
  ["The Verge", "theverge.com"],
]
, DF_DOMAIN = DOMAIN_OPTIONS[0]
, INITIAL_DOMAIN_VALUE = getItemValue(DF_DOMAIN);

const TheNewsApiTopDialog = ({
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
    _refCategory,
    _selectCategory
  ] = useRefSelectOption(INITIAL_CAREGORY_VALUE)
  , [
    _refLocale,
    _selectLocale
  ] = useRefSelectOption(INITIAL_LOCALE_VALUE)
  , [
    _refDomain,
    _selectDomain
  ] = useRefSelectOption(INITIAL_DOMAIN_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'TNT',
      category: getRefValue(_refCategory),
      locale: getRefValue(_refLocale),
      domain: getRefValue(_refDomain)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption={`${THE_NEWS_API}: Top`}
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
           caption="Locale"
           initItem={DF_LOCALE}
           options={LOCALE_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={_selectLocale}
         />
         <InputSelect
           caption="Domain"
           initItem={DF_DOMAIN}
           options={DOMAIN_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={_selectDomain}
         />
         <PoweredByNewsApi
            style={TS.POWERED_BY}
         />
       </FlexColumn>
    </DraggableDialog>
  );
};

export default TheNewsApiTopDialog
