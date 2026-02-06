import {
  S_DIALOG_CAPTION,
  S_BROWSER_CAPTION,
  S_POWERED_BY
} from './Dialog.Style';

import useToggleState from '../hooks/useToggleState';
import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useKeyDown from './hooks/useKeyDown';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import { FlexColumn } from '../zhn/FlexToken';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';

const _isArr = Array.isArray;

const _hasMenuToggle = (
  menuToggle
) => _isArr(menuToggle) && menuToggle.length > 1;

const DialogStackInputs = (props) => {
  const [
    isInputs,
    toggleInput
  ] = useToggleState(props.IS_INPUTS)
  , [
    refInputs,
    selectInput
  ] = useRefInputs(props.INITIAL_INPUTS)
  , [
    refDialog,
    hLoad,
    hClose
  ] = useDialog(props, props.loadId, refInputs)
  , hKeyDown = useKeyDown(hLoad, hClose)
  , [
    captionStyle,
    menuToggle
  ] = _hasMenuToggle(props.TOGGLES)
      ? [S_DIALOG_CAPTION, props.TOGGLES]
      : [S_BROWSER_CAPTION];

  return (
    <DraggableDialog
       refEl={refDialog}
       isShow={props.isShow}
       captionStyle={captionStyle}
       caption={props.caption}
       menuToggle={menuToggle}
       toggleItem={toggleInput}
       onKeyDown={hKeyDown}
       onLoad={hLoad}
       onShow={props.onShow}
       onClose={hClose}
    >
      <FlexColumn>
        <StackInputs
          isInputs={isInputs}
          configs={props.INPUT_CONFIGS}
          onSelect={selectInput}
          onEnter={hLoad}
        />
        <PoweredBy style={S_POWERED_BY}>
          {props.children}
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
}

export default DialogStackInputs
