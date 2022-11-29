import { FMP } from '../../conf/ProviderNames';

import DialogStackInputs from './DialogStackInputs';
import { FmpApiLink } from '../links/Links';
import {
  SYMBOL_INPUT_PROPS,
  crDfInputs
} from './DialogFn';

const DF_SYMBOL = "AAPL";
const INPUT_CONFIGS = [
  ['t','symbol','Stock Symbol',DF_SYMBOL,{
    ...SYMBOL_INPUT_PROPS
  }]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const FmpNewsDialog = (props) => (
  <DialogStackInputs
    {...props}
    caption={`${FMP}: Stock News`}
    loadId="FMP"
    INPUT_CONFIGS={INPUT_CONFIGS}
    INITIAL_INPUTS={INITIAL_INPUTS}
    TOGGLES={TOGGLES}
    IS_INPUTS={IS_INPUTS}
  >
    <FmpApiLink />
  </DialogStackInputs>
)

export default FmpNewsDialog
