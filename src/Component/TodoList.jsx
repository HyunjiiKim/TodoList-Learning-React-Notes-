//import components
import TodoItem from './TodoItem';
//stylesheet
import './TodoList.css';
//react hooks
import { useState } from 'react';


const TodoList = ({todo, onUpdate}) =>{
    
    //create Search
    const [search,setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    //implement filter
    const getSearchResult = () => {
        return search ===''
        ? todo
        : todo.filter((it)=>
            it.content.toLowerCase().includes(search.toLowerCase()));
    };


    return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <input className='Searchbar'
        value={search}
        onChange={onChangeSearch}
        placeholder='Search Item(s)...'/>
        <div className='listWrapper'>
            {getSearchResult().map((it) => (
                <TodoItem key={it.id} {...it} onUpdate={onUpdate}/>
            ))}
        </div>
    </div>)
};

export default TodoList;