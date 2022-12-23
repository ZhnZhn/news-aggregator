import {
  IEX_CLOUD
} from '../../conf/ProviderNames';

import DialogStackInputs from './DialogStackInputs';
import { IexApiLink } from '../links/Links';
import {
  crInputProps,
  crDfInputs
} from './DialogFn';

const RECENT_OPTIONS = [
  ["10 News", "10"],
  ["20 News", "20"],
  ["30 News", "30"],
  ["40 News", "40"],
  ["50 News", "50"],
]
, DF_RECENT = RECENT_OPTIONS[1]
, DF_SYMBOL = "AAPL"
const INPUT_CONFIGS = [
  ['t','symbol','Stock Symbol',DF_SYMBOL,crInputProps(),true],
  ['s','recent','Recent',RECENT_OPTIONS,DF_RECENT,true]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const IexNewsDialog = (props) => (
   <DialogStackInputs
     {...props}
     caption={`${IEX_CLOUD}: Stock News`}
     loadId="IEX"
     INPUT_CONFIGS={INPUT_CONFIGS}
     INITIAL_INPUTS={INITIAL_INPUTS}
     TOGGLES={TOGGLES}
     IS_INPUTS={IS_INPUTS}
   >
     <IexApiLink />
   </DialogStackInputs>
);

export default IexNewsDialog
