import Dom from '../utils/Dom'

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
      const { title, owner={} } = item;
      Object.assign(item, {
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
