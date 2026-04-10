import { isArr } from '../../utils/isTypeFn';
import { bindTo } from '../../utils/bindTo';
import { joinBy } from '../../utils/joinBy';

import {
  useDialogItems,
  showDialog,
  cleanDialogItems
} from '../../flux/compStore';

import { memoTrue } from '../hoc/memoFn';

import { S_INLINE_BLOCK } from '../crStyle';
import { HAS_TOUCH_EVENTS } from '../has';
import { DP_BOTTOM_LEFT } from '../DP';
import { HK_CLEAR_HOT_BAR } from '../hotkeys/hotkeys';

import {
  getCaption,
  getShortCaption
} from '../dialogs/DialogFn';

import ItemStack from '../zhn/ItemStack';
import FlatButton from '../zhn-bt/FlatButton';

const CL_BT_HOT = "bt-hot"
, DF_BT_CAPTION = "DLG";

const _crBtProps = (
  index,
  conf
) => {
   const caption = getCaption(conf)
   , shortCaption = getShortCaption(conf)
   , _hotKey = HAS_TOUCH_EVENTS
     ? ''
     : String(index+1);
   return {
     ariaLabel: caption,
     dataPos: DP_BOTTOM_LEFT,
     hotKey: _hotKey || void 0,
     caption: joinBy(_hotKey, shortCaption || DF_BT_CAPTION)
   };
};

const _crHotBtItem = (
   conf,
   index
 ) => (
   <FlatButton
     key={conf.type}
     {..._crBtProps(index, conf)}
     timeout={0}
     className={CL_BT_HOT}
     onClick={bindTo(showDialog, conf)}
   />
);

const HotBar = () => {
  const hotButtons = useDialogItems();
  return isArr(hotButtons)
    ? (
      <div style={S_INLINE_BLOCK}>
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
           caption="CL"
           onClick={cleanDialogItems}
        />}
      </div>
    ) : null;
};

export default memoTrue(HotBar)
