import DialogStackInputs from './DialogStackInputs';
import { CoinStatsLink } from '../links/Links';
import {
  crInputSelectConfig,
  fGetDialogConfig,
  getPaneCaption
} from './DialogFn';

const NEWS_FILTER_OPTIONS = [
  ["Latest", "latest"],
  ["Handpicked", "handpicked"],
  ["Trending", "trending"],
  ["Bullish", "bullish"],
  ["Bearish", "bearish"]
]
, _crInputConfigs = () => [
  crInputSelectConfig("filter", NEWS_FILTER_OPTIONS, { caption: "News filter" })
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const CoinStatsDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf)
  , [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
  return (
    <DialogStackInputs
      {...props}
      caption={paneCaption}
      loadId="CS"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <CoinStatsLink />
    </DialogStackInputs>
  );
}

export default CoinStatsDialog
