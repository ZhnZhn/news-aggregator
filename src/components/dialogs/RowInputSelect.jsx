import React from 'react';

import CaptionInput from '../zhn-atoms/CaptionInput'
import InputSelect from '../zhn-select/InputSelect'
import STYLE from '../styles/DialogStyles'

const RowInputSelect = ({ caption, accessKey, ...rest }) => (
   <div style={STYLE.rowDiv}>
      <label accessKey={accessKey}>
        <CaptionInput
           rootStyle={STYLE.labelSpan}
           caption={caption}
           accessKey={accessKey}
        />
        <InputSelect
           width="250"
           {...rest}
        />
      </label>
  </div>
);


export default RowInputSelect
