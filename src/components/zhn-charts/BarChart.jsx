import { memo } from '../uiApi';

const S_FONT = {
  fontSize: '1rem',
  fontWeight: 'bold',
  verticalAlign: 'top'
}
const S_LABEL = {
  ...S_FONT,
  display: 'inline-block',
  width: 140,
  paddingRight: 8,
  textAlign: 'right'
}
, S_COUNT = {
  ...S_FONT,
  paddingLeft: 6,
};

const _crBarStyle = (
  color,
  maxValue,
  value
) => {
  return {
    display: 'inline-block',
    width: (200*value)/maxValue,
    height: '1rem',
    background: color
  };
};

const BarChart = memo(({
  items,
  maxValue,
  color='darkcyan'
}) => {
  return (
    <>
    {
      items.map(item => (
        <div key={item[0]}>
          <span style={S_LABEL}>{item[0]}</span>
          <span style={_crBarStyle(color, maxValue, item[1])}/>
          <span style={S_COUNT}>{item[1]}</span>
        </div>
      ))
    }
    </>
  )
});

export default BarChart
