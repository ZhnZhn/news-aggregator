import {
  THEME_OPTIONS,
  FONT_SIZE_OPTIONS,
  setUiTheme,
  selectFontSize
} from '../styles/uiTheme';

import {
  isAllowUseLs,
  allowSaveToLs,
  notAllowSaveToLs
} from '../../flux/localStore';

import {
  isAdvancedInputOptions,
  enableAdvancedInputOptions,
  disableAndvancedInputOptions
} from '../../flux/uiStore';

import A from '../Comp';
import RowCheckBox from '../dialogs/RowCheckBox';

const S_ROW_CHECKBOX_LS = {
  margin: '12px 0 12px 16px'
}
, S_VERTICAL_GAP_22 = {
  height: 22
}
, IS_ALLOW_USE_LS = isAllowUseLs()
, IS_ADVANCED_INPUT_OPTIONS = isAdvancedInputOptions();

const CardUiTheme = ({
  style,
  selectStyle,
  buttonsStyle,
  btStyle,
  onClose,
  isVisible,
  setRefLast
}) => (
    <div style={style}>
      <A.InputSelect
        style={selectStyle}
        caption="UI Theme"
        initItem={THEME_OPTIONS.DF}
        options={THEME_OPTIONS}
        onSelect={setUiTheme}
      />
      <A.InputSelect
        style={selectStyle}
        caption="Font Size"
        initItem={FONT_SIZE_OPTIONS.DF}
        options={FONT_SIZE_OPTIONS}
        onSelect={selectFontSize}
      />
      <RowCheckBox
        style={S_ROW_CHECKBOX_LS}
        initialValue={IS_ALLOW_USE_LS}
        caption="Allow use localStorage"
        onCheck={allowSaveToLs}
        onUnCheck={notAllowSaveToLs}
      />
      <RowCheckBox
        style={S_ROW_CHECKBOX_LS}
        initialValue={IS_ADVANCED_INPUT_OPTIONS}
        caption="Advanced input options"
        onCheck={enableAdvancedInputOptions}
        onUnCheck={disableAndvancedInputOptions}
      />
      <div style={S_VERTICAL_GAP_22} />
      <div style={buttonsStyle}>
        <A.RaisedButton
          refBt={isVisible ? setRefLast : void 0}
          style={btStyle}
          isPrimary={true}
          caption="Close"
          onClick={onClose}
        />
      </div>
    </div>
);

export default CardUiTheme
