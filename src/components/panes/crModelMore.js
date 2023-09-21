import { CL_MENU_MORE_ITEM } from '../crStyle';

const crModelMore = ({
  onMinWidth,
  onInitWidth,
  onPlusWidth,
  onMinusWidth,
  onRemoveItems
}) => {
  return {
    titleCl: CL_MENU_MORE_ITEM,
    pageWidth: 196,
    maxPages: 2,
    p0: [
      {
        id: 'p1',
        type: 'sub',
        cn: CL_MENU_MORE_ITEM,
        name: 'Resize'
      },{
        cn: CL_MENU_MORE_ITEM,
        name: 'Remove Items',
        onClick: onRemoveItems,
        isClose: true
      }
    ],
    p1: [
      {
        cn: CL_MENU_MORE_ITEM,
        name: 'to MinWidth',
        onClick: onMinWidth
      },{
        cn: CL_MENU_MORE_ITEM,
        name: 'to InitWidth',
        onClick: onInitWidth
      },{
        cn: CL_MENU_MORE_ITEM,
        name: '+10px to Width',
        onClick: onPlusWidth
      },{
        cn: CL_MENU_MORE_ITEM,
        name: '-10px to Width',
        onClick: onMinusWidth
      }
    ]
  };
}

export default crModelMore
