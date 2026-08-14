const _isArr = Array.isArray;

const crArticles = (
  items,
  crArticle
) => _isArr(items)
  ? items.map(
      item => crArticle(item, Date.now())
    )
  : [];


export default crArticles
