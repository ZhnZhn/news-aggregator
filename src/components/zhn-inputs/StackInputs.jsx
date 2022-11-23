import InputSelect from '../zhn-m-input/InputSelect';
import TextField from '../zhn-m-input/TextField';

const StackInputs = ({
  TS,
  configs,
  onSelect
}) => (configs || []).map(arrConfig => {
  const _type = arrConfig[0];
  if (_type === 's') {
    return (
      <InputSelect
        key={arrConfig[1]}
        id={arrConfig[1]}
        caption={arrConfig[2]}
        options={arrConfig[3]}
        initItem={arrConfig[4]}
        styleConfig={TS.SELECT}
        onSelect={onSelect}
      />
    );
  } else if (_type === 't') {
    return (
      <TextField
        key={arrConfig[1]}
        id={arrConfig[1]}
        style={TS.INPUT_ROOT}
        caption={arrConfig[2]}
        initValue={arrConfig[3]}
        onEnter={onSelect}
        onBlur={onSelect}
      />
    );
  }
  return null;
});

export default StackInputs
