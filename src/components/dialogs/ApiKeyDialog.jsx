import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import A from '../Comp'

const S = {
  MODAL : {
    position : 'static',
    width: 320,
    height: 180,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  }
};

class ApiKeyDialog extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
      && nextProps.isShow === this.props.isShow
    ) {
      return false;
    }
    return true;
  }

  _hKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 13 || keyCode === 27) {
      this.props.onClose()
    }
  }

  render(){
    const {
      isShow, theme, data, onClose
    } = this.props
    , TS = theme.createStyle(styleConfig);
    return (
      <A.ModalDialog
         style={{ ...S.MODAL, ...TS.R_DIALOG }}
         divBtStyle={S.DIV_BT}
         styleCaption={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="API Key Required"
         isShow={isShow}
         isClosePrimary={true}
         //commandButtons={_commandButtons}
         onKeyDown={this._hKeyDown}
         onClose={onClose}
      >
        <form>
          <A.SecretField
             rootStyle={TS.INPUT_ROOT}
             //ref={this._refInputIex}
             caption="API Key (35 Symbols)"
             maxLength={35}
             errorMsg="35 symbols must be"
             //onTest={_onTestIexApi}
             //onEnter={setIexKey}
          />
        </form>
      </A.ModalDialog>
    );
  }
}

export default withTheme(ApiKeyDialog)
