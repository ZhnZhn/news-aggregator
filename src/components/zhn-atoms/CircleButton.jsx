import React from 'react'

const CL_BT = 'bt-circle not-selected';

const CircleButton = ({
  caption='', title,
  className, style,
  onClick
}) => {
    const _className = className
      ? `${CL_BT} ${className}`
      : CL_BT;
    return (
      <button
         className={_className}
         style={style}
         title={title}
         onClick={onClick}
      >
         {caption}
      </button>
    );
}

export default CircleButton
