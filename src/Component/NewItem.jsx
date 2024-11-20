import './TodoEditor.css';

import { useState,useRef } from "react";


const NewItem = ({onClose}) =>{
    console.log("NewItem Called")

    const createdDate = new Date().toLocaleDateString();
    const completedDate = new Date().toLocaleDateString()


    // implement useState for input tags (title, tag, description)
    const [title,setTitle] = useState("");
    const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const [tag,setTag] = useState("");
    const onChangeTag = (e) =>{
        setTag(e.target.value);
    }

    const [description,setDescription] = useState("");
    const onChangeDescription = (e) =>{
        setDescription(e.target.value);
    }

    const inputRef=useRef();
 

    return(
        <div className='modalBox center'>
            <div className='form'>
                <input type='text' placeholder="New Item..." value={title} onChange={onChangeTitle} ref={inputRef}/>
                <div>
                    <p>Created on: {createdDate}</p>
                    <p>Completed on: {completedDate}</p>
                </div>
                <div className='tag'>
                    Tags : <input type='text' value={tag} onChange={onChangeTag}/>
                </div>
                <div>
                    <h4>Description</h4>
                    <input type='textarea' value={description} onChange={onChangeDescription} />
                </div>
                <div className='GrpBtn'>
                    <button className='BtnBlue' onClick={onClose}>Save</button>
                    <button className='BtnWhite' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewItem;