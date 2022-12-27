//as-markdown
const API_URL = 'https://data.messari.io/api/v1/news'
, FIELDS = 'title,tags,published_at,url,author/name';

const MessariApi = {
  getRequestUrl({ assetKey }){
    return assetKey && assetKey !== 'all'
      ? `${API_URL}/${assetKey}?fields=${FIELDS}`
      : `${API_URL}?fields=${FIELDS}`;
  },
  checkResponse(json, option){
    return true;
  }
}

export default MessariApi
