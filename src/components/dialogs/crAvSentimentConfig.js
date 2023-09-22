import {
  crInputProps,
  crTextFieldConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const TOPIC_OPTIONS = [
  ['All',''],
  ['Blockchain', 'blockchain'],
  ['Earnings', 'earnings'],
  ['IPO', 'ipo'],
  ['Mergers & Acquisitions', 'mergers_and_acquisitions'],
  ['Financial Markets', 'financial_markets'],
  ['Economy - Fiscal Policy', 'economy_fiscal'],
  ['Economy - Monetary Policy', 'economy_monetary'],
  ['Economy - Macro/Overall', 'economy_macro'],
  ['Energy & Transportation','energy_transportation'],
  ['Finance', 'finance'],
  ['Life Sciences','life_sciences'],
  ['Manufacturing','manufacturing'],
  ['Real Estate & Construction','real_estate'],
  ['Retail & Wholesale','retail_wholesale'],
  ['Technology','technology']
]
, SORTBY_OPTIONS = [
  ['Latest','LATEST'],
  ['Earliest','EARLIEST'],
  ['Relevance','RELEVANCE']
]
, LIMIT_OPTIONS = [
  ['Limit 50', '50'],
  ['Limit 100', '100'],
  ['Limit 200', '200']
]
, DF_TICKERS = ""
, _crInputConfigs = () => [
  crTextFieldConfig("tickers", { dfValue: DF_TICKERS, inputProps: crInputProps(16), is: true}),
  crInputSelectConfig("topics", TOPIC_OPTIONS, {is: true}),
  crInputSelectConfig("sortBy", SORTBY_OPTIONS),
  crInputSelectConfig("limit", LIMIT_OPTIONS)
];

export const getAvDialogConfig = fGetDialogConfig(_crInputConfigs);
