import SafeLink from '../zhn/SafeLink';
import UseLogoById from './UseLogoById';

const S_PREACT = {
  transform: 'translate(-210px, -210px) scale(0.9)'
};

// biome-ignore-start lint/a11y/useAnchorContent: tag a has arria-label
const LogoPreact = (props) => (
  <SafeLink
     aria-label={props.ariaLabel}
     className={props.className}
     href="https://preactjs.com"
  >
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-256 -256 512 512"
    >
      <UseLogoById
         id="Preact"
         style={S_PREACT}
      />
    </svg>
  </SafeLink>
);
// biome-ignore-end lint/a11y/useAnchorContent: tag a has arria-label

export default LogoPreact
