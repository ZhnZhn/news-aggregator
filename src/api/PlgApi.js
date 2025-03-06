import { isStr } from "../utils/isTypeFn";

const _isArr = Array.isArray
, ROOT_URL = "https://api.polygon.io"
, API_URL = `${ROOT_URL}/v2/reference/news`;

export const isNextUrl = (
  nextUrl
) => isStr(nextUrl)
 && nextUrl.slice(0, 22) === ROOT_URL;

export const Plg = {
  getRequestUrl(option){
    const {
      next_url,
      apiKey,
      ticker
    } = option;
    option.apiKey = void 0
    return isNextUrl(next_url)
      ? `${next_url}&apiKey=${apiKey}`
      : `${API_URL}?ticker=${ticker}&limit=10&apiKey=${apiKey}`;
  },

  checkResponse(json){
    const { results } = json || {};
    return _isArr(results);
  }
}
