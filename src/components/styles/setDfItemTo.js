const setDfItemTo = (
  options,
  value,
  dfIndex
) => {
  options.DF = options
    .find(item => item[1] === value)
    || options[dfIndex]
};

export default setDfItemTo
