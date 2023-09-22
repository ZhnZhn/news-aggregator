import {
  crInputSelectConfig,
  fGetDialogConfig
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
export const getCoinStatDialogConfig = fGetDialogConfig(_crInputConfigs);
