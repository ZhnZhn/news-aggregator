import {
  getFromDate,
  getToDate
} from '../../utils/dt';
import DialogStackInputs from './DialogStackInputs';
import { StackOverflowLink } from '../links/Links';
import {
  crTextFieldCaption,
  crDfInputs
} from './DialogFn';

const INITIAL_FROM_DATE = getFromDate(1)
, INITIAL_TO_DATE = getToDate()
, SORT_BY_OPTIONS = [
  ["Activity, Recent Day", "activity"],
  ["Creation Date", "creation"],
  ["Score", "votes"],
  ["Relevance", "relevance"],
]
, DF_SORT_BY = SORT_BY_OPTIONS[2]
, DF_TAGGED = 'CSS'
, DF_IN_TITLE = 'flexbox'
, INPUT_CONFIGS = [
  ['t','tagged',crTextFieldCaption('Tagged',DF_TAGGED),DF_TAGGED, true],
  ['t','inTitle',crTextFieldCaption('In Title',DF_IN_TITLE),DF_IN_TITLE,true],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY],
  ['ft','_ft','From To Date',INITIAL_FROM_DATE,INITIAL_TO_DATE]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const StackSearchDialog = (props) => (
  <DialogStackInputs
    {...props}
    caption="Search Questions"
    loadId="SO"
    INPUT_CONFIGS={INPUT_CONFIGS}
    INITIAL_INPUTS={INITIAL_INPUTS}
    TOGGLES={TOGGLES}
    IS_INPUTS={IS_INPUTS}
  >
    <StackOverflowLink />
  </DialogStackInputs>
);


export default StackSearchDialog
