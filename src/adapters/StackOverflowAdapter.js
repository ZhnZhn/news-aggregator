import domSanitize from '../utils/domSanitize';
import crId from '../utils/crId';

import sanitizeArticle from './sanitizeArticle';

const _rSourceId = {
  SO_TAGGED: 'stack_tagged',
  SO_SEARCH: 'stack_search'
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
    title: domSanitize(title),
    owner: {
      display_name: domSanitize(owner.display_name)
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
    , { type } = option
    , _sourceId = _rSourceId[type];

    return {
      source: _sourceId,
      articles: _crArticles(items, _sourceId),
      sortBy: option.tag
    };
  }
}

export default StackOverflowAdapter
