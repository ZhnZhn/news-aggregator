"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NEWS_QUERY = {
  WEBHOSE: {
    "type": "W_WEBHOSE",
    "dialogType": "WebhoseQuery",
    "paneCaption": "Webhose Query",
    "paneId": "webhose",
    "dialogProps": {
      "caption": "Webhose Query",
      "source": "webhose"
    }
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": "StackOverflow: Tagged",
    "paneId": "stack_tagged",
    "paneType": "SO_TAGGED",
    "dialogProps": {
      "caption": "Tagged Questions"
    }
  }
};

exports.default = NEWS_QUERY;
//# sourceMappingURL=D:\_Dev\_React\_News\js\conf\NewsQuery.js.map