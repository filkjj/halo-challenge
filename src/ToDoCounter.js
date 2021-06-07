import React, {useEffect, useState} from 'react';


const ToDoCounter = ({numTodos, setNumTodos, toDoList}) =>{
    
    useEffect(()=>{
        setNumTodos(toDoList.reduce((acc,ele)=>{
            if(!ele.isDone){
                acc++
            }
            return acc;
        },0))
    },[toDoList])

    return(
        <div>
            {numTodos} items left
        </div>
    )
}

export default ToDoCounter;