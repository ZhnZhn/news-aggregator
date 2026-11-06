"use strict";

exports.__esModule = true;
exports.crQueryTokenAll = exports.crApiUrl = exports.checkResponse = void 0;
var _ApiFn = require("./ApiFn");
const API_URL = 'https://api.thenewsapi.com/v1/news',
  QUERY_LIMIT = 'limit=3&language=en';
const _crPage = nextPage => (0, _ApiFn.crQueryToken)('page', nextPage);
const crApiUrl = (type, option) => {
  const {
      apiKey,
      nextPage
    } = option,
    _page = _crPage(nextPage);
  option.apiKey = void 0;
  return `${API_URL}/${type}?api_token=${apiKey}${_page}&${QUERY_LIMIT}`;
};
exports.crApiUrl = crApiUrl;
const crQueryTokenAll = (parameterName, value) => value === 'all' ? '' : (0, _ApiFn.crQueryToken)(parameterName, value);
exports.crQueryTokenAll = crQueryTokenAll;
const checkResponse = () => true;
exports.checkResponse = checkResponse;
//# sourceMappingURL=TheNewsApiFn.js.map