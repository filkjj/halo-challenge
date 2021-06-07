import React from 'react';


const ToDoButton = ({
    itemID,
    buttonClassName,
    reducerAction,
    textToDisplay=""
}) =>{

    return(
        <div className={buttonClassName}>
            <button onClick={()=>reducerAction()}>{textToDisplay}</button>
        </div>
    )
}

export default ToDoButton;