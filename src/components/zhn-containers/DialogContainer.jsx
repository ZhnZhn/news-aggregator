import { cloneElement, Component } from 'react';

import isInCont from './isInCont';

const S = {
  ROOT: {
    zIndex : 1030,
    position: 'absolute',
    top: 70,
    left: 10,
    width: '99%'
  }
};

const _doVisible = function(arr, keyValue){
  let index
    , max = arr.length
    , i;
  for (i=0; i<max; i++){
    if (arr[i].key === keyValue){
      index = i
      break;
    }
  }
  return [ ...arr.slice(0, index), ...arr.slice(index+1), arr[index] ];
}

const _updateVisible = (state, key, maxDialog) => {
  const { hmIs } = state;
  if (!hmIs[key]){
    let { visibleDialogs } = state;
    hmIs[key] = true
    visibleDialogs.push(key)
    if (visibleDialogs.length > maxDialog){
      hmIs[visibleDialogs[0]] = false
      visibleDialogs = visibleDialogs.slice(1)
    }
  }
}

class DialogContainer extends Component {

   elHtml = document.getElementsByTagName('html')[0]
   state = {
      hmIs: {},
      compDialogs : [],
      visibleDialogs: []
    }

   componentDidMount(){
     this.unsubscribe = this.props.store.listen(this._onStore)
   }
   componentWillUnmount(){
     this.unsubscribe()
   }

   _onStore = (actionType, option) => {
      const { showAction } = this.props;
      if (actionType === showAction){
         this.setState(prevState => {
           const { key, Comp } = option
               , { maxDialog } = this.props;
           _updateVisible(prevState, key, maxDialog)
           if (!Comp){
              prevState.compDialogs = _doVisible(prevState.compDialogs, key)
           } else if (!isInCont(prevState.compDialogs, Comp)) {
              prevState.compDialogs.push(Comp)
           }
           return prevState;
         })
      }
   }

   _hCloseDialog = (key) => {
     this.setState(prevState => {
       const { hmIs, visibleDialogs } = prevState;
       hmIs[key] = false
       prevState.visibleDialogs = visibleDialogs.filter(value => value !== key)
       this.elHtml.style.cursor = ''
       return prevState;
     })
   }

  _renderDialogs = () => {
    const { hmIs, compDialogs } = this.state;
    return compDialogs.map(Comp => {
       const key = Comp.key;
       return cloneElement(Comp, {
          key: key,
          isShow: hmIs[key],
          onClose: this._hCloseDialog.bind(this, key)
       });
    });
  }

  render(){
    return (
      <div style={S.ROOT}>
        {this._renderDialogs()}
      </div>
    );
  }
}

export default DialogContainer
