import {
  useState,
  useMemo,
  useEffect
} from '../uiApi';

import useTheme from '../hooks/useTheme';
import styleConfig from './Article.Style';

import crStyle from '../zhn-utils/crStyle';
import ItemHeader from './ItemHeader';
import ShowHide from '../zhn-atoms/ShowHide';
import BarChart from '../zhn-charts/BarChart';

import {
  CL_ITEM_HEADER,
  S_ITEM,
  S_CAPTION,
  S_CAPTION_OPEN,
  S_SVG_CLOSE,
  S_NONE
} from './Item.Style';

const S_SHOW_HIDE = {
  padding: '8px 0',
  lineHeight: 1
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
  const [
    isShow,
    setIsShow
  ] = useState(false)
  , [
    _closeItem,
    _hToggle,
    _hHide
  ] = useMemo(() => [
    () => setIsClosed(true),
    () => setIsShow(is => !is),
    () => setIsShow(false)
  ], [])
  , TS = useTheme(styleConfig);

  useEffect(() => {
    if (_isArr(categoryBars)) {
      setIsClosed(false)
    }
  }, [categoryBars])

  const _style = crStyle([isClosed, S_NONE])
  , _captionStyle = crStyle(
    S_CAPTION,
    [isShow, S_CAPTION_OPEN]
  );

  return _isArr(categoryBars) ? (
    <div style={{...S_ITEM, ..._style}}>
       <ItemHeader
         className={CL_ITEM_HEADER}
         style={TS.HEADER}
         captionStyle={_captionStyle}
         btCloseStyle={S_SVG_CLOSE}
         title={`Categories Bar Chart (${numberOfItems})`}
         isShow={isShow}
         onClick={_hToggle}
         onClose={_closeItem}
         onHide={_hHide}
       />
        <ShowHide
           style={S_SHOW_HIDE}
           isShow={isShow}
        >
          <BarChart
            items={categoryBars}
            maxValue={maxValue}
          />
       </ShowHide>
    </div>
  ) : null;
}

export default ItemBarChart
