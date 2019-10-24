'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      throw { msg: message };
    }
    return true;
  }
};

exports.default = NewsApiFns;
//# sourceMappingURL=NewsApiFns.js.map