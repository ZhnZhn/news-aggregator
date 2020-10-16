import { Component } from 'react'

import CaptionInput from './CaptionInput'

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

class ModalButton extends Component {

  componentDidMount(){
    const { onReg } = this.props;
    if (typeof onReg === 'function'){
      onReg(this.rootNode)
    }
  }

  render(){
    const {
            rootStyle, clDiv, title, caption,
            accessKey,
            children, onClick
          } = this.props;
    return (
      <button
        ref={n => this.rootNode = n}
        className={CL_BT}
        style={rootStyle}
        type="button"
        tabIndex={0}
        title={title}
        accessKey={accessKey}
        onClick={onClick}
      >
        <div className={clDiv}>
          <CaptionInput
            className={CL_BT_SPAN}
            caption={caption}
            accessKey={accessKey}
          >
             {children}
          </CaptionInput>
        </div>
      </button>
    );
  }
}

export default ModalButton
