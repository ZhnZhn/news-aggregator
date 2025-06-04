import { crId } from '../utils/crId';
import { safeFormatMls } from '../utils/formatDate';

import crArticles from './crArticles';

const SOURCE_ID = 'messari_news';

const _crRelated = tags => (tags || [])
 .filter(Boolean)
 .map(item => `#${item}`)
 .join(' ');

 const _crArticle = ({
   title,
   tags,
   published_at,
   url,
   author
 }, nowMls) => {
   const { name } = author || {};
   return {
     source: SOURCE_ID,
     articleId: crId(),
     title,
     author: name,
     related: _crRelated(tags),
     publishedAt: published_at,
     timeAgo: safeFormatMls(published_at, nowMls),
     url
   };
}

const _toArticles = (json) => {
  const { data } = json || {};
  return crArticles(data, _crArticle)
};

const MessariAdapter = {
  toNews(json, option){
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};

export default MessariAdapter
