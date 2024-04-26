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
, DF_SYMBOL = "AMD"
, _crInputConfigs = () => [
  crTextFieldConfig("symbol", {caption: "Stock Symbol", dfValue: DF_SYMBOL, inputProps: crInputProps(), is: true}),
  crInputSelectConfig("recent", RECENT_OPTIONS, {dfOption: DF_RECENT})
];

export const getIexCloudNewsConfig = fGetDialogConfig(_crInputConfigs);
