const setDfItemTo = (
  options,
  value,
  dfIndex
) => {
  options.DF = options
    .find(item => item.value === value)
    || options[dfIndex]
};

export default setDfItemTo
