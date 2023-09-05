import { formatTimeAgo } from '../utils';
import sanitizeArticle from './sanitizeArticle';

const _isArr = Array.isArray;

const crArticles = (
  items,
  crArticle
) => {
  const _timeAgoOptions = formatTimeAgo.crOptions();
  return _isArr(items)
   ? items.map(item => sanitizeArticle(
       crArticle(item, _timeAgoOptions)
     ))
   : [];
}

export default crArticles
