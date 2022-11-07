import {
  THEME_OPTIONS,
  FONT_SIZE_OPTIONS,
  selectFontSize,
  isAllowUseLs,
  allowSaveToLs,
  notAllowSaveToLs
} from '../styles/theme';

import A from '../Comp';
import RowCheckBox from '../dialogs/RowCheckBox';

const S_DIV = {
  paddingTop: 16
}, S_ROW_CHECKBOX_LS = {
  margin: '34px 0 34px 16px'
}
, IS_ALLOW_USE_LS = isAllowUseLs();

const CardUiTheme = ({
  style,
  buttonsStyle,
  TS,
  onSetTheme,
  onClose
}) => (
    <div style={{...S_DIV, ...style}}>
      <A.InputSelect
        styleConfig={TS.SELECT}
        caption="UI Theme"
        initItem={THEME_OPTIONS.DF}
        options={THEME_OPTIONS}
        onSelect={onSetTheme}
      />
      <A.InputSelect
        styleConfig={TS.SELECT}
        caption="Font Size"
        initItem={FONT_SIZE_OPTIONS.DF}
        options={FONT_SIZE_OPTIONS}
        onSelect={selectFontSize}
      />
      <RowCheckBox
        style={S_ROW_CHECKBOX_LS}
        initialValue={IS_ALLOW_USE_LS}
        stroke={TS.R_DIALOG.backgroundColor}
        caption="Allow to save to localStorage"
        onCheck={allowSaveToLs}
        onUnCheck={notAllowSaveToLs}
      />
      <div style={buttonsStyle}>
        <A.RaisedButton
          style={TS.BT.RAISED}
          clDiv={TS.BT.CL_RAISED_DIV}
          isPrimary={true}
          caption="Close"
          onClick={onClose}
        />
      </div>
    </div>
);

export default CardUiTheme
