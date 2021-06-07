import React, {useState} from 'react';
import ToDoCounter from './ToDoCounter';
import DeleteCompleted from './DeleteCompleted';
import './scss_styles/FilterList.scss'

const FilterList = ({toDoList,setFilterdList,setIsFiltering}) =>{

    const [numTodos, setNumTodos] = useState(0);

    const filterListByTerm = (filterValue) =>{
        if(filterValue==='Active'){
            setFilterdList(filterList(false));
            setIsFiltering(true);
        }else if(filterValue==='Completed'){
            setFilterdList(filterList(true));
            setIsFiltering(true);
        }else{
            setIsFiltering(false);
        }
    }

    const filterList = (filterValue) =>{
        return toDoList.filter(ele=>ele.isDone===filterValue);
    }
    return(
        <div className='filterList'>
            <div>
                <ToDoCounter
                    numTodos={numTodos}
                    setNumTodos={setNumTodos}
                    toDoList={toDoList} />
            </div> 
            <div>
                <button onClick={()=>filterListByTerm('All')}>All</button>
                <button onClick={()=>filterListByTerm('Active')}>Active</button>
                <button onClick={()=>filterListByTerm('Completed')}>Completed</button>
            </div>
            <div>
                <DeleteCompleted 
                    numTodos={numTodos}
                    toDoList={toDoList} />    
            </div> 
        </div>
    )
}

export default FilterList;