import { isNumber } from '../utils/isTypeFn';
import { domSanitize } from '../utils/domSanitize';

const _assign = Object.assign;

const sanitizeArticle = (
  article
) => {
const {
  publishedAt
} = article
, _isPublishedAtNumber = isNumber(publishedAt);
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
