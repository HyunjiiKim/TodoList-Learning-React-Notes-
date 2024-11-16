import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () =>{
    return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <input className='Searchbar' placeholder='Search Item(s)...'/>
        <div className='listWrapper'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    </div>)
};

export default TodoList;