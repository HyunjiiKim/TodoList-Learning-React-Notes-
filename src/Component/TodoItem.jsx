import './TodoItem.css';

import React from 'react';

const TodoItem = ({id, content, isDone, createdOn, onUpdate, onDelete}) =>{

    console.log(`${id} TodoItem Updated`)

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id)
    }

    return(
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createdOn).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default React.memo(TodoItem);