import { WEBZ_IO } from '../../conf/ProviderNames';

import styleConfig from './Dialog.Style';

import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import { PoweredByWebzLink } from '../links/PoweredByLink';
import {
  crDfInputs
} from './DialogFn';

const OPTION_COUNTRIES = [
  ["Australia",  "AU"],
  ["Austria",  "AT"],
  ["Belarus",  "BY"],
  ["Belguim",  "BE"],
  ["Brazil",  "BR"],
  ["Bulgaria",  "BG"],
  ["Canada",  "CA"],
  ["Chile",  "CL"],
  ["China",  "CN"],
  ["Colombia",  "CO"],
  ["Croatia",  "HR"],
  ["Czech Republic",  "CZ"],
  ["Denmark",  "DK"],
  ["Estonia",  "EE"],
  ["Finland",  "FI"],
  ["France",  "FR"],
  ["Germany",  "DE"],
  ["Greece",  "GR"],
  ["Hong Kong",  "HK"],
  ["Hungary",  "HU"],
  ["India",  "IN"],
  ["Indonesia",  "ID"],
  ["Iran",  "IR"],
  ["Ireland",  "IE"],
  ["Israel",  "IL"],
  ["Italy",  "IT"],
  ["Japan",  "JP"],
  ["Malaysia",  "MY"],
  ["Mexico",  "MX"],
  ["Nertherlands",  "NL"],
  ["New Zealand",  "NZ"],
  ["Nigeria",  "NG"],
  ["Norway",  "NO"],
  ["Philippines",  "PH"],
  ["Poland",  "PL"],
  ["Portugal",  "PT"],
  ["Romania",  "RO"],
  ["Russia",  "RU"],
  ["Serbia",  "RS"],
  ["Singapore",  "SG"],
  ["Slovakia",  "SK"],
  ["Slovenia",  "SI"],
  ["South Africa",  "ZA"],
  ["South Korea",  "KR"],
  ["Spain",  "ES"],
  ["Sweden",  "SE"],
  ["Switzerland",  "CH"],
  ["Taiwan",  "TW"],
  ["Thailand",  "TH"],
  ["Türkiye",  "TR"],
  ["Ukraine",  "UA"],
  ["United Kingdom",  "GB"],
  ["United States",  "US"],
  ["Vietnam",  "VN"],
]
, OPTION_TOPICS = [
  ["Business", "business"],
  ["Politics", "politics"],
  ["Entertainment", "entertainment"],
  ["Health", "health"],
  ["Travel", "travel"],
  ["Financial", "financial_news"],
  ["Sports", "sports"],
  ["Technology", "tech"],
  ["Real Estate", "real_estate"],
  ["Education", "education"],
  ["Fashion", "fashion"],
  ["Science", "science"],
  ["Architects", "architects"]
]
, OPTION_LANGUAGES = [
  ["All", ""],
  ["English", "english"]
]
, DF_COUNTRY = OPTION_COUNTRIES[0]
, DF_TOPIC = OPTION_TOPICS[0]
, DF_LANGUAGE = OPTION_LANGUAGES[0]
, INPUT_CONFIGS = [
  ['s','country','Country',OPTION_COUNTRIES,DF_COUNTRY],
  ['s','topic','Topic',OPTION_TOPICS,DF_TOPIC],
  ['s','lang','Language',OPTION_LANGUAGES,DF_LANGUAGE]
]
, INITIAL_INPUTS = crDfInputs(INPUT_CONFIGS);

const WebzCountryDialog = (props) => {
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
  ] = useDialog(props, 'W', _refInputs)
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
       caption={`${WEBZ_IO}: By Country`}
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
         <PoweredByWebzLink
            style={TS.POWERED_BY}
         />
      </FlexColumn>
    </DraggableDialog>
  );
};

export default WebzCountryDialog
