import React from 'react';

const ActionButton = (props) => {
    const {
            type, className, style, title, caption,
            children, onClick
          } = props;
    let _className;
    switch (type) {
      case 'TypeA': _className = 'button-type-a'; break;
      case 'TypeC': _className = 'button-type-c'; break;
      default     : _className = 'button-type-b';
    }
    _className = (className)
        ? className + ' ' + _className
        : _className
    return (
      <button
           className={_className}
           style={style}
           title={title}
           onClick={onClick}
       >
         {caption}
         {children}
      </button>
     );
}

export default ActionButton
