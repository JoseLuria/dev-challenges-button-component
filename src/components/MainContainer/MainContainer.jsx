import React from 'react';
import "./MainContainer.style.css"

const MainContainer = ({children}) => {
  return (
    <main className='MainContainer'>
      <h1>Buttons</h1>
      <div className='MainButtons'>
        {children}
      </div>
    </main>
  )
};

export default MainContainer;
