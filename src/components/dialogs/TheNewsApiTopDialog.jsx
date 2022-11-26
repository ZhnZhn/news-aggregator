import {
  THE_NEWS_API
} from '../../conf/ProviderNames';

import styleConfig from './Dialog.Style';

import useToggleState from '../hooks/useToggleState';
import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import {
  PoweredByNewsApi
} from '../links/PoweredByLink';
import {
  crDfInputs
} from './DialogFn';
import {
  CATEGORY_OPTIONS,
  DF_CATEGORY
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
, DOMAIN_OPTIONS = [
  ["All", "all"],
  ["Business Insider", "businessinsider.com"],
  ["CNBC", "cnbc.com"],
  ["CNET", "cnet.com"],
  ["The Verge", "theverge.com"],
]
, DF_DOMAIN = DOMAIN_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','category','Category',CATEGORY_OPTIONS,DF_CATEGORY,true],
  ['s','locale','Locale',LOCALE_OPTIONS,DF_LOCALE,true],
  ['s','domain','Domain',DOMAIN_OPTIONS,DF_DOMAIN]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const TheNewsApiTopDialog = (props) => {
  const {
    isShow,
    onShow
  } = props
  , [
    isInputs,
    toggleInput
  ] = useToggleState(IS_INPUTS)
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, 'TNT', _refInputs)
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.DIALOG_CAPTION}
       buttonStyle={TS.BT}
       chbStroke={TS.R_DIALOG.backgroundColor}
       caption={`${THE_NEWS_API}: Top`}
       menuToggle={TOGGLES}
       toggleItem={toggleInput}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <FlexColumn>
         <StackInputs
           TS={TS}
           isInputs={isInputs}
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

export default TheNewsApiTopDialog
