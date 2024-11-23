import './TodoItem.css';
import React, {useContext} from 'react';
import { TodoContext } from '../App';

const TodoItem = ({id, title, content, isDone, createdDate, completedDate, importance, tag, description}) =>{

    console.log(`${id} TodoItem Updated`)

    const {onUpdate, onDelete} = useContext(TodoContext);

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
            <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default React.memo(TodoItem);