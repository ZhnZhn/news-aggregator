import Reflux from 'reflux-core'

import ComponentActions from '../actions/ComponentActions'
import NewsActions from '../actions/NewsActions'

import ComponentSlice from './ComponentSlice'
import NewsSlice from './NewsSlice'
import SettingSlice from './SettingSlice'
import WithLoadingProgress from './WithLoadingProgress'

const Store = Reflux.createStore({
  listenables: [
       ComponentActions,
       NewsActions
  ],

  ...ComponentSlice,
  ...NewsSlice,
  ...SettingSlice,
  ...WithLoadingProgress
})

export default Store
