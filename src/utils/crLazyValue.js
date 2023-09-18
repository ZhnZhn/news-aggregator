
export const crLazyValue = (
  crValue
) => ({
  get value(){
    const _value = crValue();    
    Object.defineProperty(this, "value", {
      value: _value,
      readable: true,
      writable: false,
      enumerable: false
    })
    return _value;
  }
})
