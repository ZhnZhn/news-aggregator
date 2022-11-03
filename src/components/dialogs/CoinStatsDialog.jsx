import {
  useCallback,
  getRefValue
} from '../uiApi';

import styleConfig from './Dialog.Style';

import useRefClose from './hooks/useRefClose';
import useRefSelectOption from './hooks/useRefSelectOption';
import useDecorDialog from './hooks/useDecorDialog';

import A from '../Comp';
import PoweredBy from '../links/PoweredBy';
import { CoinStatsLink } from '../links/Links';

const NEWS_FOR_OPTIONS = [
{caption: "Latest", value: "latest"},
{caption: "Handpicked", value: "handpicked"},
{caption: "Trending", value: "trending"},
{caption: "Bullish", value: "bullish"},
{caption: "Bearish", value: "bearish"}
]
, DF_FILTER = NEWS_FOR_OPTIONS[0];

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
      type,
      source,
      itemConf,
      loadId: 'CS',
      filter: getRefValue(_refFilter)
    })
    _hClose()
  }, [])
  //type, source, itemConf, onLoad
  /*eslint-enable react-hooks/exhaustive-deps */
  , [TS, _hKeyDown] = useDecorDialog(styleConfig, _hLoad, _hClose);

  return (
    <A.DraggableDialog
      ref={_refDialog}
      isShow={isShow}
      style={TS.R_DIALOG}
      captionStyle={TS.BROWSER_CAPTION}
      buttonStyle={TS.BT}
      caption="CoinStats News"
      onKeyDown={_hKeyDown}
      onLoad={_hLoad}
      onShow={onShow}
      onClose={_hClose}
    >
      <A.InputSelect
       caption="News filter"
       initItem={DF_FILTER}
       options={NEWS_FOR_OPTIONS}
       styleConfig={TS.SELECT}
       onSelect={_selectFilter}
      />
      <PoweredBy style={TS.POWERED_BY}>
        <CoinStatsLink />
      </PoweredBy>
    </A.DraggableDialog>
  );
};

export default CoinStatsDialog
