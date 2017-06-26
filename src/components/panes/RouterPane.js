
import NewsPane from './NewsPane'

import Article from '../items/Article'
import StackItem from '../items/StackItem'

const R = {
  DEFAULT: {
    Pane: NewsPane,
    Item: Article
  },
  SO_TAGGED: {
    Pane: NewsPane,
    Item: StackItem
  },
  SO_SEARCH: {
    Pane: NewsPane,
    Item: StackItem
  }
}

const RouterPane = {
  getElement: (type) => {
    const El = R[type];
    if (El) {
      return R[type];
    } else {
      return  R.DEFAULT;
    }
  }
}

export default RouterPane
