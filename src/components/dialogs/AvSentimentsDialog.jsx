import DialogStackInputs from './DialogStackInputs';
import { AlphaVantageLink } from '../links/Links';
import {
  SYMBOL_INPUT_PROPS,
  crDfInputs,
  getPaneCaption
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
  ['Limit 200', '200']
]
, DF_TICKERS = ''
, INPUT_CONFIGS = [
  ['t','tickers','Tickers',DF_TICKERS,{
    ...SYMBOL_INPUT_PROPS
  },true],
  ['s','topics','Topics',TOPIC_OPTIONS,TOPIC_OPTIONS[0],true],
  ['s','sortBy','SortBy',SORTBY_OPTIONS,SORTBY_OPTIONS[0]],
  ['s','limit','Limit',LIMIT_OPTIONS,LIMIT_OPTIONS[0]]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);


const AvSentimentsDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf);
  return (
    <DialogStackInputs
      {...props}
      caption={paneCaption}
      loadId="AV"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <AlphaVantageLink />
    </DialogStackInputs>
  );
}

export default AvSentimentsDialog
