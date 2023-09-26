import DialogType1 from './DialogType1';
import DialogType2 from './DialogType2';

const R = {
  DF: DialogType1,
  DialogType1,
  DialogType2
}

const RouterDialog = {
  getElement: (type) => R[type] || R.DF
};

export default RouterDialog
