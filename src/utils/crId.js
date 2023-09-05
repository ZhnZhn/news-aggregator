const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
, INITIAL_INDEX = 10**7
, _mathFloor = Math.floor
, _mathRandom = Math.random;
let i = INITIAL_INDEX
, idSuffix = '';

export const crId = () => {
  if (++i === MAX_SAFE_INTEGER) {
    i = INITIAL_INDEX
    idSuffix = '-' + _mathFloor(_mathRandom()*100)
  }
  const _str = (i).toString(36);
  return `${_str.at(-1)}${_str.at(-2)}${_str.at(-3)}${_str.slice(0, -3)}${idSuffix}`;
};
