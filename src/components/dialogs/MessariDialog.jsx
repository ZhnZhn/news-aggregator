import DialogStackInputs from './DialogStackInputs';
import { MessariLink } from '../links/Links';
import {
  crInputSelectConfig,
  fGetDialogConfig,
  getPaneCaption
} from './DialogFn';

const ASSET_OPTIONS = [
["All", "all"]
]
, _crInputConfigs = () => [
  crInputSelectConfig("assetKey", ASSET_OPTIONS, {caption: "News about"})
]
, _getDialogConfig = fGetDialogConfig(_crInputConfigs);

const MessariDialog = (props) => {
  const paneCaption = getPaneCaption(props.itemConf)
  , [
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS
  ] = _getDialogConfig();
  return (
    <DialogStackInputs
      {...props}
      caption={paneCaption}
      loadId="MS"
      INPUT_CONFIGS={INPUT_CONFIGS}
      INITIAL_INPUTS={INITIAL_INPUTS}
      TOGGLES={TOGGLES}
      IS_INPUTS={IS_INPUTS}
    >
      <MessariLink />
    </DialogStackInputs>
  );
}

export default MessariDialog
