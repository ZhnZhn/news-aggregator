import DialogType1 from './DialogType1';
import DialogType2 from './DialogType2';
import WebzQuery from './WebzQueryDialog';
import WebzCountry from './WebzCountryDialog';

const R = {
  DF: DialogType1,
  DialogType1,
  DialogType2,
  WebzQuery,
  WebzCountry
}

const RouterDialog = {
  getElement: (type) => R[type] || R.DF
};

export default RouterDialog
