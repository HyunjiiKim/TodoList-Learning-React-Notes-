import './TodoItem.css';

const TodoItem = ({id, content, isDone, createdOn}) =>{
    return(
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type='checkbox' checked={isDone} />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createdOn).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;