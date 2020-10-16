import { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import Actions from '../../flux/actions/ComponentActions'

import A from '../Comp'
import CardApiKeys from './CardApiKeys'
import CardUiTheme from './CardUiTheme'

const S = {
  MODAL: {
    position: 'static',
    width: 340,
    height: 410,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  },

  TABS: {
    marginLeft: 24,
    textAlign: 'left'
  },
  TAB_SELECTED: {
    color: 'black'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 315
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  },
  SELECT_WIDTH: {
    width: 300
  },
  INPUT_WIDTH: {
    width: 315,
    marginLeft: 8
  }
};

const MIN_FS = 15
const MAX_FS = 18

const _isNumber = n => typeof n === 'number'
 && (n-n===0);
const _inRange = (min, max, v) => _isNumber(v)
 && v>=min && v<=max;

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

  _selectFontSize = (item) => {
    const { value } = item || {}
    if ( _inRange(MIN_FS, MAX_FS, value)) {
      document.documentElement.style.fontSize = `${value}px`
    }
  }

  render(){
    const { isShow, theme, data, onClose } = this.props
    , TS = theme.createStyle(styleConfig)
    , _TS = JSON.parse(JSON.stringify(TS));
    Object.assign(_TS.SELECT.ROOT, S.SELECT_WIDTH)
    return (
        <A.ModalDialog
           style={{ ...S.MODAL, ...TS.R_DIALOG }}
           divBtStyle={S.DIV_BT}
           styleCaption={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="User Settings"
           isWithButton={false}
           isShow={isShow}
           onKeyDown={this._handleKeyDown}
           onClose={onClose}
        >
          <A.TabPane
             width="100%"
             tabsStyle={S.TABS}
             selectedStyle={S.TAB_SELECTED}
             isShow={isShow}
          >
             <A.Tab title="API Keys">
                <CardApiKeys
                  ref={this._refInput}
                  style={S.CARD_ROOT}
                  fieldStyle={{...TS.INPUT_ROOT, ...S.INPUT_WIDTH}}
                  buttonsStyle={S.CARD_BUTTONS}
                  TS={TS}
                  data={data}
                  onClose={onClose}
                />
             </A.Tab>
             <A.Tab title="UI Theme">
                <CardUiTheme
                  style={S.CARD_ROOT}
                  buttonsStyle={S.CARD_BUTTONS}
                  TS={_TS}
                  onSetTheme={this._selectTheme}
                  onSetFontSize={this._selectFontSize}
                  onClose={onClose}
                />
             </A.Tab>
           </A.TabPane>
       </A.ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
