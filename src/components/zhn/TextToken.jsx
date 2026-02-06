
const _fTextToken = (
  Comp
) => (props) => props.text
  ? (<Comp
       className={props.className}
       style={props.style}
     >
       {props.text}
     </Comp>)
  : null;

export const TextDiv = _fTextToken("div")
export const TextSpan = _fTextToken("span")
