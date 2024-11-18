import './Button.css';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import NewItem from './NewItem';

const Button = ({onCreate}) => {

    const [Click,setClick] = useState(false);
    
    return(
    <>
    <button className='btn' onClick={()=>setClick(true)}>New Item</button>
    {Click && createPortal(<NewItem onClose={()=>setClick(false)}/>, document.body)}
    </>);
};

 export default Button;