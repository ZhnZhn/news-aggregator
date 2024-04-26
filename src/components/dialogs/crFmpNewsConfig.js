import {
  crInputProps,
  crTextFieldConfig,
  fGetDialogConfig
} from './DialogFn';

const DF_SYMBOL = "AMD"
, _crInputConfigs = () => [
  crTextFieldConfig("symbol", {caption: "Stock Symbol", dfValue: DF_SYMBOL, inputProps: crInputProps()})
];

export const getFmpNewsConfig = fGetDialogConfig(_crInputConfigs);
