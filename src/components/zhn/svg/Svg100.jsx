import Svg from './Svg';

const Svg100 = ({
  children,
  ...restProps
}) => (
  <Svg
    {...restProps}
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  >
    {children}
  </Svg>
);

export default Svg100
