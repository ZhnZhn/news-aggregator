"use strict";

exports.__esModule = true;
exports.getWebzQueryConfig = void 0;
var _DialogFn = require("./DialogFn");
const _SITE_TYPES = ['news', 'blogs'],
  SITE_TYPE_OPTIONS = (0, _DialogFn.crSelectOptions)(_SITE_TYPES),
  DF_IN_TITLE = 'Weather',
  DF_BEFORE_DAYS = 2,
  _onTestDaysBefore = value => {
    const _n = parseInt(value, 10);
    return !Number.isNaN(_n) && _n > 0 && _n < 31 || value === '';
  },
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("inTitle", {
    caption: "In Title (Default: Weather)",
    dfValue: DF_IN_TITLE,
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("siteType", SITE_TYPE_OPTIONS, {
    caption: "Site Type"
  }), (0, _DialogFn.crTextFieldConfig)("beforeDays", {
    caption: "Before Days, Max 30",
    dfValue: DF_BEFORE_DAYS,
    inputProps: {
      maxLength: 2,
      errorMsg: "0<n<31 value must be",
      onTest: _onTestDaysBefore
    }
  })];
const getWebzQueryConfig = exports.getWebzQueryConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crWebzQueryConfig.js.map