
import DialogType1 from './DialogType1'
import WebhoseQueryDialog from './WebhoseQueryDialog'

const R = {
  DEFAULT: DialogType1,
  DialogType1: DialogType1,
  WebhoseQuery: WebhoseQueryDialog
}

const RouterDialog = {
  getElement: (type) => {
    const El = R[type];
    if (El) {
     return R[type];
    } else {
     return  R.DEFAULT;
   }
  }
}

export default RouterDialog
