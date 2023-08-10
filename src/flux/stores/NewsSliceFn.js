
export const loadItemCompletedImpl = (
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
    isAdd: true,
    id: source,
    data: hmNews[source],
    sortBy,
    caption,
    page,
    isRelatedBars
  };
}

export const removeItemsImpl = (
  hmNews,
  paneId
) => {
  hmNews[paneId] = []
  return {
    isUpdate: true,
    id: paneId,
    data: hmNews[paneId],
    sortBy: ''
  };
}

export const removeItemImpl = (
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

export const removeUnderItemImpl = (
  hmNews,
  item
) => {
  const {
    articleId,
    source
  } = item
  , _underIndex = hmNews[source]
      .findIndex(article => article.articleId === articleId);

  hmNews[source] = hmNews[source].slice(_underIndex+1)
  return {
    isUpdate: true,
    id: source,
    data: hmNews[source]
  };
}
