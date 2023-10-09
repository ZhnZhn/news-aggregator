export { bindTo } from '../utils';

import { bindTo } from '../utils';

import {
  createStore,
  subscribeWithSelector
} from './zustand-lite';

import useSubscribe from '../components/hooks/useSubscribe';
import useRerender from '../components/hooks/useRerender';

export const createStoreWithSelector = (
  crStore
) => createStore(
  subscribeWithSelector(crStore)
)

export const fCrUse = (
  store,
  select
) => bindTo(useSubscribe, store, select);

export const getStoreApi = store => [
  store.setState,
  store.getState
];

const _isFn = v => typeof v === 'function'
, _reducerUseAtomValue = (
  value,
  crOrValue
) => _isFn(crOrValue)
  ? crOrValue(value)
  : crOrValue;
export const atom = (initialValue) => {
   const _atom = Object.create(null);
   _atom.value = initialValue
   return {
     useAtomValue: () => {
       _atom.rerender = useRerender()[1]
       return _atom.value;
     },
     setValue: (crOrValue) => {
       const _prev = _atom.value
       , _rerender = _atom.rerender;
       _atom.value = _reducerUseAtomValue(_prev, crOrValue)
       if (_prev !== _atom.value && _isFn(_rerender)) {
         _rerender()
       }
     }
   };
}
