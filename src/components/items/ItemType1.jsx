import { forwardRef } from '../uiApi';

import ItemHeader from './ItemHeader';
import ShowHide from '../zhn-atoms/ShowHide';

import {
  CL_ITEM_HEADER,
  CL_ITEM_DESCR,
  S_CAPTION,
  S_SVG_CLOSE
} from './Item.Style';

const ItemType1 = forwardRef(({
  isShowDescr,
  title,
  children,
  onKeyDown,
  onClick,
  onToggle,
  onClose
}, ref) => (
    <>
      <ItemHeader
        ref={ref}
        className={CL_ITEM_HEADER}
        captionStyle={S_CAPTION}
        btCloseStyle={S_SVG_CLOSE}
        title={title}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onToggle={onToggle}
        onClose={onClose}
      />
      <ShowHide
         isShow={isShowDescr}
         withoutAnimation={true}
         className={CL_ITEM_DESCR}
      >
         {children}
      </ShowHide>
    </>
));

export default ItemType1
