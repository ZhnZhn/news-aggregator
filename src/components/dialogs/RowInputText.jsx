import React, { Component } from 'react'

import CaptionInput from '../zhn-atoms/CaptionInput'
import InputText from '../zhn-atoms/InputText'
import STYLE from '../styles/DialogStyles'

const S = {
  INPUT: {
    width: '250px',
    marginLeft: '0px',
    height: '30px',
    paddingLeft: '10px'
  }
};


class RowInputText extends Component {
  render(){
    const { caption, accessKey, ...rest } = this.props;
    return (
      <div style={STYLE.rowDiv}>
         <label accessKey={accessKey}>
           <CaptionInput
              rootStyle={STYLE.labelSpan}
              caption={caption}
              accessKey={accessKey}
           />
           <InputText
              style={S.INPUT}
              {...rest}
           />
        </label>
     </div>
    );
  }
}


export default RowInputText
