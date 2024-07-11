"use strict";

exports.__esModule = true;
exports.getNewsApiTopConfig = void 0;
var _DialogFn = require("./DialogFn");
const CATEGORY_OPTIONS = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  COUNTRY_OPTIONS = [["Argentina", "ar"], ["Australia", "au"], ["Austria", "at"], ["Belguim", "be"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["China", "cn"], ["Colombia", "co"], ["Cuba", "cu"], ["Czechia", "cz"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Hong Kong", "hk"], ["Hungary", "hu"], ["India", "in"], ["Indonesia", "id"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Latvia", "lv"], ["Lithuania", "lt"], ["Malaysia", "my"], ["Mexico", "mx"], ["Morocco", "ma"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nigeria", "ng"], ["Norway", "no"], ["Phillipines", "ph"], ["Poland", "pl"], ["Portugal", "pt"], ["Romania", "ro"], ["Russian Federation", "ru"], ["Saudi Arabia", "sa"], ["Serbia", "rs"], ["Singapore", "sg"], ["Slovakia", "sk"], ["Slovenia", "si"], ["South Africa", "za"], ["South Korea", "kr"], ["Sweden", "se"], ["Switzerland", "ch"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Arab Emirates", "ae"], ["United Kingdom", "gb"], ["United States", "us"], ["Venezuela", "ve"]],
  DF_COUNTRY = COUNTRY_OPTIONS[52],
  _crInputConfigs = () => [(0, _DialogFn.crInputSuggestConfig)('country', COUNTRY_OPTIONS, {
    dfOption: DF_COUNTRY,
    is: true
  }), (0, _DialogFn.crInputSuggestConfig)('category', CATEGORY_OPTIONS)];
const getNewsApiTopConfig = exports.getNewsApiTopConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crNewsApiTopConfig.js.map