import Svg from './Svg';

const SvgIcon = ({
  color='currentColor',
  size='24',
  children,
  ...restProps
}) => (
    <Svg
      w={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      {children}
    </Svg>
);

export default SvgIcon
