import {
  crTextFieldCaption,
  crTextFieldConfig,
  crInputSuggestConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

import {
  SUBRREDIT_OPTIONS,
  PERIOD_OPTIONS,
  LIMIT_OPTIONS
} from './configReddit';

const DF_PERIOD = PERIOD_OPTIONS[3]
, DF_LIMIT = LIMIT_OPTIONS[0]
, DF_QUERY = ""
, SORTBY_OPTIONS = [
  ["relevance"],
  ["hot"],
  ["top"],
  ["new"],
  ["comments"]
]
, DF_SORTBY = SORTBY_OPTIONS[2]
, _crInputConfigs = () => [
  crInputSuggestConfig('subreddit', SUBRREDIT_OPTIONS, { is: true }),
  crTextFieldConfig('q', {caption: crTextFieldCaption('Query', DF_QUERY), dfValue: DF_QUERY, is: true}),
  crInputSelectConfig('t', PERIOD_OPTIONS, { caption: "Period", dfOption: DF_PERIOD }),
  crInputSelectConfig('limit', LIMIT_OPTIONS, { dfOption: DF_LIMIT }),
  crInputSelectConfig('sort', SORTBY_OPTIONS, { caption: "Sort By", dfOption: DF_SORTBY }),
];

export const getRedditSearchConfig = fGetDialogConfig(_crInputConfigs)
