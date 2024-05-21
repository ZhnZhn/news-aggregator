import { toLink } from '../uiApi';

const SafeLink = ({
  className,
  style,
  href,
  children,
  fallback=null,
  ...restProps
}) => {
  const _href = toLink(href);
  return _href ? (
    <a
      className={className}
      style={style}
      {...restProps}
      href={_href}
      target="_blank"
    >
      {children}
    </a>
  ) : fallback;
};

export default SafeLink
