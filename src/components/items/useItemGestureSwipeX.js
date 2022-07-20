import { useCallback } from '../uiApi';

const DX_REMOVE_UNDER = 90
, DX_REMOVE_ITEM = 40;

/*eslint-disable react-hooks/exhaustive-deps */
const useItemGestureSwipeX = (
  item,
  onRemoveUnder,
  hClose
) => useCallback(dX => {
  if (dX > DX_REMOVE_UNDER) {
    onRemoveUnder(item)
    return false;
  } else if (dX > DX_REMOVE_ITEM){
    hClose()
    return false;
  }
  return true;
}, [])
// _hClose, item, onRemoveItem
/*eslint-enable react-hooks/exhaustive-deps */

export default useItemGestureSwipeX
