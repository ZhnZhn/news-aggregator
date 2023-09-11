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
import FlexColumn from '../zhn-atoms/FlexColumn';
import StackInputs from '../zhn-inputs/StackInputs';
import PoweredBy from '../links/PoweredBy';

const _isArr = Array.isArray;

const _hasMenuToggle = (
  menuToggle
) => _isArr(menuToggle) && menuToggle.length > 1;

const DialogStackInputs = (props) => {
  const {
    isShow,
    caption,
    loadId,
    INPUT_CONFIGS,
    INITIAL_INPUTS,
    TOGGLES,
    IS_INPUTS,
    children,
    onShow
  } = props
  , [
    isInputs,
    toggleInput
  ] = useToggleState(IS_INPUTS)
  , [
    _refInputs,
    _selectInput
  ] = useRefInputs(INITIAL_INPUTS)
  , [
    _refDialog,
    _hLoad,
    _hClose
  ] = useDialog(props, loadId, _refInputs)
  , _hKeyDown = useKeyDown(_hLoad, _hClose)
  , [
    _captionStyle,
    _menuToggle
  ] = _hasMenuToggle(TOGGLES)
      ? [S_DIALOG_CAPTION, TOGGLES]
      : [S_BROWSER_CAPTION];

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       captionStyle={_captionStyle}
       caption={caption}
       menuToggle={_menuToggle}
       toggleItem={toggleInput}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
    >
      <FlexColumn>
        <StackInputs
          isInputs={isInputs}
          configs={INPUT_CONFIGS}
          onSelect={_selectInput}
          onEnter={_hLoad}
        />
        <PoweredBy style={S_POWERED_BY}>
          {children}
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
}

export default DialogStackInputs
