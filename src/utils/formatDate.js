import { isNumber } from './isTypeFn';

const PERIODS = [
  ['just now', 999],
  ['sec', 1000],
  ['min', 60*1000],
  ['hour', 3600*1000],
  ['day', 24*3600*1000],
  ['week', 7*24*3600*1000],
  ['month', 30*24*3600*1000],
  ['year', 365*24*3600*1000]
]
, PERIOD_LENGTH = PERIODS.length
, PERIOD_LAST_INDEX = PERIOD_LENGTH - 1;

const _crTimeAgo = (
  diff,
  i
) => {
  const [periodStr, periodMsl] = PERIODS[i]
  , v = Math.round(diff / periodMsl);
  return `${v} ${periodStr}${v === 1 ? '' : 's'} ago`;
};

const _formatMls = (
  mls,
  nowMls
) => {
  const _nowMls = nowMls || Date.now()
  , _diff = Math.abs(mls - _nowMls);
  for(let i=0; i<PERIOD_LENGTH; i++){
    if (_diff < PERIODS[i][1]) {
      return i === 0
        ? PERIODS[0][0]
        : _crTimeAgo(_diff, i-1);
    }
  }
  return _crTimeAgo(_diff, PERIOD_LAST_INDEX);
};

export const safeFormatMls = (
  mls,
  nowMls
) => isNumber(mls)
  ? _formatMls(mls, nowMls)
  : ''

export const safeFormatSec = (
  sec,
  nowMls
) => isNumber(sec)
  ? _formatMls(sec*1000, nowMls)
  : ''
