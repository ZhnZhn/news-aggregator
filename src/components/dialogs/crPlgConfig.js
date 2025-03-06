import {
  crInputProps,
  crTextFieldConfig,
  fGetDialogConfig
} from './DialogFn';

const DF_TICKER = "AMD"
, _crInputConfigs = () => [
  crTextFieldConfig("ticker", { caption: "Stock Symbol", dfValue: DF_TICKER, inputProps: crInputProps(16), is: true}),
];

export const getPlgDialogConfig = fGetDialogConfig(_crInputConfigs);
