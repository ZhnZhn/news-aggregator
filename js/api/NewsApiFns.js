"use strict";

exports.__esModule = true;
exports.default = void 0;
const NewsApiFns = {
  crOptionFetch: option => {
    const {
      apiKey
    } = option;
    option.apiKey = void 0;
    return {
      headers: {
        'x-api-key': apiKey
      }
    };
  },
  checkResponse: (json, option) => {
    const {
      status,
      message
    } = json;
    if (status === 'error') {
      throw {
        msg: message
      };
    }
    return true;
  }
};
var _default = NewsApiFns;
exports.default = _default;
//# sourceMappingURL=NewsApiFns.js.map