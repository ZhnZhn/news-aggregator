import { toLink } from '../uiApi';
import { crTooltip } from '../a11yFn';

import UseLogoById from './UseLogoById'

// biome-ignore-start lint/a11y/useAnchorContent: tag a has arria-label
const LogoGitHub = (props) => {
  const [
    _ariaLabel,
    _dataPos
  ] = crTooltip(
    props.ariaLabel,
    props.dataPos
  );
  return (
    <a
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      className={props.className}
      href={toLink(props.href)}
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <UseLogoById id="GitHub" />
      </svg>
    </a>
  );
}
// biome-ignore-end lint/a11y/useAnchorContent: tag a has arria-label

export default LogoGitHub
