import Reflux from 'reflux-core';

import {
  NewsActions
} from '../actions/NewsActions';
import NewsSlice from './NewsSlice';

const Store = Reflux.createStore({
  listenables: [
     NewsActions
  ],

  ...NewsSlice
})

export default Store
