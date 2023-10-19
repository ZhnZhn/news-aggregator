import {
  crInputSelectConfig,
  fGetDialogConfig,
} from './DialogFn';

const OPTION_COUNTRIES = [
  ["Australia",  "AU"],
  ["Austria",  "AT"],
  ["Belarus",  "BY"],
  ["Belguim",  "BE"],
  ["Brazil",  "BR"],
  ["Bulgaria",  "BG"],
  ["Canada",  "CA"],
  ["Chile",  "CL"],
  ["China",  "CN"],
  ["Colombia",  "CO"],
  ["Croatia",  "HR"],
  ["Czech Republic",  "CZ"],
  ["Denmark",  "DK"],
  ["Estonia",  "EE"],
  ["Finland",  "FI"],
  ["France",  "FR"],
  ["Germany",  "DE"],
  ["Greece",  "GR"],
  ["Hong Kong",  "HK"],
  ["Hungary",  "HU"],
  ["India",  "IN"],
  ["Indonesia",  "ID"],
  ["Iran",  "IR"],
  ["Ireland",  "IE"],
  ["Israel",  "IL"],
  ["Italy",  "IT"],
  ["Japan",  "JP"],
  ["Malaysia",  "MY"],
  ["Mexico",  "MX"],
  ["Nertherlands",  "NL"],
  ["New Zealand",  "NZ"],
  ["Nigeria",  "NG"],
  ["Norway",  "NO"],
  ["Philippines",  "PH"],
  ["Poland",  "PL"],
  ["Portugal",  "PT"],
  ["Romania",  "RO"],
  ["Russia",  "RU"],
  ["Serbia",  "RS"],
  ["Singapore",  "SG"],
  ["Slovakia",  "SK"],
  ["Slovenia",  "SI"],
  ["South Africa",  "ZA"],
  ["South Korea",  "KR"],
  ["Spain",  "ES"],
  ["Sweden",  "SE"],
  ["Switzerland",  "CH"],
  ["Taiwan",  "TW"],
  ["Thailand",  "TH"],
  ["Türkiye",  "TR"],
  ["Ukraine",  "UA"],
  ["United Kingdom",  "GB"],
  ["United States",  "US"],
  ["Vietnam",  "VN"],
]
, OPTION_TOPICS = [
  ["Business", "business"],
  ["Politics", "politics"],
  ["Entertainment", "entertainment"],
  ["Health", "health"],
  ["Travel", "travel"],
  ["Financial", "financial_news"],
  ["Sports", "sports"],
  ["Technology", "tech"],
  ["Real Estate", "real_estate"],
  ["Education", "education"],
  ["Fashion", "fashion"],
  ["Science", "science"],
  ["Architects", "architects"]
]
, OPTION_LANGUAGES = [
  ["All", ""],
  ["English", "english"]
]
, _crInputConfigs = () => [
  crInputSelectConfig('country', OPTION_COUNTRIES, {is: true}),
  crInputSelectConfig('topic', OPTION_TOPICS),
  crInputSelectConfig('lang', OPTION_LANGUAGES, {caption: 'Language'})
];

export const getWebzCountryConfig = fGetDialogConfig(_crInputConfigs)