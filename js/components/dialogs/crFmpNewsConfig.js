"use strict";

exports.__esModule = true;
exports.getFmpNewsConfig = void 0;
var _DialogFn = require("./DialogFn");
const DF_SYMBOL = "AAPL",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("symbol", {
    caption: "Stock Symbol",
    dfValue: DF_SYMBOL,
    inputProps: (0, _DialogFn.crInputProps)()
  })];
const getFmpNewsConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
exports.getFmpNewsConfig = getFmpNewsConfig;
//# sourceMappingURL=crFmpNewsConfig.js.map