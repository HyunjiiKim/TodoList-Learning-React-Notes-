import './App.css'

//react hooks
import { useState, useRef } from 'react'

//components
import Header from './Component/Header'
import TodoEditor from './Component/TodoEditor'
import TodoList from './Component/TodoList'

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'Learn React',
    createdOn: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Wash Dishes',
    createdOn: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Do Workout',
    createdOn: new Date().getTime(),
  }
];

function App() {


  const [todo,setTodo] = useState(mockTodo);

  //Create
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdOn: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current+=1;
  }

  //Update
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => 
          it.id===targetId ? {...it, isDone: !it.isDone} : it
        
      )
    );
  };


  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
