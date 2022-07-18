
const TextDiv = ({
  className,
  style,
  text
}) => text
  ? (<div
       className={className}
       style={style}
     >
       {text}
     </div>)
  : null

export default TextDiv
