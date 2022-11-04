//import PropTypes from 'prop-types'
import {
  useContext,
  useCallback
} from '../uiApi';

import memoIsShow from '../hoc/memoIsShow';
import ThemeContext from '../hooks/ThemeContext';
import styleConfig from '../dialogs/Dialog.Style';

import { ComponentActions } from '../../flux/actions/ComponentActions';

import A from '../Comp';
import CardApiKeys from './CardApiKeys';
import CardUiTheme from './CardUiTheme';

const _assign = Object.assign
, S_MODAL = {
  position: 'static',
  width: 340,
  height: 460,
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
  height: 370,
  overflowY: 'auto'
}
, S_CARD_BUTTONS = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  margin: '10px 10px 10px 0'
}
, S_SELECT_WIDTH = {
  width: 300
}
, S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
};

const SettingsDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const theme = useContext(ThemeContext)
  , _selectTheme = useCallback(item => {
    const value = (item || [])[1];
    if (value && theme.getThemeName() !== value) {
      theme.setThemeName(value)
      ComponentActions.changeTheme(value)
    }
  }, [theme])
  , TS = theme.createStyle(styleConfig)
  , _TS = JSON.parse(JSON.stringify(TS));

  _assign(_TS.SELECT.ROOT, S_SELECT_WIDTH)

  return (
    <A.ModalDialog
       style={{...S_MODAL, ...TS.R_DIALOG}}
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
            />
         </A.Tab>
         <A.Tab title="UI Theme">
            <CardUiTheme
              style={S_CARD_ROOT}
              buttonsStyle={S_CARD_BUTTONS}
              TS={_TS}
              onSetTheme={_selectTheme}
              onClose={onClose}
            />
         </A.Tab>
       </A.TabPane>
   </A.ModalDialog>
  );
});

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
