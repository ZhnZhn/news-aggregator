import { memo } from '../uiApi';

const LABEL_WIDTH = 140
, MAX_BAR_WIDTH = 200
, S_TEXT_ELLIPSIS = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
}
, S_FONT = {
  fontSize: '1rem',
  fontWeight: 'bold'
}
, S_ROW = {
  display: 'flex'
}
, S_LABEL = {
  ...S_FONT,
  ...S_TEXT_ELLIPSIS,
  display: 'inline-block',
  width: LABEL_WIDTH,
  paddingRight: 8,
  textAlign: 'right'
}
, S_COUNT = {
  ...S_FONT,
  paddingLeft: 6
};

const _crBarStyle = (
  color,
  maxValue,
  value
) => ({
  display: 'inline-block',
  height: '1.2rem',
  width: (MAX_BAR_WIDTH*value)/maxValue,
  background: color
});

const BarChart = memo(({
  style,
  items,
  maxValue,
  color='darkcyan'
}) => (
 <div style={style}>
   {
     items.map(item => (
       <div style={S_ROW} key={item[0]}>
         <span style={S_LABEL}>{item[0]}</span>
         <span style={_crBarStyle(color, maxValue, item[1])}/>
         <span style={S_COUNT}>{item[1]}</span>
       </div>
     ))
   }
 </div>
));

export default BarChart
