//import components
import TodoItem from './TodoItem';
//stylesheet
import './TodoList.css';
//react hooks
import { useState, useMemo, useContext } from 'react';
import React from 'react';
import { TodoStateContext } from '../App';


const TodoList = () => {

    const todo = useContext(TodoStateContext);
    //const storeData=useContext(TodoContext);
    //console.log(storeData);
    
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

    const analyzeTodo = useMemo(() =>{
        //console.log("Call analyseTodo()");
        
        const totalCount = todo.length;
        const doneCount = todo.filter((it)=>it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return{
            totalCount,
            doneCount,
            notDoneCount,
        };
    },[todo]);

    const {totalCount, doneCount, notDoneCount} = analyzeTodo;
    

    return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <div>
            <div>Total : {totalCount}</div>
            <div>Done: {doneCount}</div>
            <div>To do: {notDoneCount}</div>
        </div>
        <input className='Searchbar'
        value={search}
        onChange={onChangeSearch}
        placeholder='Search Item(s)...'/>
        <div className='listWrapper'>
            {getSearchResult().map((it) => (
                <TodoItem key={it.id} {...it} />
            ))}
        </div>
    </div>)
};

export default TodoList;