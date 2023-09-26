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
  ["Relevance", "relevance"],
]
, DF_SORT_BY = SORT_BY_OPTIONS[2]
, DF_TAGGED = 'CSS'
, DF_IN_TITLE = 'flexbox'
, _crInputConfigs = () => [
  crTextFieldConfig('tagged', {caption: crTextFieldCaption('Tagged',DF_TAGGED), dfValue: DF_TAGGED, is: true}),
  crTextFieldConfig('inTitle', {caption: crTextFieldCaption('In Title',DF_IN_TITLE), dfValue: DF_IN_TITLE, is: true}),
  crInputSelectConfig('sortBy', SORT_BY_OPTIONS, {dfOption: DF_SORT_BY}),
  crFromToDateConfig('_ft')  
];

export const getStackSearchConfig = fGetDialogConfig(_crInputConfigs)
