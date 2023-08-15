import {
  useState,
  useMemo,
  useEffect
} from '../uiApi';

import { crStyle2 } from '../crStyle';
import useItemType1 from './useItemType1';

import ItemType1 from './ItemType1';
import BarChart from '../zhn-charts/BarChart';

import {
  S_ITEM,
  S_NONE
} from './Item.Style';

const S_BAR_CHART = {
  padding: '6px 0'
};

const _isArr = Array.isArray;

const ItemBarChart = ({
  categoryBars,
  maxValue,
  numberOfItems
}) => {
  const [
    isClosed,
    setIsClosed
  ] = useState(false)
  , _closeItem = useMemo(() =>
      () => setIsClosed(true)
  , [])
  , [
    isShowDescr,
    _hToggle
  ] = useItemType1();

  useEffect(() => {
    if (_isArr(categoryBars)) {
      setIsClosed(false)
    }
  }, [categoryBars])

  const _style = crStyle2(
    S_ITEM,
    isClosed && S_NONE
  );

  return _isArr(categoryBars) ? (
    <div style={_style}>
       <ItemType1
         title={`Categories Bar Chart (${numberOfItems})`}
         isShowDescr={isShowDescr}
         onClick={_hToggle}
         onToggle={_hToggle}
         onClose={_closeItem}
       >
         <BarChart
           style={S_BAR_CHART}
           items={categoryBars}
           maxValue={maxValue}
         />
       </ItemType1>
    </div>
  ) : null;
};

export default ItemBarChart
