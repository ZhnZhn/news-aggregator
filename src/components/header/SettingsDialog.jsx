import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import safeFn from '../../utils/safeFn'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import SecretField from '../zhn-m-input/SecretField'
import InputSelect from '../zhn-m-input/InputSelect'
import RaisedButton from '../zhn-atoms/RaisedButton'

const S = {
  MODAL : {
    position : 'static',
    width: '320px',
    height: '300px',
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: '26px',
    marginBottom: '4px'
  }
};

const SET_NEWS_KEY = 'setNewsKey';
const SET_WEBHOSE_KEY = 'setWebhoseKey';

const DF_THEME = { caption: "Dark", value: "GREY" };
const _themeOptions = [
  { caption: "Dark", value: "GREY" },
  { caption: "Light", value: "WHITE" },
  { caption: "Sand", value: "SAND" }
];

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
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      setNewsKey: PropTypes.func,
      setWebhoseKey: PropTypes.func,
    }),
    onClose: PropTypes.func
  }
  */
  constructor(props){
    super()
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
      && nextProps.isShow === this.props.isShow
    ) {
      return false;
    }
    return true;
  }

  _handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.props.onClose()
    }
  }

  _handleSet = () => {
    const { data, onClose } = this.props
        , setNewsKey = safeFn(data, SET_NEWS_KEY)
        , setWebhoseKey = safeFn(data, SET_WEBHOSE_KEY);
    setNewsKey(this.inputNews.getValue())
    setWebhoseKey(this.inputWebhose.getValue())
    onClose()
  }

  _selectTheme = (item) => {
    const { theme } = this.props;
    if (
        item &&
        theme.getThemeName() !== item.value
    ) {
      theme.setThemeName(item.value)
      Actions.changeTheme(item.value)
      this.forceUpdate()
    }
  }

  _createCommandButtons = (S) => {
    return [
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Set & Close"
        onClick={this._handleSet}
      />
    ];
  }

  _refInputNews = comp => this.inputNews = comp
  _refInputWebhose = comp => this.inputWebhose = comp

  render(){
    const { isShow, theme, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , _commandButtons = this._createCommandButtons(TS.BT);

    return (
        <ModalDialog
           style={{ ...S.MODAL, ...TS.R_DIALOG }}
           divBtStyle={S.DIV_BT}
           styleCaption={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="User Settings"
           isShow={isShow}
           isClosePrimary={true}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDown}
           onClose={onClose}
        >
           <SecretField
              rootStyle={TS.INPUT_ROOT}
              ref={this._refInputNews}
              caption="NewsApi API Key (32 Symbols)"
              maxLength={32}
              errorMsg="32 symbols must be"
              onTest={_onTestNewsApi}
           />
           <SecretField
              rootStyle={TS.INPUT_ROOT}
              ref={this._refInputWebhose}
              caption="Webhose API Key (36 Symbols)"
              maxLength={36}
              errorMsg="36 symbols must be"
              onTest={_onTestWebhose}
           />
           <InputSelect
             styleConfig={TS.SELECT}
             caption="Theme (Default: Dark)"
             initItem={DF_THEME}
             options={_themeOptions}
             onSelect={this._selectTheme}
           />
       </ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
