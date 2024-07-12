
const Svg = ({
  w,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    width={`${w}px`}
    height={`${h}px`}
    aria-hidden="true"
    role="img"
    {...restProps}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox={`0 0 ${w} ${h}`}
  >
    {children}
  </svg>
);

export default Svg
