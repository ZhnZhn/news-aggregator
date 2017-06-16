import Dom from '../utils/Dom'

const SOURCE_ID = "stack_tagged";

const StackOverflowAdapter = {
  toNews: (json, option) => {
    const { items } = json;
    const _items = items.map(item => {
      const { title, owner={} } = item;
      Object.assign(item, {
        source: SOURCE_ID,
        title: Dom.htmlDecode(title),
        owner: {
          display_name: Dom.htmlDecode(owner.display_name)
        }
      })
      return item;
    })
    return {
      source: SOURCE_ID,
      articles: _items,
      sortBy: option.tag
    };
  }
}

export default StackOverflowAdapter
