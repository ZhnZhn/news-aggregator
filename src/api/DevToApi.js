const API_URL = 'https://dev.to/api';
const _isArr = Array.isArray;

const DevToApi = {
  getRequestUrl({
    tag,
    perPage,
    inRecentDays
  }){
    return `${API_URL}/articles?tag=${tag}&top=${inRecentDays}&per_page=${perPage}`;
  },
  checkResponse(json, option){
    return _isArr(json);
  }
};

export default DevToApi
