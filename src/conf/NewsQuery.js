
const NEWS_QUERY = {
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
       "caption": "Tagged Questions",
       //"source": "webhose"
     }
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": "StackOverflow: Search Questions",
    "paneId": "stack_search",
    "paneType": "SO_SEARCH",
    "dialogProps": {
       "caption": "Search Questions",
       //"source": "webhose"
     }
  }
}

export default NEWS_QUERY
