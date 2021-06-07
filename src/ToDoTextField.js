import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateTodoStatus } from './app/actions';

const ToDoTextField = ({toDoItem}) =>{
    
    const dispatch = useDispatch();
    const defaultContent = toDoItem.content
    const [ isEditing, setIsEditing ] = useState(false);
    const [ content, setContent ] = useState(defaultContent);

    const handleKeyDown = (ev) =>{
        if(ev.key === "Enter"){
            const updatedToDo = toDoItem;
            updatedToDo.content = ev.target.value;
            dispatch(updateTodoStatus(updatedToDo));
            setIsEditing(false);
            ev.preventDefault();
            ev.stopPropagation();
        }
        if(ev.key === "Escape"){
            setIsEditing(false);
            ev.preventDefault();
            ev.stopPropagation();
        }
    }

    if(!isEditing){
        return(
            <div onDoubleClick={()=>setIsEditing(true)}>
                {content}
            </div>
        )
    }else{
        return(
            <input
                type='text'
                value={content}
                onChange={(ev)=>setContent(ev.target.value)}
                onKeyDown={(ev)=>handleKeyDown(ev)}
            />
        )
    }

    
}


export default ToDoTextField;