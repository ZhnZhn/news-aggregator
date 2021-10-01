const _crViewBox = size => `0 0 ${size} ${size}`;

const SvgIcon = ({
  color='currentColor',
  size='24',
  children,
  ...restProps
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={_crViewBox(size)}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      {children}
    </svg>
);

export default SvgIcon
