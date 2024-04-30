import sanitizeArticle from './sanitizeArticle';

const _isArr = Array.isArray;

const crArticles = (
  items,
  crArticle
) => _isArr(items)
  ? items.map(item => sanitizeArticle(       
     crArticle(item, Date.now())
   ))
  : [];


export default crArticles
