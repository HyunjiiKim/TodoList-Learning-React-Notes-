//import Stylesheet
import './TodoEditor.css';
//import Reacthooks
import { useRef,useState,useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoEditor = () => {

    const {onCreate} = useContext(TodoDispatchContext);
    
    // Handling Event on input
    const [content, setContent] = useState("");
    const inputRef=useRef(); //Create an object to control input
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    // Submit with button
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("") //make input empty when it's submitted
    }

    //Submit input with Enter key (keycode 13)
    const onKeyDown = (e) =>{
        if(e.keyCode===13){
            onSubmit();
        }
    };

    return (
    <div className='TodoEditor'>
        <h4>Add New Item</h4>
        <div className='editorWrapper'>
            <input 
            placeholder='New Item...'
            ref={inputRef}
            value={content}
            onChange={onChangeContent}
            onKeyDown={onKeyDown} />
            <button 
            onClick={onSubmit}>Add</button>
        </div>
    </div>
)};

export default TodoEditor;