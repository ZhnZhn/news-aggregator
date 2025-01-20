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

const LISTINGS_OPTIONS = [
  "top",
  "rising"
];

const _crInputConfigs = () => [
  crInputSuggestConfig('listings', LISTINGS_OPTIONS, { isInput: true }),
  crInputSuggestConfig('subreddit', SUBRREDIT_OPTIONS, { is: true, isInput: true, isNotFirstUpperCase: true }),
  crInputSelectConfig('t', PERIOD_OPTIONS, { caption: "Period", dfIndex: 1, isNotFirstUpperCase: true }),
  crInputSelectConfig('limit', LIMIT_OPTIONS)
];

export const getRedditTopConfig = fGetDialogConfig(_crInputConfigs)
