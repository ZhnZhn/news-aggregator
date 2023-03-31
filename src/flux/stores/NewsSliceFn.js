
export const loadNewsCompleted = (
  hmNews,
  news
) => {
  const {
    source,
    articles=[],
    sortBy,
    caption,
    page,
    isRelatedBars
  } = news;
  hmNews[source] = hmNews[source]
    ? articles.concat(hmNews[source])
    : articles
  return {
    id: source,
    data: hmNews[source],
    sortBy,
    caption,
    page,
    isRelatedBars
  };
}

export const removeAllNews = (
  hmNews,
  paneId
) => {
  hmNews[paneId] = []
  return {
    id: paneId,
    data: hmNews[paneId],
    sortBy: ''
  };
}

export const removeNews = (
  hmNews,
  item
) => {
  const {
    articleId,
    source
  } = item;

  hmNews[source] = hmNews[source]
    .filter(article => article.articleId !== articleId)
}

export const removeUnderNews = (
  hmNews,
  item
) => {
  const { articleId, source } = item;
  const _underIndex = hmNews[source]
    .findIndex(article => article.articleId === articleId);

  hmNews[source] = hmNews[source].slice(_underIndex+1)
  return {
    id: source,
    data: hmNews[source]
  };
}
