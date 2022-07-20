
const AppLabel = ({
  className,
  style,
  caption,
  title,
  onClick
}) => (
  <span
     className={className}
     style={style}
     title={title}
     onClick={onClick}
  >
    {caption}
  </span>
);

export default AppLabel
