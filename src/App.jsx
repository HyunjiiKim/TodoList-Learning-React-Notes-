import './App.css'

//react hooks
import { useReducer, useRef } from 'react'

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

function reducer(state, action){
  switch(action.type){
    case "CREATE":{
      return [action.newItem, ...state];
    }







    
    case "UPDATE":{
      return state.map((it)=>
      it.id===action.targetId
      ? {
        ...it,
        isDone: !it.isDone,
      }
      : it
      );
    }
    case "DELETE":{
      return state.filter((it)=>
      it.id !== action.targetId
    )
    }
    default: 
    return state;
  }
}

function App() {


  const [todo,dispatch] = useReducer(reducer, mockTodo);

  //Create
  const idRef = useRef(3);
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem: {
        id:idRef.current,
        content,
        isDone:false,
        createdOn: new Date().getTime(),
      },
    });
    idRef.current +=1;
  }

  //Update
  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })
    
  };

  //Delete
  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  };


  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
