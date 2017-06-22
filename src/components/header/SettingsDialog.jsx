import React, { Component, PropTypes } from 'react'

import safeFn from '../../utils/safeFn'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import SecretField from '../zhn-m-input/SecretField'
import RaisedButton from '../zhn-atoms/RaisedButton'

const S = {
  MODAL : {
    position : 'static',
    width: '320px',
    height: '250px',
    margin: '70px auto 0px'
  }
};

const SET_NEWS_KEY = 'setNewsKey';
const SET_WEBHOSE_KEY = 'setWebhoseKey';

const STR_EMPTY = '';
const _onTestLengthOrEmpty = (length) => (str) => {
  if ( str.length === length || str === STR_EMPTY) {
    return true;
  } else {
    return false;
  }
}

const _onTestNewsApi = _onTestLengthOrEmpty(32);
const _onTestWebhose = _onTestLengthOrEmpty(36);

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

  _handleSet = () => {
    const { data, onClose } = this.props
        , setNewsKey = safeFn(data, SET_NEWS_KEY)
        , setWebhoseKey = safeFn(data, SET_WEBHOSE_KEY);
    setNewsKey(this.inputNews.getValue())
    setWebhoseKey(this.inputWebhose.getValue())
    onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Set"
        isPrimary={true}
        onClick={this._handleSet}
      />
    ];
  }

  render(){
    const { isShow, theme, onClose } = this.props
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
           <SecretField
              rootStyle={TS.INPUT_ROOT}
              ref={comp => this.inputNews = comp}
              caption="NewsApi API Key (32 Symbols)"
              maxLength={32}
              errorMsg="32 symbols must be"
              onTest={_onTestNewsApi}
           />
           <SecretField
              rootStyle={TS.INPUT_ROOT}
              ref={comp => this.inputWebhose = comp}
              caption="Webhose API Key (36 Symbols)"
              maxLength={36}
              errorMsg="36 symbols must be"
              onTest={_onTestWebhose}
           />
       </ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
