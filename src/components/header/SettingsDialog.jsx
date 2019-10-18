import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import safeFn from '../../utils/safeFn'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'

import A from '../Comp'

const S = {
  MODAL : {
    position : 'static',
    width: 320,
    height: 370,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  }
};

const SET_IEX_KEY = 'setIexKey';
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

const _onTestIexApi = _onTestLengthOrEmpty(35);
const _onTestNewsApi = _onTestLengthOrEmpty(32);
const _onTestWebhose = _onTestLengthOrEmpty(36);

const _getKeySetters = (data) => {
   return {
     setIexKey: safeFn(data, SET_IEX_KEY),
     setNewsKey: safeFn(data, SET_NEWS_KEY),
     setWebhoseKey: safeFn(data, SET_WEBHOSE_KEY)
   };
};

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
    , { setIexKey,
        setNewsKey,
        setWebhoseKey
    } = _getKeySetters(data);
    setIexKey(this.inputIex.getValue())
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
      <A.RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Set All & Close"
        onClick={this._handleSet}
      />
    ];
  }

  _refInputIex = comp => this.inputIex = comp
  _refInputNews = comp => this.inputNews = comp
  _refInputWebhose = comp => this.inputWebhose = comp

  render(){
    const { isShow, theme, data, onClose } = this.props
    , { setIexKey,
        setNewsKey,
        setWebhoseKey
    } = _getKeySetters(data)
    , TS = theme.createStyle(styleConfig)
    , _commandButtons = this._createCommandButtons(TS.BT);

    return (
        <A.ModalDialog
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
           <form>
             <A.SecretField
                rootStyle={TS.INPUT_ROOT}
                ref={this._refInputIex}
                caption="IEX Cloud API Key (35 Symbols)"
                maxLength={35}
                errorMsg="35 symbols must be"
                onTest={_onTestIexApi}
                onEnter={setIexKey}
             />
           </form>
           <form>
             <A.SecretField
                rootStyle={TS.INPUT_ROOT}
                ref={this._refInputNews}
                caption="NewsApi API Key (32 Symbols)"
                maxLength={32}
                errorMsg="32 symbols must be"
                onTest={_onTestNewsApi}
                onEnter={setNewsKey}
             />
           </form>
           <form>
             <A.SecretField
                rootStyle={TS.INPUT_ROOT}
                ref={this._refInputWebhose}
                caption="Webhose API Key (36 Symbols)"
                maxLength={36}
                errorMsg="36 symbols must be"
                onTest={_onTestWebhose}
                onEnter={setWebhoseKey}
             />
           </form>
           <A.InputSelect
             styleConfig={TS.SELECT}
             caption="Theme (Default: Dark)"
             initItem={DF_THEME}
             options={_themeOptions}
             onSelect={this._selectTheme}
           />
       </A.ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
