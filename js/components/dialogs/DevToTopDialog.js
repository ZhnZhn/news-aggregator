"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var TAGS = [["algorithms"], ["analytics"], ["ai"], ["generativeai"], ["ethics"], ["openai"], ["chartgpt"], ["bardgpt"], ["llama"], ["machinelearning"], ["clustering"], ["nlp"], ["dataengineering"], ["datascience"], ["deeplearning"], ["aws"], ["architecture"], ["api"], ["css"], ["tailwindcss"], ["html"], ["devops"], ["docker"], ["github"], ["githubcopilot"], ["javascript"], ["typescript"], ["angular"], ["vue"], ["react"], ["nextjs"], ["node"], ["deno"], ["python"], ["backend"], ["sql"], ["nosql"], ["database"], ["mongodb"], ["couchdbase"], ["postgres"], ["oracle"], ["graphql"], ["warehousing"], ["showdev"], ["webdev"], ["womenintech"], ["development"], ["coding"], ["programming"], ["computerscience"], ["softwareengineering"], ["productivity"], ["automation"], ["testing"], ["opensource"], ["career"], ["ui"], ["cuda"], ["nvidia"], ["cybersecurity"], ["security"], ["privacy"], ["hardware"], ["unity3d"], ["gamedev"], ["linux"], ["discuss"], ["news"], ["free"]],
  DF_TAG = TAGS[0],
  PER_PAGES = [["10"], ["20"], ["30"], ["40"], ["50"]],
  DF_PER_PAGES = PER_PAGES[2],
  RECENT_DAYS = [["7"], ["14"], ["21"], ["30"], ["60"], ["90"], ["180"], ["360"]],
  DF_RECENT_DAY = RECENT_DAYS[0],
  INPUT_CONFIGS = [['s', 'tag', 'Tags', TAGS, DF_TAG, true], ['s', 'perPage', 'Per Page', PER_PAGES, DF_PER_PAGES], ['s', 'inRecentDays', 'In Recent Days', RECENT_DAYS, DF_RECENT_DAY]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var DevToTopDialog = function DevToTopDialog(props) {
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: "Top By",
    loadId: "DT",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.DevToLink, {})
  }));
};
var _default = DevToTopDialog;
exports["default"] = _default;
//# sourceMappingURL=DevToTopDialog.js.map