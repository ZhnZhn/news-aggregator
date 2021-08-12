import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefInput from './hooks/useRefInput';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import InputBeforeDays from './InputBeforeDays';

const DF_IN_TITLE = 'Weather'
, DF_BEFORE_DAYS = 2;

const WebhoseBrodcastDialog = ({
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
  , [_refInputBeforeDays, _getInputBeforeDays] = useRefInput(DF_BEFORE_DAYS)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    const { requestType, loadId } = itemConf || {};
    onLoad({
      type,
      source,
      requestType,
      itemConf,
      loadId,
      query: _getInputInTitle(),
      //siteType: siteType,
      beforeDays: _getInputBeforeDays()
    })
    this._handleClose()
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
         caption="Webhose: Broadcast"
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

export default WebhoseBrodcastDialog
