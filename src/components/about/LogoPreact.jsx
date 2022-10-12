
const LogoPreact = ({
  ariaLabel,
  dataPos,
  className
}) => (
  <a
     aria-label={ariaLabel}
     data-pos={dataPos}
     className={className}
     href="https://preactjs.com"
     tabIndex="-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60px"
      height="60px"
      viewBox="-256 -256 512 512"
    >
      <path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="white"/>
      <ellipse cx="0" cy="0" rx="75px" ry="196px" stroke-width="16px" stroke-dasharray="358.1911894296917 88.8088105703083" stroke-dashoffset="2981.2868930080463" fill="none" stroke="#673ab8" transform="rotate(52)"/>
      <ellipse cx="0" cy="0" rx="75px" ry="196px" stroke-width="16px" stroke-dasharray="415.8864127967576 31.113587203242375" stroke-dashoffset="-2105.557459071302" fill="none" stroke="#673ab8" transform="rotate(-52)"/>
      <circle cx="0" cy="0" r="34" fill="#673ab8"/>
    </svg>
  </a>
);

export default LogoPreact
