import {
  isFn,
  bindTo,
  safeMap
} from '../uiApi';

import MenuItem from '../zhn/MenuItem';

const SUB_MENU = 'sub';

const S_ITEM = {
  position: 'relative'
}
, S_NEXT_PAGE = {
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  right: 4,
  color: 'inherit',
  padding: '1px 16px 1px 0px',
  fontWeight: 'bold'
};

const _fClick = (
  isClose,
  onClick,
  onClose
) => isFn(onClick)
  ? isClose
      ? () => { onClick(); onClose() }
      : onClick
  : void 0;

const MenuItemList = ({
  getFocusRef,
  items,
  itemCl,
  pageNumber,
  onNextPage,
  onClose
}) => (
  <>
   {safeMap(items, ({
     cn,
     name,
     type,
     id,
     isClose,
     onClick
   }, index) => {
     const [
       _onClick,
       _nextPageArrowEl
     ] = type === SUB_MENU
       ? [
           bindTo(onNextPage, id, name, pageNumber),
           <span style={S_NEXT_PAGE}>></span>
         ]
       : [
           _fClick(isClose, onClick, onClose),
           null
         ];
     return (
       <MenuItem
         key={name}
         ref={getFocusRef(index)}
         className={cn || itemCl}
         style={S_ITEM}
         onClick={_onClick}
       >
         <span>{name}</span>
         {_nextPageArrowEl}
       </MenuItem>
     );
    })}
  </>
);

export default MenuItemList
