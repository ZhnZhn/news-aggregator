"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var NewsApiFns = {
  crOptionFetch: function crOptionFetch(option) {
    var apiKey = option.apiKey;
    option.apiKey = void 0;
    return {
      headers: {
        'X-Api-Key': apiKey
      }
    };
  },
  checkResponse: function checkResponse(json, option) {
    var status = json.status,
        message = json.message;

    if (status === 'error') {
      throw {
        msg: message
      };
    }

    return true;
  }
};
var _default = NewsApiFns;
exports["default"] = _default;
//# sourceMappingURL=NewsApiFns.js.map