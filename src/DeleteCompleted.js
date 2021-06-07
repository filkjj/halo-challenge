import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompletedToDos } from './app/actions';
import './scss_styles/DeleteCompleted.scss'

const DeleteCompleted = ({numTodos, toDoList}) =>{
    
    const dispatch = useDispatch();

    if(numTodos!==toDoList.length){
        return(
            <div>
                <button onClick={()=>dispatch(clearCompletedToDos(toDoList))}>
                    Clear Completed
                </button>
            </div>
        )
    }else{
        return(
            <div className='delete__completed__placeholder'>
                Clear Completed
            </div>
        )
    }

    
}

export default DeleteCompleted;