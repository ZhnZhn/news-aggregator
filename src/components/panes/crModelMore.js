
const CL_ROW = 'menu-more__item not-selected';

const crModelMore = ({
  onMinWidth, onInitWidth,
  onPlusWidth, onMinusWidth,
  onRemoveItems
}) => {
  return {
    titleCl: CL_ROW,
    pageWidth: 180,
    maxPages: 2,
    p0: [
      {
        id: 'p1',
        type: 'sub',
        cn: CL_ROW,
        name: 'Resize'
      },{
        cn: CL_ROW,
        name: 'Remove All Items',
        onClick: onRemoveItems,
        isClose: true
      }
    ],
    p1: [
      {
        cn: CL_ROW,
        name: 'to MinWidth',
        onClick: onMinWidth
      },{
        cn: CL_ROW,
        name: 'to InitWidth',
        onClick: onInitWidth
      },{
        cn: CL_ROW,
        name: '+10px to Width',
        onClick: onPlusWidth
      },{
        cn: CL_ROW,
        name: '-10px to Width',
        onClick: onMinusWidth
      }
    ]
  };
}

export default crModelMore
