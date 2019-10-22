import React from 'react'

const CL_NOT_SELECTED = 'not-selected';
const S = {
  ROOT : {
    display : 'inline-block',
    color: '#80c040',
    border : '2px solid #80c040',
    borderRadius : '50%',
    lineHeight: '24px',
    width : 26,
    height : 26,
    textAlign: 'center',
    cursor: 'pointer'
  }
};

const CircleButton = (props) => {
    const {
           caption='', className, style,
           title,
           isWithoutDefault, onClick
         } = props
        , _className = className
             ? `${className} ${CL_NOT_SELECTED}`
             : CL_NOT_SELECTED
        , _style = isWithoutDefault
             ? style
             : {...S.ROOT, ...style};
    return (
      <button
         className={_className}
         style={_style}
         title={title}
         onClick={onClick}
      >
         {caption}
      </button>
    );
}

export default CircleButton
