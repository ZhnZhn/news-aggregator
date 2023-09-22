import { crLazyValue } from '../uiApi';

import DialogStackInputs from './DialogStackInputs';
import { AlphaVantageLink } from '../links/Links';
import {
  crInputCaption,
  crInputProps,
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
, DF_TICKERS = ""
, ID_TICKERS = "tickers"
, ID_TOPICS = "topics"
, ID_SORT_BY = "sortBy"
, ID_LIMIT = "limit"
, _crDialogConfig = () => {
  const INPUT_CONFIGS = [
    ['t',ID_TICKERS,crInputCaption(ID_TICKERS),DF_TICKERS,crInputProps(16),true],
    ['s',ID_TOPICS,crInputCaption(ID_TOPICS),TOPIC_OPTIONS,TOPIC_OPTIONS[0],true],
    ['s',ID_SORT_BY,crInputCaption(ID_SORT_BY),SORTBY_OPTIONS,SORTBY_OPTIONS[0]],
    ['s',ID_LIMIT,crInputCaption(ID_LIMIT),LIMIT_OPTIONS,LIMIT_OPTIONS[0]]
  ];
  return [
    INPUT_CONFIGS,
    ...crDfInputs(INPUT_CONFIGS)
  ];
}
, _getDialogConfig = crLazyValue(_crDialogConfig);


const AvSentimentsDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf)
  , [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
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
