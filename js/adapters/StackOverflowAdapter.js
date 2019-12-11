"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Dom = _interopRequireDefault(require("../utils/Dom"));

var _crId = _interopRequireDefault(require("../utils/crId"));

//const SOURCE_ID = "stack_tagged";
var _rSourceId = {
  TAG: 'stack_tagged',
  SEARCH: 'stack_search'
};
var StackOverflowAdapter = {
  toNews: function toNews(json, option) {
    var items = json.items,
        requestType = option.requestType,
        _sourceId = _rSourceId[requestType];

    var _items = items.map(function (item) {
      var title = item.title,
          question_id = item.question_id,
          _item$owner = item.owner,
          owner = _item$owner === void 0 ? {} : _item$owner;
      Object.assign(item, {
        articleId: question_id || (0, _crId["default"])(),
        source: _sourceId,
        title: _Dom["default"].htmlDecode(title),
        owner: {
          display_name: _Dom["default"].htmlDecode(owner.display_name)
        }
      });
      return item;
    });

    return {
      source: _sourceId,
      articles: _items,
      sortBy: option.tag
    };
  }
};
var _default = StackOverflowAdapter;
exports["default"] = _default;
//# sourceMappingURL=StackOverflowAdapter.js.map