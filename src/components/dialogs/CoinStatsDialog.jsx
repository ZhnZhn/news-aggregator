import DialogStackInputs from './DialogStackInputs';
import { CoinStatsLink } from '../links/Links';
import {
  crDfInputs,
  getPaneCaption
} from './DialogFn';

const NEWS_FILTER_OPTIONS = [
  ["Latest", "latest"],
  ["Handpicked", "handpicked"],
  ["Trending", "trending"],
  ["Bullish", "bullish"],
  ["Bearish", "bearish"]
]
, DF_FILTER = NEWS_FILTER_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','filter','News filter', NEWS_FILTER_OPTIONS, DF_FILTER,true]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const CoinStatsDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf);
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
