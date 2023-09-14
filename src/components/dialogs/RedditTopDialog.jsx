import DialogStackInputs from './DialogStackInputs';
import { RedditLink } from '../links/Links';
import { crDfInputs } from './DialogFn';

const SUBRREDIT_OPTIONS = [
["Amd"],
["askscience"],
["books"],
["FreeEBOOKS"],
["bicycling"],
["cardano"],
["cars"],
["Database"],
["SQL"],
["NoSQL"],
["dataengineering"],
["datascience"],
["dataisbeautiful"],
["datasets"],
["deeplearning"],
["devops"],
["docker"],
["Economy"],
["Economics"],
["AskEconomics"],
["GAMETHEORY"],
["explainlikeimfive"],
["europe"],
["Finance"],
["sustainableFinance"],
["Algorithms"],
["html5"],
["JavaScript"],
["reactjs"],
["nextjs"],
["node"],
["Deno"],
["webdev"],
["browsers"],
["java"],
["Kotlin"],
["rust"],
["elixir"],
["programming"],
["opensource"],
["hardware"],
["LifeProTips"],
["linux"],
["MachineLearning"],
["learnmachinelearning"],
["todayilearned"],
["science"],
["statistics"],
["StockMarket"],
["stocks"],
["startup"],
["smallbusiness"],
["travel"],
["visualization"],
["technology"],
["Renewable"],
["RenewableEnergy"],
["electricvehicles"],
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
, DF_SUBRREDIT = SUBRREDIT_OPTIONS[0]
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
, INPUT_CONFIGS = [
  ['sg','subreddit','Subreddit', SUBRREDIT_OPTIONS, DF_SUBRREDIT, true],
  ['s','t','Period', PERIOD_OPTIONS, DF_PERIOD],
  ['s','limit', 'Limit', LIMIT_OPTIONS, DF_LIMIT]
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const RedditTopDialog = (props) => (
  <DialogStackInputs
    {...props}
    caption="Top By"
    loadId="RD"
    INPUT_CONFIGS={INPUT_CONFIGS}
    INITIAL_INPUTS={INITIAL_INPUTS}
    TOGGLES={TOGGLES}
    IS_INPUTS={IS_INPUTS}
  >
    <RedditLink />
  </DialogStackInputs>
);

export default RedditTopDialog
