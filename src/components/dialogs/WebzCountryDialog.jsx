import { WEBZ_IO } from '../../conf/ProviderNames';

import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';

import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import { getItemValue } from '../zhn-m-input/OptionFn';
import { PoweredByWebzLink } from '../links/PoweredByLink';

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
, INITIAL_COUNTRY_VALUE = getItemValue(DF_COUNTRY)
, DF_TOPIC = OPTION_TOPICS[0]
, INITIAL_TOPIC_VALUE = getItemValue(DF_TOPIC)
, DF_LANGUAGE = OPTION_LANGUAGES[0]
, INITIAL_LANGUAGE_VALUE = "";

const WebzCountryDialog = ({
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
    _refCountry,
    _selectCountry
  ] = useRefSelectOption(INITIAL_COUNTRY_VALUE)
  , [
    _refTopic,
    _selectTopic
  ] = useRefSelectOption(INITIAL_TOPIC_VALUE)
  , [
    _refLanguage,
    _selectLanguage
  ] = useRefSelectOption(INITIAL_LANGUAGE_VALUE)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: "W",
      country: getRefValue(_refCountry),
      topic: getRefValue(_refTopic),
      lang: getRefValue(_refLanguage)
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
    <A.DraggableDialog
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
      <div>
        <A.InputSelect
          caption="Country"
          initItem={DF_COUNTRY}
          options={OPTION_COUNTRIES}
          styleConfig={TS.SELECT}
          onSelect={_selectCountry}
        />
      </div>
      <div>
        <A.InputSelect
          caption="Topic"
          initItem={DF_TOPIC}
          options={OPTION_TOPICS}
          styleConfig={TS.SELECT}
          onSelect={_selectTopic}
        />
      </div>
      <div>
        <A.InputSelect
          caption="Language"
          initItem={DF_LANGUAGE}
          options={OPTION_LANGUAGES}
          styleConfig={TS.SELECT}
          onSelect={_selectLanguage}
        />
      </div>
      <PoweredByWebzLink
         style={TS.POWERED_BY}
      />
    </A.DraggableDialog>
  );
};

export default WebzCountryDialog
