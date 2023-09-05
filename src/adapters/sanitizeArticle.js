import { domSanitize } from '../utils';

const _assign = Object.assign
, _isNumber = n => typeof n === 'number'
  && n-n === 0;

const sanitizeArticle = (
  article
) => {
const {
  publishedAt
} = article
, _isPublishedAtNumber = _isNumber(publishedAt);
return _assign(article, {
  title: domSanitize(article.title),
  description: domSanitize(article.description),
  related: domSanitize(article.related),
  author: domSanitize(article.author),
  publishedAt: _isPublishedAtNumber
    ? publishedAt
    : domSanitize(publishedAt),
  timeAgo: _isPublishedAtNumber
    ? article.timeAgo
    : domSanitize(article.timeAgo)
  });
};

export default sanitizeArticle
