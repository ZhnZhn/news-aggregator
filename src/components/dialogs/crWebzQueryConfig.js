import {
  crSelectOptions,
  crTextFieldConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const _SITE_TYPES = [
  'news',
  'blogs'
]
, SITE_TYPE_OPTIONS = crSelectOptions(_SITE_TYPES)
, DF_IN_TITLE = 'Weather'
, DF_BEFORE_DAYS = 2
, _onTestDaysBefore = (value) => {
  const _n = parseInt(value, 10);
  return (!Number.isNaN(_n) && _n>0 && _n<31) || value === '';
}
, _crInputConfigs = () => [
  crTextFieldConfig("inTitle", {caption: "In Title (Default: Weather)", dfValue: DF_IN_TITLE, is: true}),
  crInputSelectConfig("siteType", SITE_TYPE_OPTIONS, {caption: "Site Type"}),
  crTextFieldConfig("beforeDays", {caption: "Before Days, Max 30", dfValue: DF_BEFORE_DAYS, inputProps: {
    maxLength: 2,
    errorMsg: "0<n<31 value must be",
    onTest: _onTestDaysBefore
  }})
]

export const getWebzQueryConfig = fGetDialogConfig(_crInputConfigs)
