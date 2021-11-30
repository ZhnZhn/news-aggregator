import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';

import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const OPTION_COUNTRIES = [
  {"caption": "Australia", value: "AU"},
  {"caption": "Austria", value: "AT"},
  {"caption": "Belarus", value: "BY"},
  {"caption": "Belguim", value: "BE"},
  {"caption": "Brazil", value: "BR"},
  {"caption": "Bulgaria", value: "BG"},
  {"caption": "Canada", value: "CA"},
  {"caption": "Chile", value: "CL"},
  {"caption": "China", value: "CN"},
  {"caption": "Colombia", value: "CO"},
  {"caption": "Croatia", value: "HR"},
  {"caption": "Czech Republic", value: "CZ"},
  {"caption": "Denmark", value: "DK"},
  {"caption": "Estonia", value: "EE"},
  {"caption": "Finland", value: "FI"},
  {"caption": "France", value: "FR"},
  {"caption": "Germany", value: "DE"},
  {"caption": "Greece", value: "GR"},
  {"caption": "Hong Kong", value: "HK"},
  {"caption": "Hungary", value: "HU"},
  {"caption": "India", value: "IN"},
  {"caption": "Indonesia", value: "ID"},
  {"caption": "Iran", value: "IR"},
  {"caption": "Ireland", value: "IE"},
  {"caption": "Israel", value: "IL"},
  {"caption": "Italy", value: "IT"},
  {"caption": "Japan", value: "JP"},
  {"caption": "Malaysia", value: "MY"},
  {"caption": "Mexico", value: "MX"},
  {"caption": "Nertherlands", value: "NL"},
  {"caption": "New Zealand", value: "NZ"},
  {"caption": "Nigeria", value: "NG"},
  {"caption": "Norway", value: "NO"},
  {"caption": "Philippines", value: "PH"},
  {"caption": "Poland", value: "PL"},
  {"caption": "Portugal", value: "PT"},
  {"caption": "Romania", value: "RO"},
  {"caption": "Russia", value: "RU"},
  {"caption": "Serbia", value: "RS"},
  {"caption": "Singapore", value: "SG"},
  {"caption": "Slovakia", value: "SK"},
  {"caption": "Slovenia", value: "SI"},
  {"caption": "South Africa", value: "ZA"},
  {"caption": "South Korea", value: "KR"},
  {"caption": "Spain", value: "ES"},
  {"caption": "Sweden", value: "SE"},
  {"caption": "Switzerland", value: "CH"},
  {"caption": "Taiwan", value: "TW"},
  {"caption": "Thailand", value: "TH"},
  {"caption": "Turkey", value: "TR"},
  {"caption": "Ukraine", value: "UA"},
  {"caption": "United Kingdom", value: "GB"},
  {"caption": "United States", value: "US"},
  {"caption": "Vietnam", value: "VN"}
]
, OPTION_TOPICS = [
  {"caption": "Business", "value": "business"},
  {"caption": "Politics", "value": "politics"},
  {"caption": "Entertainment", "value": "entertainment"},
  {"caption": "Health", "value": "health"},
  {"caption": "Travel", "value": "travel"},
  {"caption": "Financial", "value": "financial_news"},
  {"caption": "Sports", "value": "sports"},
  {"caption": "Technology", "value": "tech"},
  {"caption": "Real Estate", "value": "real_estate"},
  {"caption": "Education", "value": "education"},
  {"caption": "Fashion", "value": "fashion"}
]
, OPTION_LANGUAGES = [
  { "caption": "All", "value": "" },
  { "caption": "English", "value": "english" }
]
, DF_COUNTRY = OPTION_COUNTRIES[0]
, DF_TOPIC = OPTION_TOPICS[0]
, DF_LANGUAGE = OPTION_LANGUAGES[0];



const _getRefValue = ref => ref.current;

const WebzCountryDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refCountry, _selectCountry] = useRefSelectOption(DF_COUNTRY.value)
  , [_refTopic, _selectTopic] = useRefSelectOption(DF_TOPIC.value)
  , [_refLanguage, _selectLanguage] = useRefSelectOption('')
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: "W",
      country: _getRefValue(_refCountry),
      topic: _getRefValue(_refTopic),
      lang: _getRefValue(_refLanguage)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _commandButtons, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
         ref={_refDialog}
         rootStyle={TS.R_DIALOG}
         browserCaptionStyle={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="Webz.io: By Country"
         isShow={isShow}
         commandButtons={_commandButtons}
         onKeyDown={_hKeyDown}
         onShowChart={onShow}
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
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.Webz />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default WebzCountryDialog
