import {
  crInputSuggestConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

import {
  SUBRREDIT_OPTIONS,
  PERIOD_OPTIONS,
  LIMIT_OPTIONS
} from './configReddit';

const DF_PERIOD = PERIOD_OPTIONS[1]
, DF_LIMIT = LIMIT_OPTIONS[0]
, _crInputConfigs = () => [
  crInputSuggestConfig('subreddit', SUBRREDIT_OPTIONS, { is: true }),
  crInputSelectConfig('t', PERIOD_OPTIONS, { caption: "Period", dfOption: DF_PERIOD }),
  crInputSelectConfig('limit', LIMIT_OPTIONS, { dfOption: DF_LIMIT })
];

export const getRedditTopConfig = fGetDialogConfig(_crInputConfigs)
