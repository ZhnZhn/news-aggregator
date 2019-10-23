
const pipe = (...fns) => {
  if (fns.length === 0) {
    return arg => arg;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return (x) => fns.reduce((v, fn) => fn(v), x);
};

export default pipe
