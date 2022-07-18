
const TextSpan = ({
  className,
  style,
  text
}) => text
  ? (<span
       className={className}
       style={style}
     >
       {text}
     </span>)
  : null

export default TextSpan
