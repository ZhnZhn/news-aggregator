"use strict";

exports.__esModule = true;
exports.getDevToConfig = void 0;
var _DialogFn = require("./DialogFn");
const TAGS = ["algorithms", "analytics", "ai", "generativeai", "ethics", "openai", "chartgpt", "bardgpt", "llama", "machinelearning", "clustering", "nlp", "dataengineering", "datascience", "deeplearning", "aws", "architecture", "api", "css", "tailwindcss", "html", "devops", "docker", "github", "githubcopilot", "javascript", "typescript", "angular", "vue", "react", "nextjs", "node", "deno", "python", "backend", "sql", "nosql", "database", "mongodb", "couchdbase", "postgres", "oracle", "graphql", "warehousing", "showdev", "webdev", "womenintech", "development", "coding", "programming", "computerscience", "softwareengineering", "productivity", "automation", "testing", "opensource", "career", "ui", "cuda", "nvidia", "cybersecurity", "security", "privacy", "hardware", "unity3d", "gamedev", "linux", "discuss", "news", "free"],
  PER_PAGES = ["10", "20", "30", "40", "50"],
  RECENT_DAYS = ["7", "14", "21", "30", "60", "90", "180", "360"],
  _crInputConfigs = () => [(0, _DialogFn.crInputSuggestConfig)("tag", TAGS, {
    is: true,
    isNotFirstUpperCase: true
  }), (0, _DialogFn.crInputSelectConfig)("perPage", PER_PAGES, {
    caption: "Per Page",
    dfIndex: 2
  }), (0, _DialogFn.crInputSelectConfig)("inRecentDays", RECENT_DAYS, {
    caption: "In Recent Days"
  })];
const getDevToConfig = exports.getDevToConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crDevToConfig.js.map