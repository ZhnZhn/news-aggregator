import {
  NEWS_API
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
  getItemValue,
  crSelectOptions
} from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import { PoweredByNewsApi } from '../links/PoweredByLink';

const _CATEGORY = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
]
, CATEGORY_OPTIONS = crSelectOptions(_CATEGORY)
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, INITIAL_CATEGORY_VALUE = getItemValue(DF_CATEGORY)
, COUNTRY_OPTIONS = [
   ["Argentina", "ar"],
   ["Australia", "au"],
   ["Austria", "at"],
   ["Belguim", "be"],
   ["Brazil", "br"],
   ["Bulgaria", "bg"],
   ["Canada", "ca"],
   ["China", "cn"],
   ["Colombia", "co"],
   ["Cuba", "cu"],
   ["Czechia", "cz"],
   ["Egypt", "eg"],
   ["France", "fr"],
   ["Germany", "de"],
   ["Greece", "gr"],
   ["Hong Kong", "hk"],
   ["Hungary", "hu"],
   ["India", "in"],
   ["Indonesia", "id"],
   ["Ireland", "ie"],
   ["Israel", "il"],
   ["Italy", "it"],
   ["Japan", "jp"],
   ["Latvia", "lv"],
   ["Lithuania", "lt"],
   ["Malaysia", "my"],
   ["Mexico", "mx"],
   ["Morocco", "ma"],
   ["Netherlands", "nl"],
   ["New Zealand", "nz"],
   ["Nigeria", "ng"],
   ["Norway", "no"],
   ["Phillipines", "ph"],
   ["Poland", "pl"],
   ["Portugal", "pt"],
   ["Romania", "ro"],
   ["Russian Federation", "ru"],
   ["Saudi Arabia", "sa"],
   ["Serbia", "rs"],
   ["Singapore", "sg"],
   ["Slovakia", "sk"],
   ["Slovenia", "si"],
   ["South Africa", "za"],
   ["South Korea", "kr"],
   ["Sweden", "se"],
   ["Switzerland", "ch"],
   ["Taiwan", "tw"],
   ["Thailand", "th"],
   ["Türkiye", "tr"],
   ["Ukraine", "ua"],
   ["United Arab Emirates", "ae"],
   ["United Kingdom", "gb"],
   ["United States", "us"],
   ["Venezuala", "ve"]
  ]
, DF_COUNTRY = COUNTRY_OPTIONS[52]
, INITIAL_COUNTRY_VALUE = getItemValue(DF_COUNTRY);

const NewsApiTopDialog = ({
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
  ] = useRefSelectOption(INITIAL_CATEGORY_VALUE)
  , [
    _refCountry,
    _selectCountry
  ] = useRefSelectOption(INITIAL_COUNTRY_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'NT',
      category: getRefValue(_refCategory),
      country: getRefValue(_refCountry)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad,
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
       caption={`${NEWS_API} Top By`}
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
           caption="Country"
           initItem={DF_COUNTRY}
           options={COUNTRY_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={_selectCountry}
         />
         <PoweredByNewsApi
            style={TS.POWERED_BY}
         />
       </FlexColumn>
    </DraggableDialog>
  );
};

export default NewsApiTopDialog
