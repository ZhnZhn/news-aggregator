import {
  NEWS_API
} from '../../conf/ProviderNames';

import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import StackInputs from '../zhn-inputs/StackInputs';
import {
  crSelectOptions
} from '../zhn-m-input/OptionFn';
import FlexColumn from '../zhn-atoms/FlexColumn';
import { PoweredByNewsApi } from '../links/PoweredByLink';
import {
  crDfInputs
} from './DialogFn';

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
, INPUT_CONFIGS = [
  ['s','category','Category',CATEGORY_OPTIONS, DF_CATEGORY],
  ['s','country','Country',COUNTRY_OPTIONS, DF_COUNTRY]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS)[0];

const NewsApiTopDialog = (props) => {
  const {
    isShow,
    onShow
  } = props
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'NT', _refInputs)
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
         <StackInputs
            TS={TS}
            configs={INPUT_CONFIGS}
            onSelect={_selectInput}
         />
         <PoweredByNewsApi
            style={TS.POWERED_BY}
         />
       </FlexColumn>
    </DraggableDialog>
  );
};

export default NewsApiTopDialog
