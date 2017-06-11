import React, { Component } from 'react'

import CaptionInput from '../zhn-atoms/CaptionInput'
import InputSecret from '../zhn-atoms/InputSecret'
import STYLE from '../styles/DialogStyles'

class RowInputSecret extends Component {
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
           <InputSecret
              {...rest}
           />
        </label>
     </div>
    );
  }
}


export default RowInputSecret
