"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dom = require("../utils/Dom");

var _Dom2 = _interopRequireDefault(_Dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SOURCE_ID = "stack_tagged";

var StackOverflowAdapter = {
  toNews: function toNews(json, option) {
    var items = json.items;

    var _items = items.map(function (item) {
      var title = item.title,
          _item$owner = item.owner,
          owner = _item$owner === undefined ? {} : _item$owner;

      Object.assign(item, {
        source: SOURCE_ID,
        title: _Dom2.default.htmlDecode(title),
        owner: {
          display_name: _Dom2.default.htmlDecode(owner.display_name)
        }
      });
      return item;
    });
    return {
      source: SOURCE_ID,
      articles: _items,
      sortBy: option.tag
    };
  }
};

exports.default = StackOverflowAdapter;
//# sourceMappingURL=D:\_Dev\_React\_News\js\adapters\StackOverflowAdapter.js.map