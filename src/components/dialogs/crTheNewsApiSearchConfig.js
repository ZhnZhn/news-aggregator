import {
  crTextFieldCaption,
  crTextFieldConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

import {
  CATEGORY_OPTIONS,
} from './TheNewsApiDialogFn';

const SORT_BY_OPTIONS = [
  ["PublishedAt", " published_at"],
  ["Relevancy", "relevance_score"]
]
, DF_TERM = "Weather"
, _crInputConfig = () => [
  crTextFieldConfig('search', {caption: crTextFieldCaption('Term',DF_TERM), dfValue: DF_TERM, is: true}),
  crInputSelectConfig('category', CATEGORY_OPTIONS),
  crInputSelectConfig('sortBy', SORT_BY_OPTIONS)
];

export const getTheNewsApiSearchConfig = fGetDialogConfig(_crInputConfig)
