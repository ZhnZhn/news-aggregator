import A from '../Comp'

const S = {
  ROOT_DIV: {
    paddingTop: 16
  }
};

const THEME_OPTIONS = [
  { caption: 'Grey', value: 'GREY' },
  { caption: 'White', value: 'WHITE' },
  { caption: 'Sand', value: 'SAND' },
], DF_THEME = THEME_OPTIONS[0];

const FONT_SIZE_OPTIONS = [
  { caption: 'Small (15px)', value: 15 },
  { caption: 'Medium (16px)', value: 16 },
  { caption: 'Large (17px)', value: 17 },
  { caption: 'Extra Large (18px)', value: 18 }
],
DF_FONT_SIZE = FONT_SIZE_OPTIONS[1];

const CardUiTheme = ({
  style, buttonsStyle,
  TS,
  onSetTheme,
  onSetFontSize,
  onClose
}) => (
    <div style={{...S.ROOT_DIV, ...style}}>
      <A.InputSelect
        styleConfig={TS.SELECT}
        caption="UI Theme"
        initItem={DF_THEME}
        options={THEME_OPTIONS}
        onSelect={onSetTheme}
      />
      <A.InputSelect
        styleConfig={TS.SELECT}
        caption="Font Size"
        initItem={DF_FONT_SIZE}
        options={FONT_SIZE_OPTIONS}
        onSelect={onSetFontSize}
      />
      <div style={buttonsStyle}>
        <A.RaisedButton
          rootStyle={TS.BT.RAISED_ROOT}
          clDiv={TS.BT.CL_RAISED_DIV}
          isPrimary={true}
          caption="Close"
          onClick={onClose}
        />
      </div>
    </div>
);

export default CardUiTheme
