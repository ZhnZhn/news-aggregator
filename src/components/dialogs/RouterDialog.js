import DialogType1 from './DialogType1';
import DialogType2 from './DialogType2';
import WebzQuery from './WebzQueryDialog';
import WebzCountry from './WebzCountryDialog';
import TheNewsApiTop from './TheNewsApiTopDialog';

const R = {
  DF: DialogType1,
  DialogType1,
  DialogType2,
  WebzQuery,
  WebzCountry,
  TheNewsApiTop
}


const RouterDialog = {
  getElement: (type) => R[type] || R.DF
};

export default RouterDialog
