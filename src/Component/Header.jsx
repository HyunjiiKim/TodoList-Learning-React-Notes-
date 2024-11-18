import './Header.css';

import React from 'react';

const Header = () =>{
    //console.log('Header Updated');
    return(
        <div className='Header'>
            <h3>Today 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
  
    )
}

export  default React.memo(Header);