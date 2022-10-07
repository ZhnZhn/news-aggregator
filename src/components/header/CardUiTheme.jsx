import {
  THEME_OPTIONS,
  FONT_SIZE_OPTIONS,
  selectFontSize,
  isAllowUseLs,
  allowSaveToLs,
  notAllowSaveToLs
} from '../styles/theme';

import A from '../Comp';
import SvgCheckBox from '../zhn-atoms/svg/SvgCheckBox';

const S_DIV = { paddingTop: 16 }
, S_ROW_CHECKBOX = {
  margin: '24px 0 0 16px'
}
, S_CHECKBOX_CAPTION = {
  fontWeight: 'bold',
  marginLeft: 8,
  userSelect: 'none'
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
      <div style={S_ROW_CHECKBOX}>
        <SvgCheckBox
          initialValue={IS_ALLOW_USE_LS}
          stroke={TS.R_DIALOG.backgroundColor}
          onCheck={allowSaveToLs}
          onUnCheck={notAllowSaveToLs}
        />
        <span style={S_CHECKBOX_CAPTION}>Allow to save to localStorage</span>
      </div>
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
