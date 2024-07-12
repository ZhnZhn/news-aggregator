import { isObj } from '../uiApi';

import {
  S_INPUT_ROOT,
  S_INPUT_DATE,
  crInputSelectStyle
} from '../dialogs/Dialog.Style';

import ShowHide from '../zhn/ShowHide';
import InputSelect from '../zhn-m-input/InputSelect';
import InputSuggest from '../zhn-m-input/InputSuggest';
import TextField from '../zhn-m-input/TextField';
import InputFromToDate from '../zhn-m-input/InputFromToDate';

import {
  INPUT_TYPE_SELECT,
  INPUT_TYPE_SUGGEST,
  INPUT_TYPE_TEXT_FIELD,
  INPUT_TYPE_FROM_DATE
} from './InputTypes';

const INPUT_SELECT_STYLE = crInputSelectStyle();
const S_TF_SUGGEST = {
  ...S_INPUT_ROOT,
  marginLeft: 0
};

const _isInput = (
  isInputs,
  id
) => isObj(isInputs)
  ? !!isInputs[id]
  : true;

const StackInputs = ({
  isInputs,
  configs,
  onSelect,
  onEnter
}) => (configs || []).map(arrConfig => {
  const _type = arrConfig[0]
  , _inputId = arrConfig[1]
  , CompInput = _type === INPUT_TYPE_SELECT
     ? InputSelect
     : _type === INPUT_TYPE_SUGGEST
         ? InputSuggest
         : void 0
  , _compInputProps = _type === INPUT_TYPE_SUGGEST
      ? { isInput: arrConfig[6] }
      : void 0
  , _elItem = CompInput
      ? (<CompInput
           {..._compInputProps}
           key={_inputId}
           id={_inputId}
           caption={arrConfig[2]}
           options={arrConfig[3]}
           initItem={arrConfig[4]}
           style={INPUT_SELECT_STYLE}
           tfStyle={S_TF_SUGGEST}
           onSelect={onSelect}
        />
      )
      : _type === INPUT_TYPE_TEXT_FIELD
          ? (<TextField
               {...arrConfig[4]}
               key={_inputId}
               id={_inputId}
               style={S_INPUT_ROOT}
               caption={arrConfig[2]}
               initValue={arrConfig[3]}
               onEnter={onEnter}
               onBlur={onSelect}
               onInputChange={onSelect}
            />
          )
          : _type === INPUT_TYPE_FROM_DATE
            ? (<InputFromToDate
                key="_ft"
                style={S_INPUT_DATE}
                initialFrom={arrConfig[3]}
                initialTo={arrConfig[4]}
                onInput={onSelect}
             />
            )
            : void 0;
  return _elItem ? (
    <ShowHide isShow={_isInput(isInputs, _inputId)}>
      {_elItem}
    </ShowHide>
  ) : null;
});

export default StackInputs
