import {
  crTextFieldCaption,
  crTextFieldConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const SORT_BY_OPTIONS = [
  ["Relevancy", "relevancy"],
  ["Popularity", "popularity"],
  ["PublishedAt", "publishedAt"]
]
, DF_TERM = "Weather"
, _crInputConfigs = () => [
  crTextFieldConfig('symbol', {caption: crTextFieldCaption('Term', DF_TERM), dfValue: DF_TERM, is:true }),
  crInputSelectConfig('sortBy', SORT_BY_OPTIONS, { is: true })
];

export const getNewsApiSearchConfig = fGetDialogConfig(_crInputConfigs)
