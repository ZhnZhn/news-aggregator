const toMls = sec => typeof sec === 'number'
  ? sec*1000
  : void 0;

export default toMls
