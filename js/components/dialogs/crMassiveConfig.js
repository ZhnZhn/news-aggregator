"use strict";

exports.__esModule = true;
exports.getMassiveDialogConfig = void 0;
var _DialogFn = require("./DialogFn");
const DF_TICKER = "AMD",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("ticker", {
    caption: "Stock Symbol",
    dfValue: DF_TICKER,
    inputProps: (0, _DialogFn.crInputProps)(16),
    is: true
  })];
const getMassiveDialogConfig = exports.getMassiveDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crMassiveConfig.js.map