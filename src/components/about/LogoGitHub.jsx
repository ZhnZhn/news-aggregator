import useTooltip from '../hooks/useTooltip';
import UseLogoById from './UseLogoById'

const LogoGitHub = ({
  ariaLabel,
  dataPos,
  className,
  href
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
      href={href}      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <UseLogoById id="GitHub" />
      </svg>
    </a>
  );
}

export default LogoGitHub
