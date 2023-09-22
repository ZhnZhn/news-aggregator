import DialogStackInputs from './DialogStackInputs';
import {
  getCaption,
  getLoadId
} from './DialogFn';

const DialogType2 = (props) => {
  const {
    itemConf
  } = props
  , {
    getConfig,
    CompLink
  } = itemConf
  , [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = getConfig();
  return (
    <DialogStackInputs
      {...props}
      caption={getCaption(itemConf)}
      loadId={getLoadId(itemConf)}
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <CompLink />
    </DialogStackInputs>
  );
}

export default DialogType2
