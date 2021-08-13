
const isInCont = (arrComps, comp) => {
  const { key } = comp;
  let i = 0;
  for(i;i<arrComps.length;i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }
  return false;
};

export default isInCont
