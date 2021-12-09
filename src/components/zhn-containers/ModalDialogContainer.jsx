import { createElement, Component } from 'react';
//import PropTypes from 'prop-types'

import ItemStack from '../zhn-atoms/ItemStack';
import ModalContainer from './ModalContainer';

const _crDialogItem = (dialog, index, {
  store,
  currentDialog,
  data,
  onClose
}) => {
  const { comp, type } = dialog;
  return createElement(comp, {
    store,
    key: type,
    isShow: currentDialog === type,
    data: data[type],
    onClose
  });
};

class ModalDialogContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    })
  }
  */
  inits = {}
  state = {
    isShow: false,
    data: {},
    dialogs: [],
    currentDialog: null
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, option) => {
     const { router, showAction } = this.props;
     if (actionType === showAction){
       const type = option.modalDialogType
       , { data, dialogs } = this.state;
       data[type] = option;
       if (!this.inits[type]) {
         dialogs.push({ type, comp: router[type] });
         this.inits[type] = true
       }
       this.setState({
         isShow: true,
         currentDialog: type,
         data,
         dialogs
       })
     }
  }

  _hClose = () => {
    this.setState(prevState => ({
      isShow: false,
      currentDialog: null,
    }))
  }


  render(){
    const { store } = this.props
    , {
      isShow,
      currentDialog,
      dialogs,
      data
    } = this.state;
    return (
      <ModalContainer
          isShow={isShow}
          onClose={this._hClose}
      >
         <ItemStack
           items={dialogs}
           crItem={_crDialogItem}
           store={store}
           currentDialog={currentDialog}
           data={data}
           onClose={this._hClose}
         />
     </ModalContainer>
   );
  }
}


export default ModalDialogContainer
