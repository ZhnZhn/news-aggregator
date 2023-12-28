import {
  crInputSuggestConfig,
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

const SUBRREDIT_OPTIONS = [
["Amd"],
["intel"],
["architecture"],
["Algorithms"],
["AskAcademia"],
["AskEconomics"],
["AskReddit"],
["askscience"],
["artificial"],
["AItoolsCatalog"],
["ChatGPT"],
["ChatGPTPro"],
["ChatGPTCoding"],
["OpenAI"],
["LocalLLaMa"],
["MachineLearning"],
["learnmachinelearning"],
["machinelearningnews"],
["singularity"],
["hardware"],
["laptops"],
["eGPU"],
["gadgets"],
["raspberry_pi"],
["networking"],
["sysadmin"],
["books"],
["FreeEBOOKS"],
["bicycling"],
["classicalmusic"],
["CryptoCurrency"],
["CryptoMarkets"],
["CryptoTechnology"],
["cardano"],
["Autos"],
["cars"],
["Database"],
["SQL"],
["NoSQL"],
["dataengineering"],
["datascience"],
["dataisbeautiful"],
["datasets"],
["deeplearning"],
["Economy"],
["Economics"],
["Daytrading"],
["options"],
["GAMETHEORY"],
["explainlikeimfive"],
["europe"],
["Finance"],
["sustainableFinance"],
["html5"],
["JavaScript"],
["TypeScript"],
["reactjs"],
["nextjs"],
["node"],
["Deno"],
["webdev"],
["web_design"],
["browsers"],
["privacy"],
["java"],
["Kotlin"],
["rust"],
["elixir"],
["Python"],
["programming"],
["opensource"],
["selfhosted"],
["webhosting"],
["Cloud"],
["cloudcomputing"],
["devops"],
["docker"],
["virtualization"],
["LifeProTips"],
["lifehacks"],
["linux"],
["todayilearned"],
["science"],
["statistics"],
["StockMarket"],
["stocks"],
["startup"],
["startups"],
["Entrepreneur"],
["business"],
["smallbusiness"],
["advertising"],
["marketing"],
["digital_marketing"],
["socialmedia"],
["analytics"],
["PPC"],
["SEO"],
["bigseo"],
["juststart"],
["travel"],
["visualization"],
["technology"],
["homeautomation"],
["philosophy"],
["minimalism"],
["Renewable"],
["RenewableEnergy"],
["electricvehicles"],
["teslamotors"],
["Physics"],
["solar"],
["solarDIY"],
["batteries"],
["soccer"],
["football"],
["WomensSoccer"],
["investing"],
["UpliftingNews"],
["news"],
["worldnews"]
]
, PERIOD_OPTIONS = [
  ["hour"],
  ["day"],
  ["week"],
  ["month"],
  ["year"],
  ["all"]
]
, DF_PERIOD = PERIOD_OPTIONS[1]
, LIMIT_OPTIONS = [
  ["10"],
  ["20"],
  ["30"]
]
, DF_LIMIT = LIMIT_OPTIONS[1]
, _crInputConfigs = () => [
  crInputSuggestConfig('subreddit', SUBRREDIT_OPTIONS, { is: true }),
  crInputSelectConfig('t', PERIOD_OPTIONS, { caption: "Period", dfOption: DF_PERIOD }),
  crInputSelectConfig('limit', LIMIT_OPTIONS, { dfOption: DF_LIMIT })
];

export const getRedditTopConfig = fGetDialogConfig(_crInputConfigs)
