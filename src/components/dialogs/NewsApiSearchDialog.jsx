import { NEWS_API } from '../../conf/ProviderNames';

import DialogStackInputs from './DialogStackInputs';
import { NewsApiLink } from '../links/Links';
import { crDfInputs } from './DialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevancy"],
  ["Popularity", "popularity"],
  ["PublishedAt", "publishedAt"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather"
, INPUT_CONFIGS = [
  ['t','symbol',`Term (Default: ${DF_TERM})`,DF_TERM,void 0,true],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY,true]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const NewsApiSearchDialog = (props) => (
  <DialogStackInputs
    {...props}
    caption={`${NEWS_API} Search`}
    loadId="NS"
    INPUT_CONFIGS={INPUT_CONFIGS}
    INITIAL_INPUTS={INITIAL_INPUTS}
    TOGGLES={TOGGLES}
    IS_INPUTS={IS_INPUTS}
  >
    <NewsApiLink />
  </DialogStackInputs>
)

export default NewsApiSearchDialog
