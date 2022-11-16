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
  getItemValue,
  crSelectOptions
} from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import PoweredBy from '../links/PoweredBy';
import { TheNewsApiLink } from '../links/Links';

const _CATEGORIES = [
  'all',
  'general',
  'science',
  'sports',
  'business',
  'health',
  'tech',
  'politics',
  'food',
  'travel'
]
const CATEGORY_OPTIONS = crSelectOptions(_CATEGORIES)
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, INITIAL_CAREGORY_VALUE = getItemValue(DF_CATEGORY)
, LOCALE_OPTIONS = [
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
    _hClose]
     = useRefClose(onClose)
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
       caption="TheNewsAPI: Top"
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
         <PoweredBy style={TS.POWERED_BY}>
           <TheNewsApiLink />
         </PoweredBy>
       </FlexColumn>
    </DraggableDialog>
  );
};

export default TheNewsApiTopDialog
