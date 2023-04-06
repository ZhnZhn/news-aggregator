import NewsPane from './NewsPane';

import Article from '../items/Article';
import StackItem from '../items/StackItem';

const R = {
  DF: [NewsPane, Article],
  STACK_ITEM: [NewsPane, StackItem]
};

const RouterPane = {
  getElement: (type) => R[type] || R.DF
}

export default RouterPane
