import ItemHeader from './ItemHeader';
import ShowHide from '../zhn/ShowHide';

import {
  CL_ITEM_HEADER,
  CL_ITEM_DESCR,
  S_SVG_CLOSE
} from './Item.Style';

const ItemType1 = (props) => (
    <>
      <ItemHeader
        refEl={props.refEl}
        className={CL_ITEM_HEADER}
        btCloseStyle={S_SVG_CLOSE}
        title={props.title}
        onKeyDown={props.onKeyDown}
        onClick={props.onClick}
        onToggle={props.onToggle}
        onClose={props.onClose}
      />
      <ShowHide
         isShow={props.isShowDescr}
         withoutAnimation={true}
         className={CL_ITEM_DESCR}
      >
         {props.children}
      </ShowHide>
    </>
);

export default ItemType1
