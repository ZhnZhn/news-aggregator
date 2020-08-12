
//as-markdown

const C = {
  URL: 'https://data.messari.io/api/v1/news',
  FIELDS: 'title,tags,published_at,url,author/name'
};

const MessariApi = {
  getRequestUrl({ assetKey }){
    return assetKey && assetKey !== 'all'
      ? `${C.URL}/${assetKey}?fileds=${C.FIELDS}`
      : `${C.URL}?fileds=${C.FIELDS}`;
  },
  checkResponse(json, option){
    return true;
  }
}

export default MessariApi
