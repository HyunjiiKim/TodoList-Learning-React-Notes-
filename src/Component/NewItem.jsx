import './TodoEditor.css';

import { useState,useRef } from "react";


const NewItem = ({onClose,onCreate}) =>{
    console.log("NewItem Called")

  
    const [Content,setContent] = useState("");
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }
    const inputRef=useRef();
 
    function onSubmit(){
        onCreate(Content);
    };

    return(
        <div className='EditorWrapper'>
        <input type='text' placeholder="New Item..." value={Content} onChange={onChangeContent} ref={inputRef}/>
        <button onClick={()=>{onClose;onSubmit;}}>Save</button>
        </div>
    )
}

export default NewItem;