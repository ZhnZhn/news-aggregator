import { isArr } from '../../utils/isTypeFn';
import { bindTo } from '../../utils/bindTo';
import { joinBy } from '../../utils/joinBy';

import {
  useDialogItems,
  showDialog,
  removeDialogItems
} from '../../flux/compStore';

import { memoTrue } from '../hoc/memoFn';

import {
  S_INLINE_BLOCK,
  S_COLOR_BLACK
} from '../crStyle';
import { HAS_TOUCH_EVENTS } from '../has';
import { DP_BOTTOM_LEFT } from '../DP';
import { HK_CLEAR_HOT_BAR } from '../hotkeys/hotkeys';

import {
  getCaption,
  getShortCaption
} from '../dialogs/DialogFn';

import ItemStack from '../zhn/ItemStack';
import FlatButton from '../zhn-bt/FlatButton';
import SvgDelete from '../zhn/svg/SvgDelete';

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

const _crMenuButton = (
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

const QuickMenu = (props) => {
  const dialogItems = useDialogItems();
  return isArr(dialogItems) && dialogItems.length !== 0
    ? (
      <div style={S_INLINE_BLOCK}>
        <span style={S_COLOR_BLACK}>|</span>
        <ItemStack
          items={dialogItems}
          crItem={_crMenuButton}
        />
        <FlatButton
          key="BT_CLEAR"
          ariaLabel="Clear quick menu"
          dataPos={DP_BOTTOM_LEFT}
          hotKey={HAS_TOUCH_EVENTS ? void 0: HK_CLEAR_HOT_BAR}
          timeout={0}
          onClick={removeDialogItems}
        >
          <SvgDelete style={props.iconStyle} />
        </FlatButton>
      </div>
    ) : null;
};

export default memoTrue(QuickMenu)
