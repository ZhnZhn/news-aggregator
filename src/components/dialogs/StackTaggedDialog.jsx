import DateUtil from '../../utils/dt';
import DialogStackInputs from './DialogStackInputs';
import { StackOverflowLink } from '../links/Links';
import {
  crTextFieldCaption,
  crDfInputs,
  getDialogCaption
} from './DialogFn';

const INITIAL_FROM_DATE = DateUtil.getFromDate(1)
, INITIAL_TO_DATE = DateUtil.getToDate()
,  SORT_BY_OPTIONS = [
  ["Activity, Recent Day", "activity"],
  ["Creation Date", "creation"],
  ["Score", "votes"],
  ["Hot Tab", "hot"],
  ["Hot Week Tab", "week"],
  ["Hot Month Tab", "month"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[4]
, DF_TAG = "CSS"
, INPUT_CONFIGS = [
  ['t','tag',crTextFieldCaption('Tag',DF_TAG),DF_TAG,void 0,true],
  ['s','sortBy','SortBy',SORT_BY_OPTIONS,DF_SORT_BY,true],
  ['ft','_ft','From To Date',INITIAL_FROM_DATE,INITIAL_TO_DATE]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const StackTaggedDialog = (props) => {
  const caption = getDialogCaption(props.itemConf);
  return (
    <DialogStackInputs
      {...props}
      caption={caption}
      loadId="SO"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <StackOverflowLink />
    </DialogStackInputs>
  );
};

export default StackTaggedDialog
