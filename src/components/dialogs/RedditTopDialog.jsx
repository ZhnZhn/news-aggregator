import DialogStackInputs from './DialogStackInputs';
import { RedditLink } from '../links/Links';
import { crDfInputs } from './DialogFn';

const ASSET_OPTIONS = [
["askscience"],
["books"],
["explainlikeimfive"],
["LifeProTips"],
["todayilearned"],
["science"],
["worldnews"]
]
, DF_ASSET = ASSET_OPTIONS[0]
, INPUT_CONFIGS = [
  ['s','subreddit','Subreddit', ASSET_OPTIONS, DF_ASSET]
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
