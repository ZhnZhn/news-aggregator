import { CL_MENU_MORE_ITEM } from '../crStyle';

const _crMenuItem = (
  name,
  onClick,
  isClose
) => ({
  cn: CL_MENU_MORE_ITEM,
  name,
  onClick,
  isClose: !!isClose
});

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
      }
      , _crMenuItem('Remove Items', onRemoveItems, true)
    ],
    p1: [
      _crMenuItem('to MinWidth', onMinWidth),
      _crMenuItem('to InitWidth', onInitWidth),
      _crMenuItem('+10px to Width', onPlusWidth),
      _crMenuItem('-10px to Width', onMinusWidth)
    ]
  };
}

export default crModelMore
