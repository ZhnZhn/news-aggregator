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
["JavaScript"],
["reactjs"],
["nextjs"],
["node"],
["webdev"],
["programming"],
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
["smallbusiness"],
["travel"],
["visualization"],
["Renewable"],
["RenewableEnergy"],
["solar"],
["solarDIY"],
["batteries"],
["soccer"],
["football"],
["investing"],
["UpliftingNews"],
["news"],
["worldnews"]
]
, DF_SUBRREDIT = SUBRREDIT_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','subreddit','Subreddit', SUBRREDIT_OPTIONS, DF_SUBRREDIT]
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
