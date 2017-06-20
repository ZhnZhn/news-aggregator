import React, { Component, PropTypes } from 'react'

import safeFn from '../../utils/safeFn'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import RowInputSecret from '../dialogs/RowInputSecret'
import RaisedButton from '../zhn-atoms/RaisedButton'

const S = {
  MODAL : {
    position : 'static',
    width: '380px',
    height: '180px',
    margin: '70px auto 0px'
  }
};

const SET_NEWS_KEY = 'setNewsKey';
const SET_WEBHOSE_KEY = 'setWebhoseKey';

class SettingsDialog extends Component {
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      setNewsKey: PropTypes.func,
      setWebhoseKey: PropTypes.func,
    }),
    onClose: PropTypes.func
  }

  constructor(props){
    super()
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _regInput = (propName, inputComp) => {
    this[propName] = inputComp
  }

  _handleSet = () => {
    const { data, onClose } = this.props
        , setNewsKey = safeFn(data, SET_NEWS_KEY)
        , setWebhoseKey = safeFn(data, SET_WEBHOSE_KEY);
    setNewsKey(this.inputComp.getValue())
    setWebhoseKey(this.inputWebhose.getValue())
    onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Set"
        onClick={this._handleSet}
      />
    ];
  }

  render(){
    const {
            isShow,
            theme,
            onClose
          } = this.props
          , TS = theme.createStyle(styleConfig)
          , _commandButtons = this._createCommandButtons(TS.BT);

    return (
         <ModalDialog
            style={{ ...S.MODAL, ...TS.R_DIALOG }}
            styleCaption={TS.BROWSER_CAPTION}
            styleButton={TS.BT}
            caption="User Settings"
            isShow={isShow}
            commandButtons={_commandButtons}
            onClose={onClose}
         >
           <RowInputSecret
             accessKey="n"
             caption="News:"
             placeholder="News API Key, 32 Symbols"
             onReg={this._regInput.bind(null, 'inputComp')}
           />
           <RowInputSecret
             accessKey="w"
             caption="Webhose:"
             placeholder="Webhose API Key, 36 Symbols"
             maxLength="36"
             onReg={this._regInput.bind(null, 'inputWebhose')}
           />
         </ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
