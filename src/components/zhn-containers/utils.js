
const utils = {
  isInCont: (arrComps, comp) => {
    const { key } = comp, _max = arrComps.length;
    let i = 0;
    for(i;i<_max;i++) {
      if (arrComps[i].key === key) {
        return true;
      }
    }
    return false;
  }
};

export default utils
