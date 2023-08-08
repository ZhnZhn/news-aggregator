import Reflux from 'reflux-core';

import {
  ComponentActions
} from '../actions/ComponentActions';
import {
  NewsActions
} from '../actions/NewsActions';

import ComponentSlice from './ComponentSlice';
import NewsSlice from './NewsSlice';

const Store = Reflux.createStore({
  listenables: [
     ComponentActions,
     NewsActions
  ],
  ...ComponentSlice,
  ...NewsSlice
})

export default Store
