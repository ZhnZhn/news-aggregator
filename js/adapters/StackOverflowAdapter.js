'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dom = require('../utils/Dom');

var _Dom2 = _interopRequireDefault(_Dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          _item$owner = item.owner,
          owner = _item$owner === undefined ? {} : _item$owner;

      Object.assign(item, {
        source: _sourceId,
        title: _Dom2.default.htmlDecode(title),
        owner: {
          display_name: _Dom2.default.htmlDecode(owner.display_name)
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

exports.default = StackOverflowAdapter;
//# sourceMappingURL=StackOverflowAdapter.js.map