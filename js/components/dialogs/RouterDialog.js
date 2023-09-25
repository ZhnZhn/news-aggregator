"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogType = _interopRequireDefault(require("./DialogType1"));
var _DialogType2 = _interopRequireDefault(require("./DialogType2"));
var _WebzQueryDialog = _interopRequireDefault(require("./WebzQueryDialog"));
var _WebzCountryDialog = _interopRequireDefault(require("./WebzCountryDialog"));
var _StackTaggedDialog = _interopRequireDefault(require("./StackTaggedDialog"));
var _StackSearchDialog = _interopRequireDefault(require("./StackSearchDialog"));
var _NewsApiSearchDialog = _interopRequireDefault(require("./NewsApiSearchDialog"));
var _NewsApiTopDialog = _interopRequireDefault(require("./NewsApiTopDialog"));
var _TheNewsApiSearchDialog = _interopRequireDefault(require("./TheNewsApiSearchDialog"));
var _TheNewsApiTopDialog = _interopRequireDefault(require("./TheNewsApiTopDialog"));
var _MessariDialog = _interopRequireDefault(require("./MessariDialog"));
var _RedditTopDialog = _interopRequireDefault(require("./RedditTopDialog"));
const R = {
  DF: _DialogType.default,
  DialogType1: _DialogType.default,
  DialogType2: _DialogType2.default,
  WebzQuery: _WebzQueryDialog.default,
  WebzCountry: _WebzCountryDialog.default,
  StackTagged: _StackTaggedDialog.default,
  StackSearch: _StackSearchDialog.default,
  MessariNews: _MessariDialog.default,
  NewsApiSearch: _NewsApiSearchDialog.default,
  NewsApiTop: _NewsApiTopDialog.default,
  TheNewsApiSearch: _TheNewsApiSearchDialog.default,
  TheNewsApiTop: _TheNewsApiTopDialog.default,
  RedditTop: _RedditTopDialog.default
};
const RouterDialog = {
  getElement: type => R[type] || R.DF
};
var _default = RouterDialog;
exports.default = _default;
//# sourceMappingURL=RouterDialog.js.map