const Button = (  
  children,
  ...restProps
) => (
  <button
    type="button"
    {...restProps}
  >
    {children}
  </button>
);

export default Button
