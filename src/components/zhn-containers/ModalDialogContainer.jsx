import {
  useState,
  useCallback
} from '../uiApi';

import useListen from '../hooks/useListen';

import ItemStack from '../zhn-atoms/ItemStack';
import ModalContainer from './ModalContainer';

const _crDialogItem = (
  { Comp, type },
  index, {
  store,
  currentDialog,
  data,
  onClose
}) => (
  <Comp
    key={type}
    isShow={currentDialog === type}
    data={data[type]}
    store={store}
    onClose={onClose}
  />
);

const _isStr = str => typeof str === 'string';
const _getModalDialogType = option =>
 (option || {}).modalDialogType;

const ModalDialogContainer = ({
  store,
  router,
  showAction
}) => {
  const [
    state,
    setState
  ] = useState({
     isShow: false,
     currentDialog: null,
     data: {},
     dialogs: [],
  })
  , {
    isShow,
    data,
    dialogs,
    currentDialog
  } = state
  , _hClose = useCallback(() => setState(prevState => ({
     ...prevState,
     isShow: false,
     currentDialog: null
  })), []);

  useListen(store, (actionType, option)=>{
    if (actionType === showAction){
      const type = _getModalDialogType(option);
      if (_isStr(type)) {
        setState(prevState => {
          if (!prevState.data[type]) {
            prevState.dialogs.push({
               type, Comp: router[type]
            });
          }
          prevState.data[type] = option;
          return {
            ...prevState,
            isShow: true,
            currentDialog: type
          };
        })
      }
    }
  })

  return (
    <ModalContainer
      isShow={isShow}
      onClose={_hClose}
    >
      <ItemStack
        items={dialogs}
        crItem={_crDialogItem}
        currentDialog={currentDialog}
        data={data}
        store={store}
        onClose={_hClose}
      />
   </ModalContainer>
  );
};

export default ModalDialogContainer
