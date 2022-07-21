import Dom from '../utils/Dom';
import crId from '../utils/crId';

import sanitizeArticle from './sanitizeArticle';

//const SOURCE_ID = "stack_tagged";

const _rSourceId = {
  TAG: 'stack_tagged',
  SEARCH: 'stack_search'
}

const _assign = Object.assign

const _crArticle = (
  item,
  sourceId
) => {
  const {
    title,
    question_id,
    owner={}
  } = item;
  return _assign(item, {
    articleId: question_id || crId(),
    source: sourceId,
    title: Dom.htmlDecode(title),
    owner: {
      display_name: Dom.htmlDecode(owner.display_name)
    }
  })
}

const _crArticles = (
  items,
  sourceId
) => items
  .map(item => sanitizeArticle(
      _crArticle(item, sourceId)
  ))

const StackOverflowAdapter = {
  toNews: (json, option) => {
    const { items } = json
    , { requestType } = option
    , _sourceId = _rSourceId[requestType];

    return {
      source: _sourceId,
      articles: _crArticles(items, _sourceId),
      sortBy: option.tag
    };
  }
}

export default StackOverflowAdapter
