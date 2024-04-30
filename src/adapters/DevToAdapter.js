import {
  crId,
  safeFormatMls,
  crDescription,
  decodeHTMLEntities
} from '../utils';

import { dateTimeToMls } from '../utils/dt';

import crArticles from './crArticles';
const SOURCE_ID = 'dt_topby';

const _crArticle = (
  item,
  nowMls
) => {
  const {
    title,
    user,
    canonical_url,
    tags,
    positive_reactions_count,
    reading_time_minutes,
    published_at
  } = item;
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title: decodeHTMLEntities(title),
    description: crDescription(
      `${positive_reactions_count} ${reading_time_minutes}min`
    ),
    author: (user || {}).name,
    related: tags,
    timeAgo: safeFormatMls(dateTimeToMls(published_at), nowMls),
    publishedAt: published_at,
    url: canonical_url
  };
}

const _toArticles = (
  json
) => crArticles(
  json,
  _crArticle
);

const DevToAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};

export default DevToAdapter
