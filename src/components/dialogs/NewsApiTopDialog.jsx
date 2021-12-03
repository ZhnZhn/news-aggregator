import { useCallback } from 'react';

import toFirstUpperCase from '../../utils/toFirstUpperCase';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const _CATEGORY = [
  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
]
, CATEGORY_OPTIONS = _CATEGORY.map(str => ({
    caption: toFirstUpperCase(str),
    value: str
  }))
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, COUNTRY_OPTIONS = [
   { caption: "Argentina", value: "ar" },
   { caption: "Australia", value: "au" },
   { caption: "Austria", value: "at" },
   { caption: "Belguim", value: "be" },
   { caption: "Brazil", value: "br" },
   { caption: "Bulgaria", value: "bg" },
   { caption: "Canada", value: "ca" },
   { caption: "China", value: "cn" },
   { caption: "Colombia", value: "co" },
   { caption: "Cuba", value: "cu" },
   { caption: "Czechia", value: "cz" },
   { caption: "Egypt", value: "eg" },
   { caption: "France", value: "fr" },
   { caption: "Germany", value: "de" },
   { caption: "Greece", value: "gr" },
   { caption: "Hong Kong", value: "hk" },
   { caption: "Hungary", value: "hu" },
   { caption: "India", value: "in" },
   { caption: "Indonesia", value: "id" },
   { caption: "Ireland", value: "ie" },
   { caption: "Israel", value: "il" },
   { caption: "Italy", value: "it" },
   { caption: "Japan", value: "jp" },
   { caption: "Latvia", value: "lv" },
   { caption: "Lithuania", value: "lt" },
   { caption: "Malaysia", value: "my" },
   { caption: "Mexico", value: "mx" },
   { caption: "Morocco", value: "ma" },
   { caption: "Netherlands", value: "nl" },
   { caption: "New Zealand", value: "nz" },
   { caption: "Nigeria", value: "ng" },
   { caption: "Norway", value: "no" },
   { caption: "Phillipines", value: "ph" },
   { caption: "Poland", value: "pl" },
   { caption: "Portugal", value: "pt" },
   { caption: "Romania", value: "ro" },
   { caption: "Russian Federation", value: "ru" },
   { caption: "Saudi Arabia", value: "sa" },
   { caption: "Serbia", value: "rs" },
   { caption: "Singapore", value: "sg" },
   { caption: "Slovakia", value: "sk" },
   { caption: "Slovenia", value: "si" },
   { caption: "South Africa", value: "za" },
   { caption: "South Korea", value: "kr" },
   { caption: "Sweden", value: "se" },
   { caption: "Switzerland", value: "ch" },
   { caption: "Taiwan", value: "tw" },
   { caption: "Thailand", value: "th" },
   { caption: "Turkey", value: "tr" },
   { caption: "Ukraine", value: "ua" },
   { caption: "United Arab Emirates", value: "ae" },
   { caption: "United Kingdom", value: "gb" },
   { caption: "United States", value: "us" },
   { caption: "Venezuala", value: "ve" }
  ]
, DF_COUNTRY = COUNTRY_OPTIONS[52]
, _getRefValue = ref => ref.current;

const NewsApiTopDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refCategory, _selectCategory] = useRefSelectOption(DF_CATEGORY.value)
  , [_refCountry, _selectCountry] = useRefSelectOption(DF_COUNTRY.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type, source, itemConf,
      loadId: 'NT',
      category: _getRefValue(_refCategory),
      country: _getRefValue(_refCountry)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad,
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _commandButtons, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
         ref={_refDialog}
         rootStyle={TS.R_DIALOG}
         browserCaptionStyle={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="NewsApi Top By"
         isShow={isShow}
         commandButtons={_commandButtons}
         onKeyDown={_hKeyDown}
         onShowChart={onShow}
         onClose={_hClose}
     >
       <div>
         <A.InputSelect
           caption="Category"
           initItem={DF_CATEGORY}
           options={CATEGORY_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={_selectCategory}
         />
       </div>
       <div>
         <A.InputSelect
           caption="Country"
           initItem={DF_COUNTRY}
           options={COUNTRY_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={_selectCountry}
         />
       </div>
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.NewsApi />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default NewsApiTopDialog
