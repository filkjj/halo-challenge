import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo, markAllComplete } from './app/actions';
import "./scss_styles/InputToDoForm.scss";

const InputToDoForm = ({toDoList}) =>{

    const [newToDo, setNewToDo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        dispatch(addNewTodo(newToDo));
        setNewToDo('');
    }

    return(
        <div className="newtodosinput">
            {toDoList.length>0 ? 
                <button
                    onClick={()=>dispatch(markAllComplete(toDoList))}
                >
                    V
                </button>
            :
                <></>
            }
            <form onSubmit={(ev)=>handleSubmit(ev)} >
                <input 
                    type="text"
                    value={newToDo}
                    onChange={(ev)=>setNewToDo(ev.target.value)}
                />
            </form>
        </div>
    )
}

export default InputToDoForm;