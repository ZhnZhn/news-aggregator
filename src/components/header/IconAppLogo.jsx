
const _crRect = (
  rx,
  y, x,
  height, width,
  color
) => (
  <rect
    ry="2"
    rx={rx}
    y={y}
    x={x}
    height={height}
    width={width}
    fill={color}
    stroke={color}
  />
);

const IconAppLogo = ({
  ariaLabel,
  dataPos,
  className
}) => (
    <span
       aria-label={ariaLabel}
       data-pos={dataPos}
       className={className}
    >
    <svg
       viewBox="0 0 32 32"
       xmlns="http://www.w3.org/2000/svg"
       fillRule="evenodd"
       clipRule="evenodd"
       strokeLinejoin="round"
       strokeMiterlimit="2"
       strokeWidth="2"
    >
      {_crRect(194, 1.5, 19, 12.5, 11, "#8ecc2d")}
      {_crRect(204.5, 17.5, 9, 13.5, 18, "#232f3b")}
      {_crRect(204.5, 3.5, 2.5, 11, 10, "#a487d4")}
    </svg>
  </span>
);

export default IconAppLogo
