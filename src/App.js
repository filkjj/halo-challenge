import React from 'react';
import SingleToDo from './SingleToDo'
import './scss_styles/App.scss'

const App = ({toDoList}) =>{
  
  if(toDoList.length>0){ 
    return(
      <div className='todoitems'>
        {toDoList.map(itemToDo=>{
          return(
            <div key={`itemToDo_${itemToDo.id}`}>
              <SingleToDo itemToDo={itemToDo} />
            </div>
          )
        })}
      </div>
    )
  }else{
    return(
      <div>Add some todos!</div>
    )
  }
}

export default App;
