
import DialogType1 from './DialogType1'
import WebhoseQueryDialog from './WebhoseQueryDialog'
import StackTaggedDialog from './StackTaggedDialog'
import StackSearchDialog from './StackSearchDialog'
import IexNewsDialog from './IexNewsDialog'

const R = {
  DEFAULT: DialogType1,
  DialogType1: DialogType1,
  WebhoseQuery: WebhoseQueryDialog,
  StackTagged: StackTaggedDialog,
  StackSearch: StackSearchDialog,
  IexNews: IexNewsDialog
}

const RouterDialog = {
  getElement: (type) => {    
   return R[type] || R.DEFAULT;
  }
}

export default RouterDialog
