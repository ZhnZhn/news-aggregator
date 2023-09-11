import {
  S_INPUT_ROOT,
  S_INPUT_DATE,
  crSelectStyleConfig
} from '../dialogs/Dialog.Style';

import ShowHide from '../zhn-atoms/ShowHide';
import InputSelect from '../zhn-m-input/InputSelect';
import TextField from '../zhn-m-input/TextField';
import InputFromToDate from '../zhn-m-input/InputFromToDate';


const _isObj = v => v && typeof v === 'object';
const SELECT_STYLE_CONFIG = crSelectStyleConfig();

const _isInput = (
  isInputs,
  id
) => _isObj(isInputs)
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
  , _elItem = _type === 's'
      ? (<InputSelect
           key={_inputId}
           id={_inputId}
           caption={arrConfig[2]}
           options={arrConfig[3]}
           initItem={arrConfig[4]}
           styleConfig={SELECT_STYLE_CONFIG}
           onSelect={onSelect}
        />
      )
      : _type === 't'
          ? (<TextField
               {...arrConfig[4]}
               key={_inputId}
               id={_inputId}
               style={S_INPUT_ROOT}
               caption={arrConfig[2]}
               initValue={arrConfig[3]}
               onEnter={onEnter}
               onBlur={onSelect}
               onKeyDown={onSelect}
            />
          )
          : _type === 'ft'
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
