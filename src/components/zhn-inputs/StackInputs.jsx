import InputSelect from '../zhn-m-input/InputSelect';

const StackInputs = ({
  TS,
  configs,
  onSelect
}) => (configs || []).map(arrConfig => {
  if (arrConfig[0] === 's') {
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
  }
  return null;
});

export default StackInputs
