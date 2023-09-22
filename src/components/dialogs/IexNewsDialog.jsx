import {
  IEX_CLOUD
} from '../../conf/ProviderNames';

import DialogStackInputs from './DialogStackInputs';
import { IexApiLink } from '../links/Links';
import {
  crInputProps,
  crTextFieldConfig,
  crInputSelectConfig,
  fGetDialogConfig
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
, _crInputConfigs = () => [
  crTextFieldConfig("symbol", {caption: "Stock Symbol", dfValue: DF_SYMBOL, inputProps: crInputProps(), is: true}),
  crInputSelectConfig("recent", RECENT_OPTIONS, {dfOption: DF_RECENT, is: true})
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const IexNewsDialog = (props) => {
  const [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
  return (
    <DialogStackInputs
      {...props}
      caption={IEX_CLOUD}
      loadId="IEX"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <IexApiLink />
    </DialogStackInputs>
  );
};

export default IexNewsDialog
