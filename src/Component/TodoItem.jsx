import './TodoItem.css';

const TodoItem = () =>{
    return(
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type='checkbox' />
            </div>
            <div className='title_col'>What to do</div>
            <div className='date_col'>{new Date().toDateString()}</div>
            <div className='btn_col'>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;