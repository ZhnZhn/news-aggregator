import {
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const ASSET_OPTIONS = [
["All", "all"]
]
, _crInputConfigs = () => [
  crInputSelectConfig("assetKey", ASSET_OPTIONS, {caption: "News about"})
];

export const getMessariConfig = fGetDialogConfig(_crInputConfigs);
