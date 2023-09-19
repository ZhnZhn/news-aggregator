
export const crLazyValue = (
  crValue
) => {
  let _value;
  return () => _value === void 0
    ? _value = crValue()
    : _value;
};
