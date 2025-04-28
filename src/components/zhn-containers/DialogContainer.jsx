import {
  useState,
  cloneElement
} from '../uiApi';

const S_ROOT = {
  zIndex: 1030,
  position: 'absolute',
  top: 70,
  left: 10
};

const _findCompIndex = (
  arr,
  key
) => {
  for (let i=0; i<arr.length; i++){
    if (arr[i].key === key){
      return i;
    }
  }
  return -1;
};

const _doVisible = (
  arr,
  keyValue
) => {
  const _index = _findCompIndex(arr, keyValue);
  return _index > -1 ? [
    ...arr.slice(0, _index),
    ...arr.slice(_index+1),
    arr[_index]
  ] : arr;
};

const _updateVisible = (
  state,
  key,
  maxDialog
) => {
  const { hmIs, visibleDialogs } = state
  , _keyIndex = visibleDialogs.indexOf(key);
  if (_keyIndex !== -1) {
    visibleDialogs.splice(_keyIndex, 1)
  }
  visibleDialogs.push(key)
  hmIs[key] = true
  if (visibleDialogs.length > maxDialog ){
    hmIs[visibleDialogs[0]] = false
    visibleDialogs.splice(0, 1)
  }
};

const DialogContainer = ({
  maxDialog=3,
  useMsDialog,
  closeDialog
}) => {
  const [
    state,
    setState
  ] = useState({
    hmIs: {},
    compDialogs: [],
    visibleDialogs: []
  })
  , {
    hmIs,
    compDialogs
  } = state
  , _hToggleDialog = key => {
     setState(prevState => {
       const {
         hmIs,
         visibleDialogs
       } = prevState;
       hmIs[key] = false
       prevState.visibleDialogs = visibleDialogs
         .filter(value => value !== key)
       return {...prevState};
     })
  };

  useMsDialog(msDialog => {
    const option = msDialog || {};
    if (option){
       setState(prevState => {
         const { key, Comp } = option;
          if (Comp && _findCompIndex(prevState.compDialogs, key) !== -1) {
            return prevState;
          }
         _updateVisible(prevState, key, maxDialog)
         if (!Comp){
            prevState.compDialogs = _doVisible(prevState.compDialogs, key)
         } else {
            prevState.compDialogs.push(Comp)
         }
         return {...prevState};
       })
    }
  })

  return (
    <div style={S_ROOT}>
      {compDialogs.map(Comp => {
         const key = Comp.key;
         return cloneElement(Comp, {
           key,
           isShow: hmIs[key],
           onClose: () => {
             _hToggleDialog(key)
             closeDialog(Comp.props.itemConf)
          }
         });
      })}
    </div>
  );
}

export default DialogContainer
