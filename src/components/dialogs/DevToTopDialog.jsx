import DialogStackInputs from './DialogStackInputs';
import { DevToLink } from '../links/Links';
import { crDfInputs } from './DialogFn';

const TAGS = [
["algorithms"],
["analytics"],
["ai"],
["generativeai"],
["ethics"],
["openai"],
["chartgpt"],
["bardgpt"],
["llama"],
["machinelearning"],
["clustering"],
["nlp"],
["dataengineering"],
["datascience"],
["deeplearning"],

["aws"],
["architecture"],
["api"],
["css"],
["tailwindcss"],
["html"],
["devops"],
["docker"],
["github"],
["githubcopilot"],
["javascript"],
["typescript"],
["angular"],
["vue"],
["react"],
["nextjs"],
["node"],
["deno"],
["python"],

["backend"],
["sql"],
["nosql"],
["database"],
["mongodb"],
["couchdbase"],
["postgres"],
["oracle"],
["graphql"],
["warehousing"],

["showdev"],
["webdev"],
["womenintech"],
["development"],
["coding"],
["programming"],
["computerscience"],
["softwareengineering"],
["productivity"],
["automation"],
["testing"],
["opensource"],
["career"],

["ui"],

["cuda"],
["nvidia"],
["cybersecurity"],
["security"],
["privacy"],
["hardware"],
["unity3d"],
["gamedev"],
["linux"],
["discuss"],
["news"],
["free"]
]
, DF_TAG = TAGS[0]
, PER_PAGES = [
  ["10"],
  ["20"],
  ["30"],
  ["40"],
  ["50"]
]
, DF_PER_PAGES = PER_PAGES[2]
, RECENT_DAYS = [
  ["7"],
  ["14"],
  ["21"],
  ["30"],
  ["60"],
  ["90"],
  ["180"],
  ["360"]
]
, DF_RECENT_DAY = RECENT_DAYS[0]
, INPUT_CONFIGS = [
  ['s','tag','Tags', TAGS, DF_TAG, true],
  ['s', 'perPage', 'Per Page', PER_PAGES, DF_PER_PAGES],
  ['s', 'inRecentDays', 'In Recent Days', RECENT_DAYS, DF_RECENT_DAY],
]
, [
  INITIAL_INPUTS,
  TOGGLES,
  IS_INPUTS
] = crDfInputs(INPUT_CONFIGS);

const DevToTopDialog = (props) => (
  <DialogStackInputs
    {...props}
    caption="Top By"
    loadId="DT"
    INPUT_CONFIGS={INPUT_CONFIGS}
    INITIAL_INPUTS={INITIAL_INPUTS}
    TOGGLES={TOGGLES}
    IS_INPUTS={IS_INPUTS}
  >
    <DevToLink />
  </DialogStackInputs>
);

export default DevToTopDialog
