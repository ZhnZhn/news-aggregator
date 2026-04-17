import SafeLink from '../zhn/SafeLink';
import UseLogoById from './UseLogoById'

// biome-ignore-start lint/a11y/useAnchorContent: tag a has arria-label
const LogoGitHub = (props) => (
  <SafeLink
    aria-label={props.ariaLabel}
    className={props.className}
    href={props.href}
  >
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"      
      viewBox="0 0 16 16"
    >
      <UseLogoById id="GitHub" />
    </svg>
  </SafeLink>
);
// biome-ignore-end lint/a11y/useAnchorContent: tag a has arria-label

export default LogoGitHub
