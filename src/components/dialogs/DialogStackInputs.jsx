import styleConfig from './Dialog.Style';

import useToggleState from '../hooks/useToggleState';
import useRefInputs from './hooks/useRefInputs';
import useDialog from './hooks/useDialog';
import useDecorDialog from './hooks/useDecorDialog';

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
  , [
    TS,
    _hKeyDown
  ] = useDecorDialog(styleConfig, _hLoad, _hClose)
  , [
    _captionStyle,
    _menuToggle
  ] = _hasMenuToggle(TOGGLES)
      ? [TS.DIALOG_CAPTION, TOGGLES]
      : [TS.BROWSER_CAPTION];

  return (
    <DraggableDialog
       ref={_refDialog}
       isShow={isShow}
       style={TS.R_DIALOG}
       captionStyle={_captionStyle}
       buttonStyle={TS.BT}
       chbStroke={TS.R_DIALOG.backgroundColor}
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
          TS={TS}
          isInputs={isInputs}
          configs={INPUT_CONFIGS}
          onSelect={_selectInput}
        />
        <PoweredBy style={TS.POWERED_BY}>
          {children}
        </PoweredBy>
      </FlexColumn>
    </DraggableDialog>
  );
}

export default DialogStackInputs
