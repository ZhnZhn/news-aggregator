import { memo } from '../uiApi';

const _isArr = Array.isArray;

const ItemStack = memo(({
  items,
  crItem,
  ...restProps
}) => {
  if (!_isArr(items)) return null;
  return items
    .map((item, index) => crItem(item, index, restProps));
});

export default ItemStack
