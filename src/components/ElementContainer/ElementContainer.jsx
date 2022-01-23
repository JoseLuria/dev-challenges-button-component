import React from 'react';
import "./ElementContainer.style.css"

const ElementContainer = ({children, title}) => {
  return (
    <div>
      <p className='ElementTitle'>{title}</p>
      {children}
    </div>
  )
};

export default ElementContainer;
