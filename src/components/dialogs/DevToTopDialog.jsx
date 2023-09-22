import DialogStackInputs from './DialogStackInputs';
import { DevToLink } from '../links/Links';
import {
  crInputSelectConfig,
  fGetDialogConfig
} from './DialogFn';

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
, _crInputConfigs = () => [
  crInputSelectConfig("tag", TAGS, {is: true}),
  crInputSelectConfig("perPage", PER_PAGES, {caption: "Per Page", dfOption: DF_PER_PAGES}),
  crInputSelectConfig("inRecentDays", RECENT_DAYS, {caption: "In Recent Days"})
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const DevToTopDialog = (props) => {
  const [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
  return (
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
};

export default DevToTopDialog
