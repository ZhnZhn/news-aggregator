"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const TAGS = [["algorithms"], ["analytics"], ["ai"], ["generativeai"], ["ethics"], ["openai"], ["chartgpt"], ["bardgpt"], ["llama"], ["machinelearning"], ["clustering"], ["nlp"], ["dataengineering"], ["datascience"], ["deeplearning"], ["aws"], ["architecture"], ["api"], ["css"], ["tailwindcss"], ["html"], ["devops"], ["docker"], ["github"], ["githubcopilot"], ["javascript"], ["typescript"], ["angular"], ["vue"], ["react"], ["nextjs"], ["node"], ["deno"], ["python"], ["backend"], ["sql"], ["nosql"], ["database"], ["mongodb"], ["couchdbase"], ["postgres"], ["oracle"], ["graphql"], ["warehousing"], ["showdev"], ["webdev"], ["womenintech"], ["development"], ["coding"], ["programming"], ["computerscience"], ["softwareengineering"], ["productivity"], ["automation"], ["testing"], ["opensource"], ["career"], ["ui"], ["cuda"], ["nvidia"], ["cybersecurity"], ["security"], ["privacy"], ["hardware"], ["unity3d"], ["gamedev"], ["linux"], ["discuss"], ["news"], ["free"]],
  PER_PAGES = [["10"], ["20"], ["30"], ["40"], ["50"]],
  DF_PER_PAGES = PER_PAGES[2],
  RECENT_DAYS = [["7"], ["14"], ["21"], ["30"], ["60"], ["90"], ["180"], ["360"]],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("tag", TAGS, {
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("perPage", PER_PAGES, {
    caption: "Per Page",
    dfOption: DF_PER_PAGES
  }), (0, _DialogFn.crInputSelectConfig)("inRecentDays", RECENT_DAYS, {
    caption: "In Recent Days"
  })],
  _getDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
const DevToTopDialog = props => {
  const [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: "Top By",
    loadId: "DT",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.DevToLink, {})
  });
};
var _default = DevToTopDialog;
exports.default = _default;
//# sourceMappingURL=DevToTopDialog.js.map