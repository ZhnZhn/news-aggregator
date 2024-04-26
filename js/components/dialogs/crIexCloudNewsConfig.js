"use strict";

exports.__esModule = true;
exports.getIexCloudNewsConfig = void 0;
var _DialogFn = require("./DialogFn");
const RECENT_OPTIONS = [["10 News", "10"], ["20 News", "20"], ["30 News", "30"], ["40 News", "40"], ["50 News", "50"]],
  DF_RECENT = RECENT_OPTIONS[1],
  DF_SYMBOL = "AMD",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("symbol", {
    caption: "Stock Symbol",
    dfValue: DF_SYMBOL,
    inputProps: (0, _DialogFn.crInputProps)(),
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("recent", RECENT_OPTIONS, {
    dfOption: DF_RECENT
  })];
const getIexCloudNewsConfig = exports.getIexCloudNewsConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crIexCloudNewsConfig.js.map