import useTooltip from '../hooks/useTooltip';
import UseLogoById from './UseLogoById';

const S_PREACT = {
  transform: 'translate(-210px, -210px) scale(0.9)'
};

const LogoPreact = ({
  ariaLabel,
  dataPos,
  className
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip(
    ariaLabel,
    dataPos
  );
  return (
    <a
       aria-label={_ariaLabel}
       data-pos={_dataPos}
       className={className}
       href="https://preactjs.com"
       tabIndex="-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"      
        viewBox="-256 -256 512 512"
      >
        <UseLogoById
           id="Preact"
           style={S_PREACT}
        />
      </svg>
    </a>
  );
}

export default LogoPreact
