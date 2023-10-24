import { bindTo } from '../uiApi';

import {
  useDialogItems,
  showDialog,
  cleanDialogItems
} from '../../flux/compStore';

import { memoTrue } from '../hoc/memoFn';

import { HAS_TOUCH_EVENTS } from '../has';

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
     hotKey: _hotKey || void 0,
     caption: _hotKey + (caption || DF_BT_CAPTION).slice(0, 3),
     title: caption
   };
};

const _crHotBtItem = (
   conf,
   index
 ) => (
   <FlatButton
     {..._crBtProps(index, conf.type)}
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
           timeout={0}
           style={S_BT_CL}
           caption="CL"
           title="Clean Hot Bar"
           onClick={cleanDialogItems}
        />}
      </div>
    ) : null;
};

export default memoTrue(HotBar)
