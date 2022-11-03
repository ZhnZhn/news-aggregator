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
import FlexColumn from '../zhn-atoms/FlexColumn';
import PoweredBy from '../links/PoweredBy';
import { TheNewsApiLink } from '../links/Links';

const CATEGORY_OPTIONS = [
  { caption: 'All', value: 'all' },
  { caption: 'General', value: 'general' },
  { caption: 'Science', value: 'science' },
  { caption: 'Sports', value: 'sports' },
  { caption: 'Business', value: 'business' },
  { caption: 'Health', value: 'health' },
  { caption: 'Tech', value: 'tech' },
  { caption: 'Politics', value: 'politics' },
  { caption: 'Food', value: 'food' },
  { caption: 'Travel', value: 'travel' }
]
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, LOCALE_OPTIONS = [
  {caption: "All", value:"all" },
  {caption: "Argentina", value:"ar" },
  {caption: "Armenia", value:"am" },
  {caption: "Australia", value:"au" },
  {caption: "Austria", value:"at"},
  {caption: "Belarus", value:"by" },
  {caption: "Belgium", value:"be" },
  {caption: "Bolivia", value:"bo"},
  {caption: "Brazil", value:"br" },
  {caption: "Bulgaria", value:"bg" },
  {caption: "Canada", value:"ca" },
  {caption: "Chile", value:"cl"},
  {caption: "China", value:"cn" },
  {caption: "Colombia", value:"co" },
  {caption: "Croatia", value:"hr" },
  {caption: "Czechia", value:"cz" },
  {caption: "Ecuador", value:"ec" },
  {caption: "Egypt", value:"eg"},
  {caption: "France", value:"fr" },
  {caption: "Germany", value:"de" },
  {caption: "Greece", value:"gr" },
  {caption: "Honduras", value:"hn" },
  {caption: "Hong Kong", value:"hk" },
  {caption: "India", value:"in"},
  {caption: "Indonesia", value:"id" },
  {caption: "Iran", value:"ir"},
  {caption: "Ireland", value:"ie" },
  {caption: "Israel", value:"il" },
  {caption: "Italy", value:"it"},
  {caption: "Japan", value:"jp" },
  {caption: "Korea", value:"kr" },
  {caption: "Mexico", value:"mx" },
  {caption: "Netherlands", value:"nl" },
  {caption: "New Zealand", value:"nz"},
  {caption: "Nicaragua", value:"ni" },
  {caption: "Pakistan", value:"pk" },
  {caption: "Panama", value:"pa" },
  {caption: "Peru", value:"pe"},
  {caption: "Poland", value:"pl" },
  {caption: "Portugal", value:"pt" },
  {caption: "Qatar", value:"qa"},
  {caption: "Romania", value:"ro" },
  {caption: "Russia", value:"ru" },
  {caption: "Saudi Arabia", value:"sa" },
  {caption: "South Africa", value:"za" },
  {caption: "Spain", value:"es"},
  {caption: "Switzerland", value:"ch" },
  {caption: "Syria", value:"sy"},
  {caption: "Taiwan", value:"tw" },
  {caption: "Thailand", value:"th" },
  {caption: "Türkiye", value:"tr" },
  {caption: "Ukraine", value:"ua" },
  {caption: "United Kingdom", value:"gb" },
  {caption: "United States Of America", value:"us" },
  {caption: "Uruguay", value:"uy" },
  {caption: "Venezuela", value:"ve" }
]
, DF_LOCALE = LOCALE_OPTIONS[0]
, DOMAIN_OPTIONS = [
  { caption: "All", value:"all" },
  { caption: "Business Insider", value: "businessinsider.com"},
  { caption: "CNBC", value: "cnbc.com"},
  { caption: "CNET", value: "cnet.com"},
  { caption: "The Verge", value: "theverge.com"}
], DF_DOMAIN = DOMAIN_OPTIONS[0];

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
  ] = useRefSelectOption(DF_CATEGORY.value)
  , [
    _refLocale,
    _selectLocale
  ] = useRefSelectOption(DF_LOCALE.value)
  , [
    _refDomain,
    _selectDomain
  ] = useRefSelectOption(DF_DOMAIN.value)
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
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="TheNewsApi: Top"
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
