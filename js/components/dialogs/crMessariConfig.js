"use strict";

exports.__esModule = true;
exports.getMessariConfig = void 0;
var _DialogFn = require("./DialogFn");
const ASSET_OPTIONS = [["All", "all"]],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("assetKey", ASSET_OPTIONS, {
    caption: "News about"
  })];
const getMessariConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
exports.getMessariConfig = getMessariConfig;
//# sourceMappingURL=crMessariConfig.js.map