import { FMP } from '../../conf/ProviderNames';

import DialogStackInputs from './DialogStackInputs';
import { FmpApiLink } from '../links/Links';
import {
  crInputProps,
  crTextFieldConfig,
  fGetDialogConfig,
} from './DialogFn';

const DF_SYMBOL = "AAPL"
, _crInputConfigs = () => [
  crTextFieldConfig("symbol", {caption: "Stock Symbol", dfValue: DF_SYMBOL, inputProps: crInputProps()})
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const FmpNewsDialog = (props) => {
  const [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
  return (
    <DialogStackInputs
      {...props}
      caption={FMP}
      loadId="FMP"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <FmpApiLink />
    </DialogStackInputs>
  );
}

export default FmpNewsDialog
