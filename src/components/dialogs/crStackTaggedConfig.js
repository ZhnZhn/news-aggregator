import {
  crTextFieldCaption,
  crTextFieldConfig,
  crInputSelectConfig,
  crFromToDateConfig,
  fGetDialogConfig
} from './DialogFn';

const SORT_BY_OPTIONS = [
  ["Activity, Recent Day", "activity"],
  ["Creation Date", "creation"],
  ["Score", "votes"],
  ["Hot Tab", "hot"],
  ["Hot Week Tab", "week"],
  ["Hot Month Tab", "month"]
]
, DF_SORT_BY = SORT_BY_OPTIONS[4]
, DF_TAG = "CSS"
, _crInputConfigs = () => [
  crTextFieldConfig('tag', {caption: crTextFieldCaption('Tag',DF_TAG), dfValue: DF_TAG, is: true}),
  crInputSelectConfig('sortBy', SORT_BY_OPTIONS, {dfOption: DF_SORT_BY, is: true}),
  crFromToDateConfig('_ft')
];

export const getStackTaggedConfig = fGetDialogConfig(_crInputConfigs)
