import DialogStackInputs from './DialogStackInputs';
import { TheNewsApiLink } from '../links/Links';
import {
  getPaneCaption,
  crDfInputs
} from './DialogFn';
import {
  CATEGORY_OPTIONS,
  DF_CATEGORY
} from './TheNewsApiDialogFn';

const SORT_BY_OPTIONS = [
  ["PublishedAt", " published_at"],
  ["Relevancy", "relevance_score"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather"
, INPUT_CONFIGS = [
  ['t','search',`Term (Default: ${DF_TERM})`,DF_TERM,void 0,true],
  ['s','category','Category',CATEGORY_OPTIONS,DF_CATEGORY,true],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const TheNewsApiSearchDialog = (props) => {
  const caption = getPaneCaption(props.itemConf);
  return (
    <DialogStackInputs
      {...props}
      caption={caption}
      loadId="TNS"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <TheNewsApiLink />
    </DialogStackInputs>
  );
}

export default TheNewsApiSearchDialog
