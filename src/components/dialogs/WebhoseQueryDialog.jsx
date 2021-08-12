import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import InputBeforeDays from './InputBeforeDays';

const SITE_TYPE_OPTIONS = [
  { caption: 'News', value: 'news'},
  { caption: 'Blogs', value: 'blogs'}
]
, DF_SITE_TYPE = SITE_TYPE_OPTIONS[0]
, DF_IN_TITLE = 'Weather'
, DF_BEFORE_DAYS = 2;

const _getRefValue = ref => ref.value;

const WebhoseQueryDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refInputInTitle, _getInputInTitle] = useRefInput(DF_IN_TITLE)
  , [_refSiteType, _selectSiteType] = useRefSelectOption(DF_SITE_TYPE.value)
  , [_refInputBeforeDays, _getInputBeforeDays] = useRefInput(DF_BEFORE_DAYS)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(()=>{
    const { requestType, loadId } = itemConf || {};
    onLoad({
      type,
      source,
      requestType,
      itemConf,
      loadId,
      inTitle: _getInputInTitle(),
      siteType: _getRefValue(_refSiteType),
      beforeDays: _getInputBeforeDays()
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
         caption="Webhose: News, Blogs"
         isShow={isShow}
         commandButtons={_commandButtons}
         onKeyDown={_hKeyDown}
         onShowChart={onShow}
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
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.WebhoseIo />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default WebhoseQueryDialog
