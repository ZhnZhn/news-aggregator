import { bindTo } from '../uiApi';

import {
  useDialogItems,
  showDialog,
  cleanDialogItems
} from '../../flux/compStore';

import { memoTrue } from '../hoc/memoFn';

import { HAS_TOUCH_EVENTS } from '../has';
import { DP_BOTTOM_LEFT } from '../DP';
import { HK_CLEAR_HOT_BAR } from '../hotkeys/hotkeys';

import { getCaption } from '../dialogs/DialogFn';

import ItemStack from '../zhn-atoms/ItemStack';
import FlatButton from '../zhn-bt/FlatButton';

const _isArr = Array.isArray;

const CL_BT_HOT = "bt-hot"
, S_ROOT = { display: 'inline-block' }
, S_BT_CL = { color: '#f44336' }
, DF_BT_CAPTION = "DIA";

const _crBtProps = (
  index,
  caption
) => {
   const _hotKey = HAS_TOUCH_EVENTS
     ? ''
     : String(index+1);
   return {
     ariaLabel: caption,
     dataPos: DP_BOTTOM_LEFT,
     hotKey: _hotKey || void 0,
     caption: _hotKey + (caption || DF_BT_CAPTION).slice(0, 3)
   };
};

const _crHotBtItem = (
   conf,
   index
 ) => (
   <FlatButton
     {..._crBtProps(index, getCaption(conf))}
     key={conf.type}
     timeout={0}
     className={CL_BT_HOT}
     onClick={bindTo(showDialog, conf)}
   />
);

const HotBar = () => {
  const hotButtons = useDialogItems();
  return _isArr(hotButtons)
    ? (
      <div style={S_ROOT}>
        <ItemStack
           items={hotButtons}
           crItem={_crHotBtItem}
        />
        {hotButtons.length !== 0 && <FlatButton
           key="BT_CLEAN"
           ariaLabel="Clean Hot Bar"
           dataPos={DP_BOTTOM_LEFT}
           hotKey={HAS_TOUCH_EVENTS ? void 0: HK_CLEAR_HOT_BAR}         
           timeout={0}
           style={S_BT_CL}
           caption="CL"
           onClick={cleanDialogItems}
        />}
      </div>
    ) : null;
};

export default memoTrue(HotBar)
