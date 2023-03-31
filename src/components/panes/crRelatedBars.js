
const _isArr = Array.isArray
, _getObjectKeys = Object.keys
, _sortTupleBy2 = (
  arr1,
  arr2
) => arr2[1] - arr1[1];

const crRelatedBars = (
  articles
) => {
  if (!_isArr(articles)) {
    return;
  }
  const hm = articles.reduce((hm, item) => {
    (item.related || '').split('|').forEach(category => {
      if (hm[category]) {
        ++hm[category]
      } else {
        hm[category] = 1
      }
    })
    return hm;
  }, Object.create(null))
  , _relatedBars = _getObjectKeys(hm)
     .map(key => [key, hm[key]])
  return _relatedBars.sort(_sortTupleBy2);
}

export default crRelatedBars
