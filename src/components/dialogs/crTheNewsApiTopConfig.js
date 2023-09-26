import {
  crInputSelectConfig,
  fGetDialogConfig,
} from './DialogFn';

import {
  CATEGORY_OPTIONS,
} from './TheNewsApiDialogFn';

const LOCALE_OPTIONS = [
  ["All", "all"],
  ["Argentina", "ar"],
  ["Armenia", "am"],
  ["Australia", "au"],
  ["Austria", "at"],
  ["Belarus", "by"],
  ["Belgium", "be"],
  ["Bolivia", "bo"],
  ["Brazil", "br"],
  ["Bulgaria", "bg"],
  ["Canada", "ca"],
  ["Chile", "cl"],
  ["China", "cn"],
  ["Colombia", "co"],
  ["Croatia", "hr"],
  ["Czechia", "cz"],
  ["Ecuador", "ec"],
  ["Egypt", "eg"],
  ["France", "fr"],
  ["Germany", "de"],
  ["Greece", "gr"],
  ["Honduras", "hn"],
  ["Hong Kong", "hk"],
  ["India", "in"],
  ["Indonesia", "id"],
  ["Iran", "ir"],
  ["Ireland", "ie"],
  ["Israel", "il"],
  ["Italy", "it"],
  ["Japan", "jp"],
  ["Korea", "kr"],
  ["Mexico", "mx"],
  ["Netherlands", "nl"],
  ["New Zealand", "nz"],
  ["Nicaragua", "ni"],
  ["Pakistan", "pk"],
  ["Panama", "pa"],
  ["Peru", "pe"],
  ["Poland", "pl"],
  ["Portugal", "pt"],
  ["Qatar", "qa"],
  ["Romania", "ro"],
  ["Russia", "ru"],
  ["Saudi Arabia", "sa"],
  ["South Africa", "za"],
  ["Spain", "es"],
  ["Switzerland", "ch"],
  ["Syria", "sy"],
  ["Taiwan", "tw"],
  ["Thailand", "th"],
  ["Türkiye", "tr"],
  ["Ukraine", "ua"],
  ["United Kingdom", "gb"],
  ["United States Of America", "us"],
  ["Uruguay", "uy"],
  ["Venezuela", "ve"]
]
, DOMAIN_OPTIONS = [
  ["All", "all"],
  ["Business Insider", "businessinsider.com"],
  ["CNBC", "cnbc.com"],
  ["CNET", "cnet.com"],
  ["The Verge", "theverge.com"],
]
, _crInputConfigs = () => [
  crInputSelectConfig('category', CATEGORY_OPTIONS, {is: true}),
  crInputSelectConfig('locale', LOCALE_OPTIONS, {is: true}),
  crInputSelectConfig('domain', DOMAIN_OPTIONS)
];

export const getTheNewsApiTopConfig = fGetDialogConfig(_crInputConfigs)
