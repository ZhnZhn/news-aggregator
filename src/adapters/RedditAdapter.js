import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import crDescription from '../utils/crDescription';

import {
  toMls,
  joinByBlank
} from './adapterFn';
import crArticles from './crArticles';

const SOURCE_ID = 'rd_topby';

const _crArticle = ({
  data
}, timeAgoOptions) => {
  const {
    title,
    url,
    selftext,
    link_flair_text,
    domain,
    created_utc,
    author,
    score,
    upvote_ratio
  } = data
  , publishedAt = toMls(created_utc)
  , _author = joinByBlank(score, upvote_ratio, author)
  , related = joinByBlank(
       typeof link_flair_text === 'string'
         ? link_flair_text.toUpperCase()
         : void 0,
       domain
    );

  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: crDescription(selftext),
    author: _author,
    related,
    timeAgo: formatTimeAgo(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
}

const _filterItemBy = (
  item
) => {
  const { data } = item || {};
  return data
    && !data.over_18
    && !data.quarantine
    && !data.author_is_blocked;
}

const _toArticles = json => {
  const { data } = json || {}
  , { children } = data || {};
  return crArticles(
    children.filter(_filterItemBy),
    _crArticle
  );
};

const RedditAdapter = {
  toNews(json, option){
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
    };
  }
};

export default RedditAdapter
