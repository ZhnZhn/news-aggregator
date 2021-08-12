import { useCallback } from 'react';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';

const NEWS_FOR_OPTIONS = [
{caption: "Latest", value: "latest"},
{caption: "Handpicked", value: "handpicked"},
{caption: "Trending", value: "trending"},
{caption: "Bullish", value: "bullish"},
{caption: "Bearish", value: "bearish"}
]
, DF_FILTER = NEWS_FOR_OPTIONS[0];

const _getRefValue = ref => ref.current;

const CoinStatsDialog = ({
  isShow,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const [_refDialog, _hClose] = useRefClose(onClose)
  , [_refFilter, _selectFilter] = useRefSelectOption(DF_FILTER.value)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    onLoad({
      type, source, itemConf,
      loadId: 'CS',
      filter: _getRefValue(_refFilter)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _commandButtons, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
      ref={_refDialog}
      isShow={isShow}
      rootStyle={TS.R_DIALOG}
      browserCaptionStyle={TS.BROWSER_CAPTION}
      styleButton={TS.BT}
      caption="CoinStats News"
      commandButtons={_commandButtons}
      onKeyDown={_hKeyDown}
      onShowChart={onShow}
      onClose={_hClose}
    >
      <A.InputSelect
       caption="News filter"
       initItem={DF_FILTER}
       options={NEWS_FOR_OPTIONS}
       styleConfig={TS.SELECT}
       onSelect={_selectFilter}
      />
      <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
        <A.Link.CoinStats />
      </A.Link.PoweredBy>
    </A.DraggableDialog>
  );
};

export default CoinStatsDialog
