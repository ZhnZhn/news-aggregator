//import PropTypes from 'prop-types'
import {
  useRef,
  useCallback
} from '../uiApi';

import {
  memoIsShow
} from '../hoc/memoFn';

import {
  S_BROWSER_CAPTION,
  S_INPUT_ROOT,
  S_BT_RAISED,
  crInputSelectStyle
} from '../dialogs/Dialog.Style';

import A from '../Comp';
import CardApiKeys from './CardApiKeys';
import CardUiTheme from './CardUiTheme';

const S_MODAL = {
  position: 'static',
  width: 340,
  maxHeight: 460,
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
  maxHeight: 370,
}
, S_CARD_API = {
  ...S_CARD_ROOT,
  overflowY: 'auto'
}
, S_CARD_BUTTONS = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  margin: '10px 12px 10px 0'
}
, S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
}
, S_TEXT_FIELD = {
  ...S_INPUT_ROOT,
  ...S_INPUT_WIDTH
}
, INPUT_SELECT_WIDTH = 306;

const INPUT_SELECT_STYLE = crInputSelectStyle(
  INPUT_SELECT_WIDTH
);

const SettingsDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const _refFocusLast = useRef()
  , _setFocusLastRef = useCallback(el => {
    _refFocusLast.current = el
  }, []);

  return (
    <A.ModalDialog
       caption="User Settings"
       style={S_MODAL}
       divBtStyle={S_DIV_BT}
       captionStyle={S_BROWSER_CAPTION}
       refFocusLast={_refFocusLast}
       isShow={isShow}
       onClose={onClose}
    >
      <A.TabPane
         id="sd"
         width="100%"
         tabsStyle={S_TABS}
         isShow={isShow}
      >
         <A.Tab title="API Keys">
            <CardApiKeys
              style={S_CARD_API}
              fieldStyle={S_TEXT_FIELD}
              buttonsStyle={S_CARD_BUTTONS}
              btStyle={S_BT_RAISED}
              data={data}
              setRefLast={_setFocusLastRef}
            />
         </A.Tab>
         <A.Tab title="UI Theme">
            <CardUiTheme
              style={S_CARD_ROOT}
              selectStyle={INPUT_SELECT_STYLE}
              buttonsStyle={S_CARD_BUTTONS}
              btStyle={S_BT_RAISED}
              setRefLast={_setFocusLastRef}
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
