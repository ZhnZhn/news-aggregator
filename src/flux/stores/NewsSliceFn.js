
export const loadNewsCompleted = (
  slice,
  news
) => {
  const {
    source,
    articles=[],
    sortBy,
    caption,
    page
  } = news;
  slice[source] = slice[source]
    ? articles.concat(slice[source])
    : articles
  return {
    id: source,
    data: slice[source],
    sortBy,
    caption,
    page
  };
}

export const removeAllNews = (
  slice,
  paneId
) => {
  slice[paneId] = []
  return {
    id: paneId,
    data: slice[paneId],
    sortBy: ''
  };
}

export const removeNews = (
  slice,
  item
) => {
  const { id, source } = item;
  slice[source] = slice[source]
    .filter(article => article.articleId !== id)
}

export const removeUnderNews = (
  slice,
  item
) => {
  const { articleId, source } = item;
  const _underIndex = slice[source]
    .findIndex(article => article.articleId === articleId);

  slice[source] = slice[source].slice(_underIndex+1)
  return {
    id: source,
    data: slice[source]
  };
}
