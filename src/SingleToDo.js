import React, {useState} from 'react';
import ToDoButton from './ToDoButton';
import { useDispatch } from 'react-redux';
import { deleteTodo,updateTodoStatus } from './app/actions';
import ToDoTextField from './ToDoTextField';
import './scss_styles/SingleToDo.scss';

const SingleToDo = ({itemToDo}) =>{

    const dispatch = useDispatch();
    const { id,isDone } = itemToDo;
    const [showDelete, setShowDelete] = useState('hide')

    return (
        <div 
            className={`singletodo single--todo--${isDone?'completed':'uncompleted'}`}
            onMouseEnter={()=>setShowDelete('show')}
            onMouseLeave={()=>setShowDelete('hide')}
        >
            <ToDoButton 
                itemID={id} 
                buttonClassName={`button__marker buttonMarked--${isDone?'completed':'uncompleted'}`}
                reducerAction={()=>{
                    const updatedToDo = itemToDo;
                    updatedToDo.isDone = !isDone;
                    dispatch(updateTodoStatus(updatedToDo))
                }}
                textToDisplay="a"
            />

            <ToDoTextField toDoItem={itemToDo} />

            <ToDoButton 
                itemID={id} 
                buttonClassName={`button__delete__toDo button--delete--${showDelete}`}
                reducerAction={()=>dispatch(deleteTodo(id))}
                textToDisplay="X"
            />
        </div>
    )
}

export default SingleToDo;