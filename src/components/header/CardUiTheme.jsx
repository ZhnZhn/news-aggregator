import React from 'react'

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

const CardUiTheme = ({
  style, buttonsStyle,  
  TS,
  onSetTheme, onClose
}) => (
    <div style={{...S.ROOT_DIV, ...style}}>
      <A.InputSelect
        styleConfig={TS.SELECT}
        caption="Theme (Default: Grey)"
        initItem={DF_THEME}
        options={THEME_OPTIONS}
        onSelect={onSetTheme}
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
