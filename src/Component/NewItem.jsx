import './TodoEditor.css';

import React,{ useState,useRef } from "react";


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
        <div className='modalBox center'>
            <form className='form'>
                <input className='h4' type='text' placeholder="New Item..." value={Content} onChange={onChangeContent} ref={inputRef}/>
                <div>
                    <div>
                        <label htmlFor='CreatedDate'>Created on: </label>
                        <input type='date' onChange={onChangeContent} name='CreatedDate' />
                    </div>
                    <div>
                        <label htmlFor='CompletedDate'>Completed on: </label>
                        <input type='date' onChange={onChangeContent} name='CompletedDate' />
                    </div>
                </div>
                <div>
                    <label htmlFor='importance'>Importance: </label>
                    <div>
                        <input type='radio' name='importance' value='1'/>
                        <label htmlFor='importance'>Very Important</label>
                    </div>
                    <div>
                        <input type='radio' name='importance' value='2'/>
                        <label htmlhtmlFor='importance'>Important</label>
                    </div>
                    <div>
                        <input type='radio' name='importance' value='3'/>
                        <label htmlFor='importance'>Not Important</label>
                    </div>
                    
                    
                </div>
                <div>
                    <label>Tags</label>
                    <input type='text'/>
                </div>
                <label>Description</label>
                <input type='textarea' />
                <div className='GrpBtn'>
                    <button className='BtnWhite' onClick={onClose}>Cancel</button>
                    <button className='BtnBlue' onClick={()=>{onClose;onSubmit;}}>Save</button>
                </div>

            </form>
        </div>
    )
}

export default NewItem;