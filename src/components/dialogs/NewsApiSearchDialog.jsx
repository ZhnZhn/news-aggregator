import DialogStackInputs from './DialogStackInputs';
import { NewsApiLink } from '../links/Links';
import {
  crTextFieldCaption,
  crDfInputs
} from './DialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevancy"],
  ["Popularity", "popularity"],
  ["PublishedAt", "publishedAt"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather"
, INPUT_CONFIGS = [
  ['t','symbol',crTextFieldCaption('Term', DF_TERM),DF_TERM,true],
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
    caption="Search"
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
