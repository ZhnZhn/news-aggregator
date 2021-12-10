import { memo, useContext, useCallback } from 'react';
//import PropTypes from 'prop-types'

import ThemeContext from '../hooks/ThemeContext';
import styleConfig from '../dialogs/Dialog.Style';

import Actions from '../../flux/actions/ComponentActions';

import A from '../Comp';
import CardApiKeys from './CardApiKeys';
import CardUiTheme from './CardUiTheme';

const _assign = Object.assign
, S_MODAL = {
  position: 'static',
  width: 340,
  height: 410,
  margin: '70px auto 0px'
}
, S_DIV_BT = {
  margin: '26px 0 4px 0'
}
, S_TABS = {
  marginLeft: 24,
  textAlign: 'left'
}
, S_CARD_ROOT = {
  position: 'relative',
  height: 315
}
, S_CARD_BUTTONS = {
  position: 'absolute',
  right: 10,
  bottom: 4,
  cursor: 'default'
}
, S_SELECT_WIDTH = {
  width: 300
}
, S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
}
, MIN_FS = 15
, MAX_FS = 18;

const _isNumber = n => typeof n === 'number'
 && (n-n===0);
const _inRange = (min, max, v) => _isNumber(v)
 && v>=min && v<=max;

 const _selectFontSize = (item) => {
   const { value } = item || {}
   if (_inRange(MIN_FS, MAX_FS, value)) {
     document.documentElement.style.fontSize = `${value}px`
   }
 };

const _isNotShouldUpdate = (prevProps, nextProps) =>
  prevProps.isShow === nextProps.isShow

const SettingsDialog = memo(({
  isShow,
  data,
  onClose
}) => {
  const theme = useContext(ThemeContext)
  , _selectTheme = useCallback(item => {
    const { value } = item || {};
    if (value && theme.getThemeName() !== value) {
      theme.setThemeName(value)
      Actions.changeTheme(value)
    }
  }, [theme])
  , TS = theme.createStyle(styleConfig)
  , _TS = JSON.parse(JSON.stringify(TS));

  _assign(_TS.SELECT.ROOT, S_SELECT_WIDTH)

  return (
    <A.ModalDialog
       style={{...S_MODAL, ...TS.R_DIALOG }}
       divBtStyle={S_DIV_BT}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="User Settings"
       isShow={isShow}
       onClose={onClose}
    >
      <A.TabPane
         width="100%"
         tabsStyle={S_TABS}
         isShow={isShow}
      >
         <A.Tab title="API Keys">
            <CardApiKeys
              style={S_CARD_ROOT}
              fieldStyle={{...TS.INPUT_ROOT, ...S_INPUT_WIDTH}}
              buttonsStyle={S_CARD_BUTTONS}
              TS={TS}
              data={data}
              onClose={onClose}
            />
         </A.Tab>
         <A.Tab title="UI Theme">
            <CardUiTheme
              style={S_CARD_ROOT}
              buttonsStyle={S_CARD_BUTTONS}
              TS={_TS}
              onSetTheme={_selectTheme}
              onSetFontSize={_selectFontSize}
              onClose={onClose}
            />
         </A.Tab>
       </A.TabPane>
   </A.ModalDialog>
  );
}, _isNotShouldUpdate);

/*
SettingsDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    setNewsKey: PropTypes.func,
    setWebzKey: PropTypes.func,
  }),
  onClose: PropTypes.func
}
*/

export default SettingsDialog
