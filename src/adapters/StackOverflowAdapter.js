import Dom from '../utils/Dom'
import crId from '../utils/crId'

//const SOURCE_ID = "stack_tagged";

const _rSourceId = {
  TAG: 'stack_tagged',
  SEARCH: 'stack_search'
}

const StackOverflowAdapter = {
  toNews: (json, option) => {
    const { items } = json
        , { requestType } = option
        , _sourceId = _rSourceId[requestType];

    const _items = items.map(item => {
      const { title, question_id, owner={} } = item;
      Object.assign(item, {
        articleId: question_id || crId(),
        source: _sourceId,
        title: Dom.htmlDecode(title),
        owner: {
          display_name: Dom.htmlDecode(owner.display_name)
        }
      })
      return item;
    })
    return {
      source: _sourceId,
      articles: _items,
      sortBy: option.tag
    };
  }
}

export default StackOverflowAdapter
