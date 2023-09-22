"use strict";

exports.__esModule = true;
exports.getDevToConfig = void 0;
var _DialogFn = require("./DialogFn");
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
  })];
const getDevToConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
exports.getDevToConfig = getDevToConfig;
//# sourceMappingURL=crDevToConfig.js.map