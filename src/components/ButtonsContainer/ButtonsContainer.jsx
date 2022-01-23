import React from 'react';
import "./ButtonsContainer.style.css"

const ButtonsContainer = ({children}) => {
  return (
    <div className='ButtonsContainer'>
      {children}
    </div>
  )
};

export default ButtonsContainer;
