import toLink from '../zhn-utils/toLink';

const SafeLink = ({
  className,
  style,
  href,
  children,
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
  ) : null;
};

export default SafeLink
