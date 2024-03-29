
const _fTextToken = (
  Comp
) => ({
  className,
  style,
  text
}) => text
  ? (<Comp
       className={className}
       style={style}
     >
       {text}
     </Comp>)
  : null;

export const TextDiv = _fTextToken("div")
export const TextSpan = _fTextToken("span")
