import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import {
  getItemValue,
  crSelectOptions
} from '../zhn-m-input/OptionFn';
import { PoweredByWebzLink } from '../links/PoweredByLink';
import InputBeforeDays from './InputBeforeDays';

const _SITE_TYPES = [
  'news',
  'blogs'
]
, SITE_TYPE_OPTIONS = crSelectOptions(_SITE_TYPES)
, DF_SITE_TYPE = SITE_TYPE_OPTIONS[0]
, INITIAL_SITE_TYPE_VALUE = getItemValue(DF_SITE_TYPE)
, DF_IN_TITLE = 'Weather'
, DF_BEFORE_DAYS = 2;

const WebzQueryDialog = ({
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
    _refInputInTitle,
    _getInputInTitle
  ] = useRefInput(DF_IN_TITLE)
  , [
    _refSiteType,
    _selectSiteType
  ] = useRefSelectOption(INITIAL_SITE_TYPE_VALUE)
  , [
    _refInputBeforeDays,
    _getInputBeforeDays
  ] = useRefInput(DF_BEFORE_DAYS)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    onLoad({
      type,
      source,
      itemConf,
      loadId: "W",
      inTitle: _getInputInTitle(),
      siteType: getRefValue(_refSiteType),
      beforeDays: _getInputBeforeDays()
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
       caption="News, Blogs"
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <A.TextField
        style={TS.INPUT_ROOT}
        ref={_refInputInTitle}
        caption="In Title (Default: Weather)"
        initValue={DF_IN_TITLE}
      />
      <A.InputSelect
        caption="Site Type"
        initItem={DF_SITE_TYPE}
        options={SITE_TYPE_OPTIONS}
        styleConfig={TS.SELECT}
        onSelect={_selectSiteType}
      />
      <InputBeforeDays
        ref={_refInputBeforeDays}
        style={TS.INPUT_ROOT}
        initValue={DF_BEFORE_DAYS}
      />
      <PoweredByWebzLink
        style={TS.POWERED_BY}
      />
    </A.DraggableDialog>
  );
};

export default WebzQueryDialog
